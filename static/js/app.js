function buildMetadata(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
   
    // Filter the data for the object with the desired sample number
  let individual = data.metadata.filter(obj => obj.id == sample) [0];
 
    // Use d3 to select the panel with id of `#sample-metadata`
  let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
  panel.html("");

    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
  for(metaIndividual in individual) {
    panel.append("h5").text(`${metaIndividual}: ${individual[metaIndividual]}`)
  }


    // BONUS: Build the Gauge Chart
   
  });
}

function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
   

    // Build a Bubble Chart
let individual = data.samples.filter(obj => obj.id == sample) [0];

let trace1 = {
  x: individual.otu_ids,
  y: individual.sample_values,
  marker: {size: individual.sample_values, color: individual.otu_ids, colorscale: "Earth"},
  text: individual.otu_labels,
  mode: "markers"
}

let bubbleChart = [trace1];

let bubbleLayout = {
  title: "OTU Colonies",
  xaxis: {title: "OTU ID"}
}

    // Build a Bar Chart
let trace2 = {
  x: individual.sample_values.slice(0,10).reverse(),
  y: individual.otu_ids.slice(0,10).map(obj => `otu${obj}`).reverse(),
  type: "bar",
  orientation: "h",
  text: individual.otu_labels.slice(0,10).reverse()
}

let barList = [trace2];

let barLayout = {
  title: "Top 10 OTUs"
}
Plotly.newPlot("bar", barList, barLayout)
Plotly.newPlot("bubble", bubbleChart, bubbleLayout)
  });
}

function init() {
  // Grab a reference to the dropdown select element
  let selector = d3.select("#selDataset");
  // Use the list of sample names to populate the select options
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data)=>{
    console.log(data)
    for(let i = 0; i < data.names.length; i++){selector.append("option").text(data.names[i]).property("value", data.names[i])}
  })

    // Use the first sample from the list to build the initial plots
    buildCharts("940")
    buildMetadata("940")
  };

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
buildCharts(newSample);
buildMetadata(newSample)
}

// Initialize the dashboard
init();

