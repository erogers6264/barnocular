var name = "ethan rogers";

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function nameChanger (name) {
	var spl = finalName.toLowerCase().split(" ");
	first = toTitleCase(spl[0]);
	last = spl[1].toUpperCase();
	var finalName = first + ' ' + last;
	return final;
}

console.log(nameChanger(name));