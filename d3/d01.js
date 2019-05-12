//npm install --save @types/d3

import { getData } from './core.js'

$("#d00").html("jQuery works");

var svg = d3.select("#d02").append("svg"); //svg.attr("transform", "scale(2)");

// drawCircle(20,20,20); drawCircle(20,70,20); drawCircle(20,120,20);
function drawCircle(radius, x, y) { svg.append("circle").attr("fill", "red").attr("r", radius).attr("cx", x).attr("cy", y); }

//var gre = svg.append("g").gre.attr("class", "rectangleGroup"); drawRect(gre, 50,50,0,150);
function drawRect(gRect, w, h, x, y) { gRect.append("rect").attr("fill", "red").attr("width", w).attr("height", h).attr("x", x).attr("y", y); }

var data = [
    { date: "10/25/2018", value: 1 }, { date: "10/26/2018", value: 3 }, { date: "10/27/2018", value: 0 },
    { date: "10/28/2018", value: 5 }, { date: "10/29/2018", value: 8 }, { date: "10/30/2018", value: 7 },
    { date: "10/31/2018", value: 11 }, { date: "11/01/2018", value: 23 }, { date: "11/02/2018", value: 13 }
];

var margin = 50; var width = 1024; var height = 768;

svg.attr("width", width + margin).attr("height", height + 2 * margin).append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");

var line = d3.line().x(d => x(d.date)).y(d => y(d.value));
var parseTime = d3.timeParse("%m/%d/%Y");

data.forEach(x => { x.date = parseTime(x.date) });
var x = d3.scaleTime().domain(d3.extent(data, d => { return d.date })).range([0, width]);
var y = d3.scaleLinear().domain(d3.extent(data, d => { return d.value })).range([height, 0]);

svg.append("path").data([data]).attr("fill", "none").attr("stroke", "red").attr("d", line);