function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60inFvoGg35":
        Script1();
        break;
  }
}

function Script1()
{
   //script audio dalam slide//

var audio = document.getElementById('bgSong');
audio.src="musikQ.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

