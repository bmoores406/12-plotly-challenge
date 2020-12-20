// Use the D3 library to read in samples.json.
function buildPlot() {
    d3.json("samples.json").then(function(data) {
        // console.log(data);
        var data = data.samples
        console.log(data)

        var sample_values = data.map(function (sample) {
            return sample.sample_values.slice(0,10)
        });
        console.log(sample_values)

        var otu_ids = data.samples.map(function(id) {
            return id.otu_ids
        });
        console.log(otu_ids)

        var otu_labels = data.samples.map(function(label) {
            return label.otu_labels
        });
        console.log(otu_labels)

        var trace1 = {
            x: sample_values,
            y: otu_ids,
            type: "bar"
        };

        var data = [trace1];

        var layout = {
            title: "Bar Chart",
            // xaxis: "Sample Id",
            // yaxis: "Sample Value"
        };

        Plotly.newPlot("bar", data, layout);
    });
}

buildPlot();