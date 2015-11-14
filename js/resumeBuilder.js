  var awesomeThoughts = "I am Lucien and I am AWESOME!";
  var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
  $("#main").append(funThoughts)
  console.log(funThoughts);
  
  var formattedName = HTMLheaderName.replace("%data%","Lucien De Brot");
  var formattedRole = HTMLheaderRole.replace("%data%","Data analyst");
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  
