// Resume -- JavaScript Basics Course -- Udacity

// Biography section
var contacts = {
		"mobile" : "816-674-1376",
		"email" : "smarcel@cerner.com",
		"github" : "https://github.com/sm6995/frontend-nanodegree-resume.git",
		"twitter" : "@MarcelSuzanne",
		"location" : "Overland Park, Kansas"
		 };

var display = function() {

};

var bio = {
	"name" : "Suzanne Marcel",
	"role" : "Software Developer",
	"contacts" : contacts,
	// "welcomeMessage" : msg,
	// "skills" : skills,
	"biopic" : "images/SueMarcel.jpg"
};

bio.skills = ['C++', 'iOS', 'Ruby and Rails', 'Appium', 'JavaScript', 'CCL'];
bio.welcomeMessage = "Interested in a programming position with an opportunity for learning new languages and advancing my career.";

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobileNo = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic).append(formattedMsg);
$("#topContacts").append(formattedMobileNo + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	$("#header").append(HTMLskills.replace("%data%", bio.skills.join(",\t\t")));
}

// Work Experience

var appendWork = function(employer, title, dates, location, description)
{
	$(".work-entry:last").append(employer + title);
	$(".work-entry:last").append(dates);
	$(".work-entry:last").append(location);
	$(".work-entry:last").append(description);
}

var work = {
	"jobs" : [
		{
			"employer" : "Cerner Corporation",
			"title" : "Software Engineer",
			"location" : "Kansas City, Missouri",
			"dates" : "2001 - present",
			"description" : "Frontend software developer for PowerChart Touch Chart, and Win32 Orders and PowerPlans. Solution Architect in consulting for National Hospital Quality Measures."
		},
		{
			"employer" : "Zenith",
			"title" : "Director, Environmental Health & Safety",
			"location" : "Chicago, Illinois",
			"dates" : "1996 - 2000",
			"description" : "Managed all EPA and OSHA initiatives for all of the manufacturing plants in the US and Mexico."
		},
		{
			"employer" : "Emerson",
			"title" : "Manager, Environmental Affairs",
			"location" : "St. Louis, Missouri",
			"dates" : "1990 - 1996",
			"description" : "Managed environmental affairs for manufacturing facilities in the US and all of Mexico."
		}
	]
};

// Using dot notation to add property data to our work object.
// var myObj = {};
// myObj.property = someValue;

// work.jobs[0].employer = "Cerner Corporation";
// work.jobs[0].title = "Software Engineer";
// work.jobs[0].location = "Kansas City, Missouri";
// work.jobs[0].dates = "2001 - present";
// work.jobs[0].description = "Frontend software developer for PowerChart Touch Chart, and Win32 Orders and PowerPlans. Solution Architect in consulting for National Hospital Quality Measures.";

// work.jobs[2].employer = "Emerson";
// work.jobs[2].title = "Manager, Environmental Affairs";
// work.jobs[2].location = "St. Louis, Missouri";
// work.jobs[2].dates = "1990 - 1996";
// work.jobs[2].description = "Managed environmental affairs for manufacturing facilities in the US and all of Mexico.";

// for (var index = 0; index < work.jobs.length; index ++) {
// 	formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
// 	formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
// 	formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
// 	formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
// 	formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);

// 	console.log(formattedWorkTitle);

// 	appendWork(formattedWorkEmployer, formattedWorkTitle, formattedWorkLocation, formattedWorkDates, formattedWorkDescription)
// }

function displayWork() {
	console.time('displayWork');
	var formattedWorkEmployer;
	var formattedWorkTitle;
	var formattedWorkDates;
	var formattedWorkLocation;
	var formattedWorkDescription;

	var formatWorkSectionItems = function(job) {
		formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
		formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
		formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
	}

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		formatWorkSectionItems(work.jobs[job]);
		appendWork(formattedWorkEmployer, formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
	}

	console.timeEnd('displayWork');
}

displayWork();

// Projects

var projects = [
	{
		"title" : "Combined Order and PowerPlan Search",
		"dates" : "1996",
		"description" : "Completed technical design and coding of a search window that combined searches for Orders and PowerPlans.",
		"images" : [
			"./images/SearchWindow.png", 
			"./images/PowerPlanSearch.png"
		]
	},
	{
		"title" : "National Hospital Quality Measures",
		"dates" : "1997 - 1998",
		"description" : "Instrumental in the design and development of Cerner's NHQM solution. Worked with clients on education and implementation of the same.",
		"images" : [
			"./images/CoreMeasures.png"
		]
	}
]

var appendProject = function(title, dates, description)
{	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(title);
	$(".project-entry:last").append(dates);
	$(".project-entry:last").append(description);
}

