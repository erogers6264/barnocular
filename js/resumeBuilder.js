// This file contains the JS objects whose data will be used to populate the
// resume website

var bio = {
    "name": "M. Ethan Rogers",
    "role": "Fullstack Web Developer",
    "contacts": {
        "mobile": "1.915.637.8415",
        "email": "erogers6264@gmail.com",
        "github": "erogers6264",
        "twitter": "redothedo",
        "location": "Tucson, AZ, US"
    },
    "welcomeMessage": "I'm a tenacious MA graduate eager to use my spectrum of education & experience to build snappy web apps.",
    "skills": ["Python", "Linux", "Flask", "CSS", "HTML", "Javascript", "Relational Databases"],
    "biopic": "images/me.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        $("#header").append(formattedName);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").append(formattedRole);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace(new RegExp("%data%", "g"), this.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedTwitter = HTMLtwitter.replace(new RegExp("%data%", "g"), this.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        var formattedGithub = HTMLgithub.replace(new RegExp("%data%", "g"), this.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").append(formattedBioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        var formattedSkills = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < this.skills.length; i++) {
            $("#skills").append(HTMLskills.replace('%data%', this.skills[i]));
        }
    }
};

var education = {
    "schools": [
        {
            "name": "University of Arizona",
            "location": "Tucson, AZ, US",
            "degree": "Bachelors",
            "majors": ["German Studies", "Linguistics", "Spanish"],
            "dates": "2008-2012",
            "url": "http://www.arizona.edu"
        },
        {
            "name": "University of Arizona",
            "location": "Tucson, AZ, US",
            "degree": "Masters",
            "majors": ["German Studies"],
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
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Native Grill & Wings",
            "title": "Host & Expo",
            "location": "Tucson, AZ",
            "dates": "in progress",
            "description": "Provide an excellent first impression to guests, explain the daily specials, and perform regular restaurant tasks such as handling to-go orders and cleaning."
        },
        {
            "employer": "Walden Grove High School/Sahuarita School District",
            "title": "Long-term Substitute German Teacher",
            "location": "Sahuarita, AZ",
            "dates": "2016",
            "description": "Acted as a stand-in instructor for four sections of German 1. Responsible for all planning, instruction and assessment. Showed students that they can also learn outside when the weather permits."
        },
        {
            "employer": "PF Changs China Bistro",
            "title": "Server",
            "location": "Tucson, AZ",
            "dates": "2015-2016",
            "description": "Serve Asian-inspired cuisine in a vibrant bistro atmosphere. Welcome and engage guests. Keep things organized and clean. Provide exceptional service to every guest."
        },
        {
            "employer": "SCAD Media",
            "title": "Social Media Manager",
            "location": "Tucson, AZ",
            "dates": "2015",
            "description": "Managed social media posts for several local Tucson businesses. Utilized the Drupal CMS to manage several websites. Occasionally created blog posts for the University of Arizona Office of the CIO."
        },
        {
            "employer": "Universität Leipzig",
            "title": "German Instructor",
            "location": "Leipzig, Germany",
            "dates": "Summer 2014 & Summer 2015",
            "description": "Taught a section of intensive intermediate German for a group of undergraduate study abroad participants. Responsible for all instruction and assessment."
        },
        {
            "employer": "University of Arizona",
            "title": "German Instructor",
            "location": "Tucson, AZ",
            "dates": "2013-2015",
            "description": "Taught multiple sections of university level German 101, 102, 201, and 202 over four semesters. Responsible for all planning, instruction and assessment. Help make our language curriculum more awesome. Received top ratings on ratemyprofessors."
        },
        {
            "employer": "Olive Garden",
            "title": "Server",
            "location": "Tucson, AZ",
            "dates": "2013",
            "description": "Give each guest a genuine, personalized Italian dining experience while also providing fast, efficient service."
        },
        {
            "employer": "Jimmy John's Subs",
            "title": "Delivery Driver",
            "location": "Tucson, AZ",
            "dates": "2013",
            "description": "Make fast, efficient deliveries, interact with customers, accept payments, and make change. When not on delivery: clean, take phone orders, and ring up customers on the register."
        },
        {
            "employer": "Intuit Inc.",
            "title": "Technical Support Representative",
            "location": "Tucson, AZ",
            "dates": "2012-2013",
            "description": "Delight customers by empathizing with customers and understanding their pain points. Play a crucial role in improving Intuit products."
        },
        {
            "employer": "Petite Pea Catering on 6th",
            "title": "Chef & Catering Assistant",
            "location": "Tucson, AZ",
            "dates": "2011",
            "description": "Cook dishes for events. Discuss requirements with clients, create menus, prepare food, coordinate other cook staff, store food properly, and respect food safety standards."
        },
        {
            "employer": "FUEL Modern Eatery",
            "title": "Barista",
            "location": "Tucson, AZ",
            "dates": "2010-2012",
            "description": "Prepare espresso beverages, smoothies, and frozen yogurt for members of Campus Recreation, students, and the general public. Clean. Accept payments and make change."
        },
        {
            "employer": "University of Arizona Residence Life",
            "title": "Resident Assistant",
            "location": "Tucson, AZ",
            "dates": "2010-2012",
            "description": "Facilitate the social, academic, and personal adjustment of students to the residence halls and University. Develop a sense of community among residents as members of a floor, residents of a hall, and active participants in the residence life system."
        },
        {
            "employer": "Target Corporation",
            "title": "Jewelry & Intimates Specialist",
            "location": "Tucson, AZ",
            "dates": "Summer 2010",
            "description": "Perform a variety of job duties throughout department store locations. Greet customers, stock shelves, organize displays, take inventory, and assist in sales. Serve as cashier."
        },
        {
            "employer": "University of Arizona Office of LGBTQ Affairs",
            "title": "Intern at ASUA Pride Alliance",
            "location": "Tucson, AZ",
            "dates": "2010",
            "description": ""
        },
        {
            "employer": "Core Eatery",
            "title": "Salad Maker",
            "location": "Tucson, AZ",
            "dates": "2009",
            "description": "Prepared salads and rice bowls for members of the Campus community. Cleaned. Accept payments and make change."
        },
        {
            "employer": "IHOP Restaurant",
            "title": "Lead Server & Trainer",
            "location": "Mesa, AZ",
            "dates": "2005-2008",
            "description": "Greet guests, take food and drink orders, serve all the dishes, and finalize sales transactions. Handle multiple situations, such as busy breakfast rushes, slower midday periods, and often-rambunctious late-night crowds."
        },
        {
            "employer": "Petsmart",
            "title": "Cashier",
            "location": "Gilbert, AZ",
            "dates": "2006",
            "description": "Greet customers as they walk in, provide solutions and answers to their questions, and make sure they walk out with everything they need."
        }
    ], // End jobs
    display: function () {
        for (var job = 0; job < this.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates)
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location)
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description)
            $(".work-entry:last").append(formattedDescription);
        }
    }
}; // End work

var project = {
    "projects": [
        {
            "title": "menumoo",
            "dates": "2015-2016",
            "description": "Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database.",
            "images": []
        },
        {
            "title": "dot-n-box",
            "dates": "2016",
            "description": "Implemented a scalable hangman game as an API with endpoints that allow anyone to develop a front-end for the game.",
            "images": []
        },
        {
            "title": "all-play",
            "dates": "2015",
            "description": "Built a PostgreSQL relational database scheme to store the results of a game tournament. Also provided a number of queries to efficiently report the results of the tournament and determine the winner.",
            "images": []
        },
        {
            "title": "menumoo-server-config",
            "dates": "2015-2016",
            "description": "Installed and configured all required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server, including Apache Web Server and PostgreSQL database server.",
            "images": []
        }
    ]
};

bio.display();
work.display();