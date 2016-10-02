// This file contains the JS objects whose data will be used to populate the
// resume website

var bio = {
    "name": "M. Ethan Rogers",
    "role": "Fullstack Web Developer",
    "contacts": {
        "mobile": "1.915.637.8415",
        "email": "erogers6264@gmail.com",
        "github": "https://www.github.com/erogers6264",
        "twitter": null,
        "location": "Tucson, AZ, US"
    },
    "welcomeMessage": "",
    "skills": [],
    "biopic": "url",
    display: function display() {
        // body...
    }
};

var education = {
    "schools": [
        {
            "name": "University of Arizona",
            "location": "Tucson, AZ, US",
            "degree": "Bachelors",
            "majors": ["German Studies", "Linguistics", "Spanish"]
            "dates": "2008-2012",
            "url": "http://www.arizona.edu"
        },
        {
            "name": "University of Arizona",
            "location": "Tucson, AZ, US",
            "degree": "Masters",
            "majors": ["German Studies"]
            "dates": "2013-2015",
            "url": "http://www.arizona.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Fullstack Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "http://www.udacity.com"
        }
    ],
    display: function display() {
        // body...
    }
};

var work = {
    "jobs": [
        {
            "employer": "Native Grill & Wings",
            "title": "Host & Expo",
            "location": "Tucson, AZ",
            "dates": "in progress",
            "description": "Provide an excellent first impression to guests, " +
                    "explain the daily specials, and perform regular restaurant " +
                    "tasks such as taking to-go orders and wiping down menus."
        }
    ],
    display: function display() {
        // body...
    }
};

var project = {
    "projects": [
        {
            "title": "menumoo",
            "dates": "2015"
            "description": "A RESTful way to manage restaurants and their menus."
            "images": ["URLOLOLOL", "URLOLOLOL", "URLOLOLOL", "URLOLOLOL", "URLOLOLOL"]
        }
    ],
    display: function display() {
        // body...
    }
};

// Begin the operations to append/prepend to the resume
if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
    }
}
