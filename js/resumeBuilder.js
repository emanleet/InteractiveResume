//Add map to page
$("#mapDiv").append(googleMap);
$("#footerContacts").append(internationalizeButton);


//Initialize biography object
var bio = {
	"name" : "Emmanuoel Haroutunian",
	"role" : "Financial Analyst",
	"contacts" : {
		"mobile": "xxx-xxx-xxxx",
		"email" : "emmanuoel.h@gmail.com",
		"github" : "emanleet",
		"twitter" : "@emanleet",
		"location" : "Los Angeles"
	},
	"welcomeMessage" : "Hello there!",
	"skills" : [
		"Photoshop", "HTML", "CSS", "Javascript", "jQuery", "Microsoft Office"
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
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMessage);

	//Create contact info
	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var location = HTMLlocation.replace("%data%", bio.contacts.location);
	//Add contact info to page
	$("#topContacts").append(mobile);
	$("#topContacts").append(email);
	$("#topContacts").append(github);
	$("#topContacts").append(twitter);
	$("#topContacts").append(location);
	//Add contact info to footer
	$("#footerContacts").append(mobile);
	$("#footerContacts").append(email);
	$("#footerContacts").append(github);
	$("#footerContacts").append(twitter);
	$("#footerContacts").append(location);
	//Add skills to resume
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};
bio.display();

//Initialize work object
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
	for (var job in work.jobs) {
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

//Initialize project object
var projects = {
	"projects": [
		{
			"title": "Responsive Developer Page",
			"dates": "2014",
			"description": "Developed a responsive website with a custom grid system and flexbox properties.",
			"images": [
				"http://i1183.photobucket.com/albums/x474/hazyb71/Screen%20Shot%202015-10-30%20at%209.25.39%20PM_zpsdq3harbo.png",
				"http://i1183.photobucket.com/albums/x474/hazyb71/Placeholder_zpsclmqxk6k.png"
			]
		},
		{
			"title": "Interactive Resume",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua.",
			"images": [
				"http://i1183.photobucket.com/albums/x474/hazyb71/Interactive%20Resume%20Image_zpsmzwz9pvp.jpg",
				"http://i1183.photobucket.com/albums/x474/hazyb71/Placeholder_zpsclmqxk6k.png"
			]
		}
	]
};
//Add project data to resume
projects.display = (function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		//Replace generic data with personal data
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		//Append project data
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDesc);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}

	}
});
projects.display();

//Initialize education object
var education = {
	"schools": [
		{
			"name": "California State University, Northridge",
			"location": "Northridge, CA",
			"degree": "Bachelor of Science",
			"major": "Business Management",
			"dates": "2011 - 2014",
			"url": "http://www.csun.edu"
		},
		{
			"name": "Glendale Community College",
			"location": "Glendale, CA",
			"degree": "Lorem Ipsum",
			"major": "Unde omnis",
			"dates": 2011,
			"url": "http://www.glendale.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.glendale.edu"
		}
	]
};

//Add education data to resume
education.display = (function() {
	for(var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolHeader = schoolName + schoolDegree;
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		//Add education data to page
		$(".education-entry:last").append(schoolHeader);
		$(".education-entry:last").append(schoolLocation);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for (var onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var courseHeader = courseTitle + courseSchool;
		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);

		$(".education-entry:last").append(courseHeader);
		$(".education-entry:last").append(onlineDates);
	}


});
education.display();










