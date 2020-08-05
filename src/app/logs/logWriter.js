module.exports = (message) => {
    var newDate = new Date();
    var unixtime = Date.now();
    newDate.setTime(unixtime*1000);
    dateString = newDate.toUTCString();
    message = dateString + " === " + message + "\n";
    fs.appendFile('./logfile.txt', message,'utf-8' ,function(err) {
      if (err) {
        return console.error(err);
       }
    });
  }