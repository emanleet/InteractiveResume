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
		},
				{
			"employer": "24Hr HomeCare",
			"title": "Human Resources Intern",
			"dates": "September 2014 - November 2014",
			"description": "Responsible for prescreening potential employees, explaining hiring packets, and handling confidential documents in accordance with HIPAA"
		},
		{
			"employer": "Computer Intelligence Associates, Inc",
			"title": "Marketing Coordinator",
			"dates": "November 2012 - November 2013",
			"description": "Performed in marketing and light web development projects"
		},
		{
			"employer": "Mark Lulechian Team",
			"title": "Real Estate Agent",
			"dates": "September 2008 - January 2011",
			"description": "Performed all activities in transaction cycle from lead generation to post-sale support for first time home buyers."
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






$("#main").append(internationalizeButton);
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
function displayWork() {
	for (job in work.jobs) {
		//Create work-entry class div
		$("#workExperience").append(HTMLworkStart);
		//Replace generic data and store into new variable
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		//Append work data to the last work-entry class div created
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
displayWork();