var appendProjectImage = function(image)
{
	$("#projects").append(image);
}

projects.display = function() {
	console.time('displayProjects');
	for (var index = 0, prjCount = projects.length; index < prjCount; index++) {
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[index].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[index].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[index].description);
		
		appendProject(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

		var imgCount = projects[index].images.length;
		for (var imgIndex = 0; imgIndex < imgCount; imgIndex++)
		{	
			appendProjectImage(HTMLprojectImage.replace("%data%", projects[index].images[imgIndex]));
		}
	}

	console.timeEnd('displayProjects');
}

projects.display();

// Education

var education = {
	"schools" : [
		{
			"name" : "Missouri University of Science & Technology",
			"location" : "Rolla, Missouri",
			"degree" : "Bachelors of Science",
			"majors" : "Geological Engineering",
			"dates" : 2000,
			"url" : "https://www.mst.edu/"
		},
		{
			"name" : "US Army, Fort Benning",
			"location" : "Columbus, Georgia",
			"degree" : "Paratrooper",
			"majors" : "Airborne",
			"dates" : 1995,
			"url" : "http://www.benning.army.mil/infantry/rtb/1-507th/airborne/"
		}
	],
    "onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/"
		},
		{
			"title" : "Intro to HTML & CSS",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/"
		},
		{
			"title" : "Rails for Zombies Redux",
			"school" : "Code School",
			"date" : 2015,
			"url" : "https://www.codeschool.com/paths/ruby"
		}
	]
}


// Using bracket notation to add property data to our education/schools object.
// var myObj = {};
// myObj["property"] = someValue;

// education.schools[0]["location"] = "Rolla, Missouri";
// education.schools[0]["degree"] = "Bachelors of Science";
// education.schools[0]["majors"] = "Geological Engineering";
// education.schools[0]["dates"] = 2000;
// education.schools[0]["url"] = "https://www.mst.edu/";

// education.schools[1]["location"] = "Columbus, Georgia";
// education.schools[1]["degree"] = "Paratrooper";
// education.schools[1]["majors"] = "Airborne";
// education.schools[1]["dates"] = 1995;
// education.schools[1]["url"] = "http://www.benning.army.mil/infantry/rtb/1-507th/airborne/";


var appendEducation = function(name, degree, date, major, url)
{
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(name);
	$(".education-entry:last").append(degree);
	$(".education-entry:last").append(date);
	$(".education-entry:last").append(major);
	$(".education-entry:last").append(url);
}

var formattedSchoolName;
var formattedSchoolDegree;
var formattedSchoolMajor;
var formattedSchoolLocation;
var formattedSchoolDates;
var formattedSchoolURL;


for (var index = 0; index < education.schools.length; index ++) {
	formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
	formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
	formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
	formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
	formattedSchoolURL = HTMLonlineURL.replace("%data%", education.schools[index].url);
	// console.log(formattedSchoolURL);

	appendEducation(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolMajor, formattedSchoolURL);
}

$(".education-entry:last").append(HTMLonlineClasses);

var appendEducationOnlineCourses = function(title, school, date, url)
{
	$(".education-entry:last").append(title);
	$(".education-entry:last").append(school);
	$(".education-entry:last").append(date);
	$(".education-entry:last").append(url);
}

var formattedOnlineClassTitle;
var formattedOnlineClassSchool;
var formattedOnlineClassDate;
var formattedOnlineClassURL;

for (var index = 0; index < education.onlineCourses.length; index ++) {
	formattedOnlineClassTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
	formattedOnlineClassSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
	formattedOnlineClassDate = HTMLonlineDates.replace("%data%", education.onlineCourses[index].date);
	formattedOnlineClassURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
	// console.log(formattedOnlineClassURL);

	appendEducationOnlineCourses(formattedOnlineClassTitle, formattedOnlineClassSchool, formattedOnlineClassDate, formattedOnlineClassURL);
}

function locationizer(work_obj) {
	// iterates through work locations and appends each location to
    // the locations array
    var locations = [];

    for (var job in work_obj.jobs) {
      locations.push(work_obj.jobs[job].location);
    }

    return locations;
}

console.log(locationizer(work));

$("#main").append(internationalizeButton);

function inName(fullName) {
	var names = fullName.trim().split(' ');
	
	var firstName = names[0].toLowerCase();
	firstName = firstName[0].toUpperCase() + firstName.slice(1);
	
	var lastName = names[1].toUpperCase();

	var finalName = firstName + ' ' + lastName;
	
	return (finalName);
}

// function inName(name) {
// 	name = name.trim().split(' ');
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return name[0] + " " + name[1];
// }

// $("#main").append(internationalizeButton);
// console.log(inName("sebastian thrun"));


$("#mapDiv").append(googleMap);






















