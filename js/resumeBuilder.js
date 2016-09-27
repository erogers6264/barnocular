var name = "M. Ethan Rogers";
var role = "Fullstack Web Developer";
var contactInfo = {
	"email": "erogers6264@gmail.com",
	"phone": "(915) 637-8415"
};
var picUrl = "images/me.jpg";

var bio = {
	"name": name,
	"role": role,
	"contactInfo": contactInfo,
	"picUrl": picUrl
};

var skills = ["programming", "teaching", "python", "SQL & noSQL", "JS", "CSS3", "HTML5", "responsive design", "Google App Engine"];

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(skills);
$("#main").append(bio.picUrl);
