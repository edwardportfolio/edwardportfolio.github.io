/****

  To pull in data from a CSV file, we wrap our javascript inside a plot.d3.csv() function.

****/
// This lets us get the unique items from an array:

/***
This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
***/
var unpack = function(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

$(document).ready(function(){

Plotly.d3.csv('', function(err, rows){

/* function */

/***
  To do more complicated filtering, we can use javascrip arrays' filter() method.

  Here, we create three different sets of rows.
  ***/

  var rows_unstable = rows.filter(function(item) {
    return item.Set == "";
  })

  var rows_unhinged = rows.filter(function(item) {
    return item.Set == "";
  })

  var rows_unglued = rows.filter(function(item) {
    return item.Set == "";
  })

  var rows_gateway = rows.filter(function(item) {
    return item.Set == "";
  })

  var rows_champ = rows.filter(function(item) {
    return item.Set == "";
  })

  var rows_friday = rows.filter(function(item) {
    return item.Set == "";
  })

console.log(unpack(rows, ''));
console.log(unpack(rows, ''));

let powerArray = unpack(rows, '').map(Number)
let toughnessArray = unpack(rows, '').map(Number)



  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var mtg = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: powerArray,
    y: toughnessArray,
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: '#000000'
    }
  };

  // Create the data object as an array of our data series objects:
  var data = [mtg];

  var mtg_unstable = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_unstable, ''),
    y: unpack(rows_unstable, ''),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: '#172274'
    }
  };

  var data_unstable = [mtg_unstable];

  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var mtg_unhinged = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_unhinged, ''),
    y: unpack(rows_unhinged, ''),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: '#172274'
    }
  };

  // Create the data object as an array of our data series objects:
  var data_unhinged = [mtg_unhinged];

  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var mtg_unglued = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_unglued, ''),
    y: unpack(rows_unglued, ''),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: '#172274'
    }
  };

  // Create the data object as an array of our data series objects:
  var data_unglued = [mtg_unglued];

  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var mtg_Gateway = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_gateway, ''),
    y: unpack(rows_gateway, ''),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: 'red'
    }
  };

  // Create the data object as an array of our data series objects:
  var data_gateway = [mtg_Gateway];

  var mtg_champ = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_champ, ''),
    y: unpack(rows_champ, ''),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: 'red'
    }
  };

  // Create the data object as an array of our data series objects:
  var data_champ = [mtg_champ];


  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
var mtg_friday = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_friday, ''),
    y: unpack(rows_friday, ''),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: 'red'
    }
  };

  // Create the data object as an array of our data series objects:
   var data_friday = [mtg_friday];


  /*** Now that we've created our data objects using our CSV, we just create the visualization as we've done before: ***/



  // The layout object provides options for how our visualization will appear:
  var layout = {
    title:'Magic The Gathering Sets',
    showlegend: false,
    hovermode: true, // if false, disables the hover text for the entire plot
    xaxis: {
     title: ''
    },
    yaxis: {
     title: ''
    }
  }

  var layout_unstable = Object.assign({}, layout);
    layout_unstable.title = "";

  var layout_unhinged = Object.assign({}, layout);
    layout_unhinged.title = "";

  var layout_unglued = Object.assign({}, layout);
    layout_unglued.title = "";

  var layout_gateway = Object.assign({}, layout);
    layout_gateway.title = "";

  var layout_champ = Object.assign({}, layout);
      layout_champ.title = "";

      var layout_friday = Object.assign({}, layout);
        layout_friday.title = "";


//  var layout_friday = Object.assign({}, layout);
  //  layout_friday.title = "Friday Creatures Power and Toughness";

  var options = {
   displayModeBar: false, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('', data, layout, options);
  Plotly.newPlot('',data_unstable, layout_unstable, options);
  Plotly.newPlot('', data_unhinged, layout_unhinged, options);
  Plotly.newPlot('', data_unglued, layout_unglued, options);
  Plotly.newPlot('', data_gateway, layout_gateway, options);
  Plotly.newPlot('', data_champ, layout_champ, options);
  Plotly.newPlot('', data_friday, layout_friday, options);



  $('button#ft').on('click', function(){
    $('').hide();
    $('').hide();
    $('').hide();
    $('').hide();
    $('').hide();
    $('').show();
    $('').show();
    console.log('works');
  });

  $('button#gt').on('click', function(){
    $('').hide();
    $('').show();
    $('').show();
    $('').hide();
    $('').hide();
    $('').hide();
    $('').hide();
    console.log('works');
  });


  $('button#ct').on('click', function(){
    $('').hide();
    $('').hide();
    $('').hide();
    $('').hide();
    $('').hide();
    $('').show()
    $('').show();
    console.log('works');
  });

  $('button#mtgall').on('click', function(){
    $('').show();
    $('').show();
    $('').show();
    $('').show();
    $('').show();
    $('').show();
    $('').show();
    console.log('works');
  });


})

});
