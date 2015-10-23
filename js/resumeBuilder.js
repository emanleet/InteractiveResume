/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Emmanuoel Haroutunian";
var role = "Developer";
//Replace generic helper.js data with variables containing personalized info
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);