var formattedName = HTMLheaderName.replace("%data%", "Ethan Rogers")
var formattedRole = HTMLheaderRole.replace("%data%", "Fullstack Web Developer")

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)
