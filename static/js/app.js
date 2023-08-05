function buildMetadata(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
   
    // Filter the data for the object with the desired sample number
 
    // Use d3 to select the panel with id of `#sample-metadata`


    // Use `.html("") to clear any existing metadata


    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
  

    // BONUS: Build the Gauge Chart
   
  });
}

function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
   

    // Build a Bubble Chart


    // Build a Bar Chart


  });
}

function init() {
  // Grab a reference to the dropdown select element
  let selector = d3.select("#selDataset");
  // Use the list of sample names to populate the select options

    // Use the first sample from the list to build the initial plots

  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected

}

// Initialize the dashboard
init();

