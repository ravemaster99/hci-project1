test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()
var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();
        if (minutes < 10) {
                minutes = "0" + minutes;
        }
var suffix = "AM";
        if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
        }
	   if (hours == 0) {
	           hours = 12;
	   }
document.write(hours + ":" + minutes + " " + suffix + " ",month,"/",day,"/",year," ")