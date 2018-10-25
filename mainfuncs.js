
function lastModified(){

  lastmod = document.lastModified     // get string of last modified date
  lastmoddate = Date.parse(lastmod)   // convert modified string to date
  if(lastmoddate == 0){               // unknown date (or January 1, 1970 GMT)
     document.writeln("(Updated: Unknown)")
     } else {
	 d = new Date(lastmod);
     document.writeln("(Updated: " + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + ")")
  }

}

function abouticon() {

	var rand1 = Math.floor((Math.random()*7)+1);
	var str = "<img src=\"images/icon_" + rand1 + ".png\" />";
	
	document.write(str);
}