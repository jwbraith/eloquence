
const { buildGraph } = require("../chapter10/packages_chapter_10");
const roads = require("../chapter10/07_robot");

exports.roadGraph = buildGraph(roads.map(r => r.split('-')));