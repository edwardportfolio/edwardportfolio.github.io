/****

  To pull in data from a CSV file, we wrap our javascript inside a plot.d3.csv() function.

****/

/***
This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
***/
var unpack = function(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

Plotly.d3.csv('data-csv.csv', function(err, rows){

/* function */


console.log(unpack(rows, 'Power'));
console.log(unpack(rows, 'Toughness'));
  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var mtg = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: +unpack(rows, 'Power'),
    y: +unpack(rows, 'Toughness'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg'
  };




  /*** Now that we've created our data objects using our CSV, we just create the visualization as we've done before: ***/

  // Create the data object as an array of our data series objects:
  var data = [mtg];

  // The layout object provides options for how our visualization will appear:
  var layout = {
    title:'Magic The Gathering',
    showlegend: false,
    hovermode: true, // if false, disables the hover text for the entire plot
    xaxis: {
     title: 'Power'
    },
    yaxis: {
     title: 'Toughness'
    }
  }

  var options = {
   displayModeBar: false, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('viz', data, layout, options);




})
