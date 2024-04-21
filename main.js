alert("***ATENÇÃO** - Para uma melhor experiência ligue o aúdio!");

document.getElementById('btn').addEventListener('click', function() {
    this.classList.add('active');
    setTimeout(() => {
      this.classList.remove('active');
    }, 1000);
  });

  var randomNum = 0;
  var attemps = 0;

  function newNumber() {
    attemps = 0;
    randomNum = Math.round(Math.random() * 100);
  }

  function verify() {
    var inputNum = document.getElementById("typedNum").value;
    var pigText = document.getElementById("pigText");
    
    if(inputNum > randomNum){
        pigText.textContent = '"O número gerado é MENOR! OINC OINC..."';
        attemps++;
    } else if(inputNum < randomNum){
        pigText.textContent = '"O número gerado é MAIOR! OINC OINC..."';
        attemps++;
    } else {
        pigText.textContent = '"OINCCC VOCÊ VENCEU!! Com " + attemps + " tentativas."';
        newNumber();
    }

    pigAnimation();

    pigSound();


  }

  function pigAnimation() {
    var pig = document.getElementById("pigContainer");
    pig.classList.add('active');
    setTimeout(() => {
      pig.classList.remove('active');
    }, 3000);
  }
    
  function btnSound(){
    var btnAudio = document.getElementById("audioBtn");
    btnAudio.play();
  
    setTimeout(function(){
      btnAudio.pause();
    }, 1500);
  }
  
  function pigSound(){
    btnSound();
  
    var pigAudio1 = document.getElementById("pigAudio1");
    var pigAudio2 = document.getElementById("pigAudio2");
    var i = Math.round(Math.random());
    console.log(i);
    var pigAudios = [pigAudio1, pigAudio2];
  
    pigAudios[i].play();
    setTimeout(function(){
      pigAudios[i].pause();
    }, 3000);
  }

  var contador = 0;
  var bgs = ["", "bg2", "bg3"];
  var bgsBtn = ["", "bg2", "bg3"];
  

function switchBg() {
  contador++;
  var i = contador % bgs.length; // Garante que o índice esteja dentro dos limites do array
  var bodyBg = document.querySelector('#body');
  bodyBg.className = bgs[i];

  var btnBg = document.querySelector("#btnBg");
  btnBg.classList = bgsBtn[i];

  anvilSound = document.getElementById("anvilSound");

  anvilSound.volume = 0.1 ;
  anvilSound.play();
}

  newNumber();