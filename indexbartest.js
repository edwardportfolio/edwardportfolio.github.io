// This lets us get the unique items from an array:
$.extend({
    distinct : function(anArray) {
       var result = [];
       $.each(anArray, function(i,v){
           if ($.inArray(v, result) == -1) result.push(v);
       });
       return result;
    }
});

/***
This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
***/
let unpack = function(rows, key) {
  return rows.map(function(row) { return row[key]; });
}







$( document ).ready(function() {

  /*** When the page loads, we want to call the drawPlot function with "all" as the parameter: ***/
  drawPlot("All");

  // At this point, we also want to read in our CSV so we can generate the options in our dropdown.
  Plotly.d3.csv('data/police_reports.csv', function(err, rows){

    // rows is now an array from your CSV, so we can get a list of the unique crime types like this:
    let unique_crimes = $.distinct(
      unpack(rows, "Crime Type")
    );

    console.log(unique_crimes);

    // Now add options to the dropdown in the HTML for each unique crime.
  for(let i = 0; i < unique_crimes.length; i++)
    $('#crime_type').append('<option value="' + unique_crimes[i] + '">'+ unique_crimes[i]+ '</option>');


    // Now attach an event listener to the dropdown so that when the user selects a crime type, the map updates. You should call the drawPlot() function to update the map.

    $('#crime_type').on('change', function(event) {
      $('#viz').remove();
      $('#viz_holder').append('<div id="viz"></div>');
      drawPlot(event.target.value);
    });



  })

}) // document ready



var drawPlot = function(category) {


  Plotly.d3.csv('data/police_reports.csv', function(err, rows){


    var unpack = function(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }

   /* for(let i = 0; i < rows.length; i++) {
      console.log(rows[i]['Crime Type']);
    }*/

    if (category != "All") {
      console.log("filtering for ... " + category);
      var rows = rows.filter(function(item) {
        return item['Crime Type'] == category;
      })
    }

    console.log(rows);

    var data = [{
          type: 'scattermapbox',
          lat: unpack(rows, 'Latitude'),
          lon: unpack(rows, 'Longitude'),
          text: unpack(rows,'Crime Type'),
          hoverinfo: 'text',
          marker: {
            color: unpack(rows, 'Color')
          }

      }];


      var layout = {
       font: {
         color: '#222'
       },
        dragmode: 'zoom',
        mapbox: {
          center: { // Sets the center of the map.
            lat: 30.2672,
            lon: -97.7431
          },
          zoom: 9, // Sets the zoom level.
          style: 'light' // These are mapbox styles. Options include light, dark, satellite
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#ffffff',
        showlegend: false,
        displayModeBar: false
      };

      var options = {
       displayModeBar: false, // disable zoom, save and other toolbar options.
      }

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiZGNhcnRlciIsImEiOiJjamZiZXczdnozNXc2MnFwNDNvazdic3d5In0._SFNB_RTylq_bYxJbqVdiQ' // Get your own Mapbox access token by registering at mapbox.com
      });

      Plotly.plot('viz', data, layout, options);





  })

} // function drawPlot
