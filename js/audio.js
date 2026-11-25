    const audios = {
    1: document.getElementById('audio1'),
    2: document.getElementById('audio2'),
    3: document.getElementById('audio3')
  };

    const audio=document.getElementById('testAudio');
    const img1=document.getElementById('img1');
    const img2=document.getElementById('img2');
     const img3=document.getElementById('img3');
    let currnum = 1;  //현재 선택된 사운드 순서

    function changeSound(num){
      if(num==1){  //첫번째를 클릭하면
         audio.src="./music/music1.mp3";  //사운드의 경로 변경
         audio.play();  //오디오 재생
         img2.classList.remove("current");
         img1.classList.add("current");
        img3.classList.remove("current");
      }else if(num==2){ //두번째를 클릭하면
         audio.src="./music/music2.mp3";
         audio.play();
         img1.classList.remove("current");
         img2.classList.add("current");
         img3.classList.remove("current");
      }else if(num==3){ //두번째를 클릭하면
         audio.src="./music/music2.mp3";
         audio.play();
         img1.classList.remove("current");
         img2.classList.remove("current");
         img3.classList.add("current");
      }
      currnum = num; //트랙 순서를 변경
    }
    
    function sound_play(){
        audio.play(); //오디오를 재생한다.

        if(currnum==1){     //1번 사운드가 지정되어 있으면
          img2.classList.remove("current");
          img1.classList.add("current");
          img3.classList.remove("current");
        }else if(currnum==2){
          img1.classList.remove("current");
          img2.classList.add("current");
          img3.classList.remove("current");
        }else if(currnum==3){
          img1.classList.remove("current");
          img2.classList.remove("current");
          img3.classList.add("current");
        } 
    }
   
  function sound_play(num) {

    // 다른 음악 정지
    for (let i = 1; i <= 3; i++) {
        const audio = document.getElementById("audio" + i);

        if (i !== num) {
            audio.pause();
            audio.currentTime = 0;
            document.getElementById("img" + i).classList.remove("current");
        }
    }

    // 선택한 음악 재생
    const selectedAudio = document.getElementById("audio" + num);

    selectedAudio.play();

    document.getElementById("img" + num).classList.add("current");
}


function sound_stop(num) {

    const audio = document.getElementById("audio" + num);

    audio.pause();

    // currentTime = 0 삭제!
    document.getElementById("img" + num).classList.remove("current");
}

    
