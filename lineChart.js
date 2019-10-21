// console.log("Hello World from simple_highcharts.js!");

// Data of the line chart
var series = [
    {
       name: 'September',
       data: [6382884, 7352926, 7922921, 7142860],
       color: '#ffc72c',
       step: 'left'
       
    }, 
    {
       name: 'October',
       data: [6343865, 7170291, 6781234],
       color: '#000000',
       step: 'left'
    }, 
    {
       name: 'November',
       data: [6490244, 7549336, 7386402],
       color: '#da291c',
       step: 'left'
    }
 ];

 // Configuration about the plot
 var title = {
    text: 'National Hamburger Sales Trends'   
 };
 var subtitle = {
    text: 'Centered About October'
 };
 var xAxis = {
    categories: ['2016', '2017', '2018', '2019'],
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
var someVar = document.getElementById("lineChart");
Highcharts.chart(someVar, json);
 