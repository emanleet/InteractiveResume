/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Emmanuoel Haroutunian";
var role = "Developer";
//Replace generic helper.js data with variables containing
//personalized info
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var bio = {
	"name" : "Emmanuoel Haroutunian",
	"role" : "Financial Analyst",
	"contacts" : {
		"email" : "emmanuoel.h@gmail.com",
		"github" : "emanleet",
		"twitter" : "@emanleet",
		"location" : "Los Angeles"
	},
	"welcomeMessage" : "lore igipsum dolor sit a dumby welcome message is to be placed here",
	"skills" : [
		"Photoshop", "HTML", "CSS", "Javascript", "JQuery", "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)"
	],
	"bioPic" : "images/fry.jpg"
};
var education = {
	"schools": [
		{
			"name": "California State University, Northridge",
			"city": "Northridge, CA",
			"degree": "B.S. Business Management",
			"dates": "2011 - 2014",
			"url": "http://example.com"
		},
		{
			"name": "Glendale Community College",
			"city": "Glendale, CA"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Development",
			"school": "Udacity",
			"dates": 2015
		}
	]
};
var work = {
	"jobs": [
		{
			"employer": "World Telecom Group",
			"title": "Financial Analyst",
			"dates": "September 2015 - Present",
			"description": "Consolidated financial reports for over 120 telecommunications providers."
		},
		{
			"employer": "Diviniti Auto Dealer",
			"title": "Marketing Coordinator",
			"dates": "December 2014 - July 2015",
			"description": "Launched and maintained local and online marketing campaigns"
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "I did such and such in this project",
			"images": [
				"linkToImage1",
				"linkToImage2"
			]
		}
	]
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}




