// countdown that allows input of days and hours, and outputs down to seconds

countdown(14, 0); // days, hours
  
function countdown(days, hours) {
    let minutes, seconds;
    
    let endDate = new Date();
    endDate.setHours(endDate.getHours() + hours);
    endDate.setDate(endDate.getDate() + days);
      endDate = endDate.getTime();
    
    if (isNaN(endDate)) {
      return;
    }
    
    setInterval(calculate, 1000);
    
    function calculate() {
      let startDate = new Date();
      startDate = startDate.getTime();
      
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        
        seconds = parseInt(timeRemaining);
        
        document.getElementsByClassName("days")[0].querySelector('p').innerHTML = parseInt(days, 10);
        document.getElementsByClassName("hours")[0].querySelector('p').innerHTML = ("0" + hours).slice(-2);
        document.getElementsByClassName("minutes")[0].querySelector('p').innerHTML = ("0" + minutes).slice(-2);
        document.getElementsByClassName("seconds")[0].querySelector('p').innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  }
  

