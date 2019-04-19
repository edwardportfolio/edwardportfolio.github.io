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

Plotly.d3.csv('data-csv.csv', function(err, rows){

/* function */

/***
  To do more complicated filtering, we can use javascrip arrays' filter() method.

  Here, we create three different sets of rows.
  ***/

  var rows_unstable = rows.filter(function(item) {
    return item.Set == "Unstable";
  })

  var rows_unhinged = rows.filter(function(item) {
    return item.Set == "Unhinged";
  })

  var rows_unglued = rows.filter(function(item) {
    return item.Set == "Unglued";
  })

  var rows_gateway = rows.filter(function(item) {
    return item.Set == "Gateway";
  })

  var rows_champ = rows.filter(function(item) {
    return item.Set == "Champs and States";
  })

  var rows_friday = rows.filter(function(item) {
    return item.Set == "Friday_Night_Magic";
  })

console.log(unpack(rows, 'Power'));
console.log(unpack(rows, 'Toughness'));

let powerArray = unpack(rows, 'Power').map(Number)
let toughnessArray = unpack(rows, 'Toughness').map(Number)



  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var mtg = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: powerArray,
    y: toughnessArray,
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: '#000000'
    }
  };

  // Create the data object as an array of our data series objects:
  var data = [mtg];

  var mtg_unstable = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_unstable, 'Power'),
    y: unpack(rows_unstable, 'Toughness'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: '#172274'
    }
  };

  var data_unstable = [mtg_unstable];

  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var mtg_unhinged = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_unhinged, 'Power'),
    y: unpack(rows_unhinged, 'Toughness'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
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
    x: unpack(rows_unglued, 'Power'),
    y: unpack(rows_unglued, 'Toughness'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
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
    x: unpack(rows_gateway, 'Power'),
    y: unpack(rows_gateway, 'Toughness'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: 'Mtg',
    marker: {
      color: 'red'
    }
  };

  // Create the data object as an array of our data series objects:
  var data_gateway = [mtg_Gateway];

  var mtg_champ = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows_champ, 'Power'),
    y: unpack(rows_champ, 'Toughness'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
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
    x: unpack(rows_friday, 'Power'),
    y: unpack(rows_friday, 'Toughness'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, 'Card Name'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
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

  var layout_unstable = Object.assign({}, layout);
    layout_unstable.title = "Unstable";

  var layout_unhinged = Object.assign({}, layout);
    layout_unhinged.title = "Unhinged Creatures Power and Toughness";

  var layout_unglued = Object.assign({}, layout);
    layout_unglued.title = "Unglued Creatures Power and Toughness";

  var layout_gateway = Object.assign({}, layout);
    layout_gateway.title = "Gateway Creatures Power and Toughness";

  var layout_champ = Object.assign({}, layout);
      layout_champ.title = "Champ Creatures Power and Toughness";

      var layout_friday = Object.assign({}, layout);
        layout_friday.title = "Friday Creatures Power and Toughness";


//  var layout_friday = Object.assign({}, layout);
  //  layout_friday.title = "Friday Creatures Power and Toughness";

  var options = {
   displayModeBar: false, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('viz', data, layout, options);
  Plotly.newPlot('viz_unstable',data_unstable, layout_unstable, options);
  Plotly.newPlot('viz_unhinged', data_unhinged, layout_unhinged, options);
  Plotly.newPlot('viz_unglued', data_unglued, layout_unglued, options);
  Plotly.newPlot('viz_gateway', data_gateway, layout_gateway, options);
  Plotly.newPlot('viz_champ', data_champ, layout_champ, options);
  Plotly.newPlot('viz_friday', data_friday, layout_friday, options);
})
