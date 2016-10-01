var bio = {
    "name": "M. Ethan Rogers",
    "role": "Fullstack Web Developer",
    "contactInfo": {
        "email": "erogers6264@gmail.com",
        "phone": "(915) 637-8415"
    },
    "picUrl": "images/me.jpg",
    "skills": ["programming", "teaching", "python", "relational databases",
            "nonrelational databases", "JS", "CSS3", "HTML5", "responsive design",
            "Google App Engine"]
};

var projects = {
    "personal": [
        {
            "title": "menumoo",
            "toolsUsed": ["Flask", "Python", "Postgresql", "SQLAlchemy", "Skeleton"]
        }
    ]
};

var education = {
    "schools": [
        {
            "schoolName": "University of Arizona",
            "city": "Tucson, AZ, US",
            "degree": "Bachelors",
            "major": ["German Studies", "Linguistics"],
            "gradYear": "2012"
        },
        {
            "schoolName": "University of Arizona",
            "city": "Tucson, AZ, US",
            "degree": "Masters",
            "major": ["German Studies"],
            "gradYear": "2015"
        },
        {
            "schoolName": "Udacity",
            "city": "Mountain View, CA, US",
            "degree": "",
            "major": ["Fullstack Web Development"],
            "gradYear": "2016"
        }
    ]
};

var employment = {
    "workplaces": [
        {
            "position": "host",
            "employer": "Native Grill & Wings",
            "yearsWorked": 1,
            "city": "Tucson, AZ, US",
            "startDate": "September 2016",
            "endDate": undefined,
            "supervisorName": "Chad Petri"
        },
        {
            "position": "host",
            "employer": "Native Grill & Wings",
            "yearsWorked": 1,
            "city": "Tucson, AZ, US",
            "startDate": "September 2016",
            "endDate": undefined,
            "supervisorName": "Chad Petri"
        },
        {
            "position": "host",
            "employer": "Native Grill & Wings",
            "yearsWorked": 1,
            "city": "Tucson, AZ, US",
            "startDate": "September 2016",
            "endDate": undefined,
            "supervisorName": "Chad Petri"
        },
        {
            "position": "host",
            "employer": "Native Grill & Wings",
            "yearsWorked": 1,
            "city": "Tucson, AZ, US",
            "startDate": "September 2016",
            "endDate": undefined,
            "supervisorName": "Chad Petri"
        }
    ]
};


if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
    }
}