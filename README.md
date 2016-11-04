# Barnocular
## A resume for those who want the whole story.
[This website](https://erogers6264.github.io/barnocular) attempts to document everything I've ever done. Some would call it my 'master' resume, I call it a barnocular into how I became who I am.

1. Don't care that I worked at Petsmart 10 years ago? You're looking at the wrong resume. In the future, I will fork this project and create various resumes targeting specific positions I am interested in. I will prim and trim, like a good prospective employee, however, I hope that anyone seriously considering hiring me will take a hard look at this document as well as the roles & positions it documents.

2. I built this website with the help of Udacity's Intro to JavaScript course. The resume data is stored in JavaScript objects, which format and display themselves when the web page is loaded. Learning basic JavaScript was pretty painless after having worked with Python so much. It was semicolons, 'var', and brackets that I had to get used to.

3. The JavaScript objects populate provided HTML snippets using JavaScript's built-in string replace method. These snippets can be found in helper.js.

### Included files
* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality.
* **js/resumeBuilder.js**: Where the magic happens.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: The GitHub readme file.
* and some images in the images directory.

## Provided by Udacity...
### js/helper.js
Within helper.js, there is a large collection of strings containing snippets of HTML. Within many snippets, there is placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` is the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which is replaced with the location of one of my schools.

### My process:
The resume has four distinct sections: work, education, projects and a header with biographical information.

1. I built four JavaScript objects, each one representing a different resume section. The objects that I created (including property names and the data types of their values) followed the schema below exactly. All properties must be included and must contain a value of the type specified unless the property is marked 'optional'. Property names are case-sensitive. I've made sure my JavaScript objects are formatted correctly using [jshint.com](http://jshint.com/).

  * `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (Can be 'in progress')
                 description: string
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. I've iterated through each JavaScript object and appended its information to index.html in the correct section.
  * I used jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
  * I also used the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from my resume JSON objects.
  * Here’s an example of some code that adds the location of one my companies to the page:
    * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
    * `$(".work-entry:last").append(formattedLocation);`
3. The resume includes an interactive map. I did the following to add it.
  * In resumeBuilder.js, I appended the googleMap string to `<div id=”mapDiv”>`.
  * In index.html, I uncommented the Google script element: `<script type="text/JavaScript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
  * In helper.js, at the bottom of the file, I uncommented code to initialize map and set fitBounds.
4. All of my code for adding elements to the resume is contained within functions.
5. As described in the JavaScript object schema, each 'display' function is encapsulated within the JavaScript object it displays in the resume. For instance, my 'display' function for appending 'work' experience data to the resume is encapsulated within the 'work' JavaScript object.
6. It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API.
