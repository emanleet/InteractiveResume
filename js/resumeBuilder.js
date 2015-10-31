
//TODO: Encapsulate objects into functions
//Fix Google Maps functionality
//Fixs how skills are listed horizontally (make vertical)
$("#main").append(internationalizeButton);
//Add map to page
$("#mapDiv").append(googleMap);


//Create biography object
var bio = {
	"name" : "Emmanuoel Haroutunian",
	"role" : "Financial Analyst",
	"contacts" : {
		"email" : "emmanuoel.h@gmail.com",
		"github" : "emanleet",
		"twitter" : "@emanleet",
		"location" : "Los Angeles"
	},
	"welcomeMessage" : "Hello there!",
	"skills" : [
		"Photoshop", "HTML", "CSS", "Javascript", "JQuery", "Microsoft Office"
	],
	"bioPic" : "http://i1183.photobucket.com/albums/x474/hazyb71/Emmanuel_zps9icwm5j8.jpg"
};

bio.display = function () {
	var name = "Emmanuoel Haroutunian";
	var role = "Developer";
	//Replace generic helper.js data with variables containing personal info
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	//Add name, role, and internationalize button to page
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(formattedBioPic);

	//Create contact info
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var location = HTMLlocation.replace("%data%", bio.contacts.location);
	//Add contact info to page
	$("#topContacts").append(email);
	$("#topContacts").append(github);
	$("#topContacts").append(twitter);
	$("#topContacts").append(location);
	//Add skills to resume
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};
bio.display();

//Create work object
var work = {
	"jobs": [
		{
			"employer": "World Telecom Group",
			"title": "Financial Analyst",
			"dates": "September 2015 - Present",
			"location": "Malibu, CA",
			"description": "Consolidated financial reports for over 120 telecommunications providers."
		},
		{
			"employer": "Diviniti Auto Dealer",
			"title": "Marketing Coordinator",
			"dates": "December 2014 - July 2015",
			"location": "Montrose, CA",
			"description": "Launched and maintained local and online marketing campaigns"
		},
				{
			"employer": "24Hr HomeCare",
			"title": "Human Resources Intern",
			"dates": "September 2014 - November 2014",
			"location": "Encino, CA",
			"description": "Responsible for prescreening potential employees, explaining hiring packets, and handling confidential documents in accordance with HIPAA"
		},
		{
			"employer": "Computer Intelligence Associates, Inc",
			"title": "Marketing Coordinator",
			"dates": "November 2012 - November 2013",
			"location": "Glendale, CA",
			"description": "Performed in marketing and light web development projects"
		},
		{
			"employer": "Mark Lulechian Team",
			"title": "Real Estate Agent",
			"dates": "September 2008 - January 2011",
			"location": "Burbank, CA",
			"description": "Performed all activities in transaction cycle from lead generation to post-sale support for first time home buyers."
		}
	]
};
//Add work data to resume
function displayWork() {
	for (job in work.jobs) {
		//Create work-entry class div
		$("#workExperience").append(HTMLworkStart);
		//Replace generic data and store into new variable
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		//Append work data to the last work-entry class div created
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
displayWork();

//Create project object
var projects = {
	"projects": [
		{
			"title": "Responsive Developer Page",
			"dates": "2014",
			"description": "I did such and such in this project",
			"images": [
				"http://i1183.photobucket.com/albums/x474/hazyb71/Screen%20Shot%202015-10-30%20at%209.25.39%20PM_zpsdq3harbo.png",
				"linkToImage2"
			]
		}
	]
};
//Add project data to resume
projects.display = (function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDesc);

		if (projects.projects[0].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}

	}
});
projects.display();

//Create education object
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
















