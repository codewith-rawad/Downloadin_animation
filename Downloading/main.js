var percent = document.getElementById('text');
var title = document.getElementById('data');
var restartButton = document.getElementById('restart');

function startDownload() {
  var j = 0;
  var intervalID = setInterval(() => {
    if (j <= 360) {
      document.documentElement.style.setProperty("--value", `${j}deg`);

      let k = Math.floor(j / 3.6);
      percent.innerHTML = `${k}%`;

      j++;
    } else {
      clearInterval(intervalID);
      title.innerHTML = "Download Completed!";
    }
  }, 20);
}


restartButton.addEventListener('click', () => {
if(title.innerHTML==='Download Completed!'){
    document.documentElement.style.setProperty('--value', '0deg');
    percent.innerHTML = "0%";
    title.innerHTML = "Downloading...";
    startDownload();}
});

startDownload();
