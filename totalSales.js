// console.log("Hello World from simple_highcharts.js!");

// Data of the line chart
var series = [
    {
        name: 'Sales',
       data: [

        28858995, 29912597, 31755684, 32018869, 34453675, 34868647, 36321701, 37333286, 39073582, 
        39780222, 40127995, 35212665, 36911506, 36734404, 35484584],
       color: '#da291c' //#32CD32
       
    }
 ];

 // Configuration about the plot
 var title = {
    text: 'National Total Sales'   
 };
 var subtitle = {
    text: 'By Quarter'
 };
 var xAxis = {
    categories: ['2016 - Q1', '2016 - Q2', '2016 - Q3', '2016 - Q4', '2017 - Q1', '2017 - Q2','2017 - Q3', '2017 - Q4',
    '2018 - Q1','2018 - Q2','2018 - Q3','2018 - Q4','2019 - Q1','2019 - Q2','2019 - Q3'],
    title: {
        text:'Year'
    }
 };
 var yAxis = {
    title: {
       text: 'Sales (\u0024)'
    },
    plotLines: [{
       value: 0,
       width: 1,
    }]
 };  
 var tooltip = {
    valuePrefix: '\u0024'    // \u0024 is basically dollar sign
 }
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the barChart div
var someVar = document.getElementById("totalSales");
Highcharts.chart(someVar, json);
 