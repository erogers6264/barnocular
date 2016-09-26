var name = "M. Ethan Rogers";
var role = "Fullstack Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skills = ["programming", "teaching", "python", "SQL & noSQL", "JS", "CSS3", "HTML5", "responsive design", "Google App Engine"];

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(skills);
