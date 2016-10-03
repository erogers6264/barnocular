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
            "description": "Provide an excellent first impression to guests, explain the daily specials, and perform regular restaurant tasks such as handling to-go orders and cleaning."
        },
        {
            "employer": "Walden Grove High School/Sahuarita School District",
            "title": "Long-term Substitute German Teacher",
            "location": "Sahuarita, AZ",
            "dates": "2016",
            "description": "Act as a stand-in instructor for four sections of German 1. Responsible for all planning, instruction and assessment. Show students they can also learn outside when the weather permits."
        },
        {
            "employer": "PF Changs China Bistro",
            "title": "Server",
            "location": "Tucson, AZ",
            "dates": "2015-2016",
            "description": "Serve Asian-inspired cuisine in a vibrant bistro atmosphere. Welcome and engage guests. Keep things organized and clean. Provide exceptional service to every guest."
        },
        {
            "employer": "Universität Leipzig",
            "title": "German Instructor",
            "location": "Leipzig, Germany",
            "dates": "Summer 2014 & Summer 2015",
            "description": "Teach a section of intensive intermediate German for a group of undergraduate study abroad participants. Responsible for all instruction and assessment."
        },
        {
            "employer": "University of Arizona",
            "title": "German Instructor",
            "location": "Tucson, AZ",
            "dates": "2013-2015",
            "description": "Teach multiple sections of university level German 101, 102, 201, and 202 over four semesters. Responsible for all planning, instruction and assessment. Help make our language curriculum more awesome. Top ratings on ratemyprofessors."
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
            "employer": "University of Arizona Residence Life",
            "title": "Resident Assistant",
            "location": "Tucson, AZ",
            "dates": "2010-2012",
            "description": "Facilitate the social, academic, and personal adjustment of students to the residence halls and University. Develop a sense of community among residents as members of a floor, residents of a hall, and active participants in the residence life system."
        },
        {
            "employer": "Petite Pea Catering on 6th",
            "title": "Chef & Catering Assistant",
            "location": "Tucson, AZ",
            "dates": "2010-2012",
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
            "employer": "Target Corporation",
            "title": "Jewelry & Intimates Specialist",
            "location": "Tucson, AZ",
            "dates": "Summer 2010",
            "description": "Perform a variety of job duties throughout department store locations. Greet customers, stock shelves, organize displays, take inventory, and assist in sales. Serve as cashier."
        },
        {
            "employer": "Core Eatery",
            "title": "Salad Maker",
            "location": "Tucson, AZ",
            "dates": "2009",
            "description": "Prepare salads and rice bowls for members of the Campus community. Clean. Accept payments and make change."
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
        },
    ],
    display: function display() {
        // body...
    }
};

var project = {
    "projects": [
        {
            "title": "menumoo",
            "dates": "2015-2016"
            "description": 'Provide memorable and rapid service to multiple groups ' +
                    'at tables. Perform normal restaurant duties such as seating, ' +
                    'sweeping, clearing & wiping down tables, and delivering ' +
                    'hot meals to guests.'
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
