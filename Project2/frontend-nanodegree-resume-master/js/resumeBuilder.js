var formattedName = HTMLheaderName.replace("%data%", "Tito Esteves");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
  "jobs": [
    {
      "employer": "Kaseya",
      "title": "Senior Support Engineer",
      "location": "Miami",
      "dates": "2009 - Present",
      "description": "Misc"
  },
  {
    "employer": "IBM",
    "title": "Support Representative",
    "location": "Miami",
    "dates": "2007-2010",
    "description": "Misc"
  }
  ]
};

var projects = {
  "projects": [
  {
    "title": "Udacity",
    "dates": "2014",
    "description": "web dev",
    "images": "../../images/fry.jpg"
  },
  {
    "title": "Udacity",
    "dates": "2014",
    "description": "web dev",
    "images": []
  }
  ]
};

var bio = {
  "name": "Tito Esteves",
  "role": "Web Developer",
  "welcome message": "hi",
  "contacts": {
    "mobile": "954-123-4567",
    "email": "titoesteves@live.com",
    "github": "titoesteves@users.noreply.github.com",
    "location": "Miramar, FL"
  },
  "skills": ["html", "css", "javascript"],
  "bioPic": "../images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "FIU",
      "location": "Miami",
      "degree": "BS",
      "majors": "Information Technology",
      "dates": "2008 - 2010",
      "url": "fiu.edu"
    },
    {
      "name": "BCC",
      "location": "FLL",
      "degree": "AS",
      "majors": "Network",
      "dates": "2006-2008",
      "url": "bcc.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End",
      "school": "Udacity",
      "dates": "2014",
      "url": "udacity.com"
    }
  ]
};


  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var combined = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
  $("#topContacts").append(combined);


if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}

function displayWork(){
  for (job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedDate =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDate + formattedLoc + formattedDesc;
  $(".work-entry:last").append(formattedEmployerTitle);
}
}

displayWork();
// $(document).click(function(loc){
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x, y);
// });

// function locationizer(work_org){
//   var workArray = [];
//   for(item in work_org.jobs){
//     workArray.push(work_org.jobs[item].location);
//   }
//   return workArray; //return an array of locations in work
// }
// console.log(locationizer(work));

// function inName(name){
//   var name = name.trim().split(" ");
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   return name[0] + " " + name[1];
//   // var arr = name.split(" ");
//   // var first = arr[0];
//   // var sec = arr[1];
//   // var result = first[0].toUpperCase() + first.slice(1) + " " + sec.toUpperCase();
//   // return result; 
// }
// $("#main").append(internationalizeButton);

// inName('sebastian thrun');

projects.display = function(){
  
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedProjects = "";
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDesc);
    
    //var formattedProjects = formattedTitle + formattedDates + formattedDesc + formattedImages;
    if(projects.projects[project].length > 0){
      for (image in projects.projects[project].images){
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry").append(formattedImages);
      }
    }
  }

};

  projects.display();
  $("#mapDiv").append(googleMap);


