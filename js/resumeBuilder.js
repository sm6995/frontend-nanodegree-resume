
// * `bio` contains:
        
//             name : string
//             role : string
//             contacts : an object with
//                   mobile: string
//                   email: string 
//                   github: string
//                   twitter: string 
//                   location: string
//             welcomeMessage: string 
//             skills: array of strings
//             biopic: url
//             display: function taking no parameters

var skills = ['C++', 'iOS', 'Ruby and Rails', 'Appium', 'JavaScript', 'CCL'];
var contacts = {
		"mobile" : "816-674-1376",
		"email" : "smarcel@cerner.com",
		"github" : "https://github.com/sm6995/frontend-nanodegree-resume.git",
		"twitter" : "@MarcelSuzanne",
		"location" : "Overland Park, Kansas"
		 };
var msg = "Interested in a programming position with an opportunity for learning new languages and challenges and advancing my career. Would like a minimum of $250,000 base salary plus benefits and bonus.";

var display = function() {

};

var bio = {
	"name" : "Suzanne Marcel",
	"role" : "Software Developer",
	"contacts" : contacts,
	"welcomeMessage" : msg,
	"skills" : skills,
	"biopic" : "./images/fry.jpg",
	"display" : display()
};

console.log(bio);

$("#main").append(bio.name);

var mobileNo = HTMLmobile.replace("%data%", bio.contacts.mobile);
// HTMLemail
// HTMLlocation
// HTMLbioPic
// HTMLwelcomeMsg
// HTMLskills

var bioPic = HTMLbioPic.replace("%data", bio.biopic);
console.log(bioPic);


$("#header").prepend(bioPic);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var 

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(mobileNo);





















