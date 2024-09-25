// Create a basic Sankey chart using D3.js
google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
      ['Source', 'Add to Cart', 5],
      ['Add to Cart', 'Purchase', 3]
    ]);

    var options = {
      width: 600,
    };

    var chart = new google.visualization.Sankey(document.getElementById('sankey_chart'));
    chart.draw(data, options);
}
