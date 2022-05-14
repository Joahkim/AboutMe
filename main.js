//지름길과 back to the top버튼
// const goHere = function(subject,location){subject.addEventListener("click",function scrollToTop(){
//   galleryTop.scrollTo({
//     top: location,
//     behavior: "smooth"
//   })
// })
// };
// const galleryTop = document.querySelector(".gallery")
// const toTheIntro = document.querySelector("#toprofile");
// const toTheFav = document.querySelector("#tofavthings");
// const toTheMbti = document.querySelector("#tombti");
// const toTheFunFacts = document.querySelector("#tofunfacts");
// const toTheTop = document.querySelector("#backtotopbtn");

// goHere(toTheIntro, 500);
// goHere(toTheFav, 1000);
// goHere(toTheMbti, 1500);
// goHere(toTheFunFacts, 2000);
// goHere(toTheTop, 0);


//상웅님의 코드
const galleryTop = document.querySelector(".gallery")
const toTheIntro = document.querySelector("#toprofile");
const toTheFav = document.querySelector("#tofavthings");
const toTheMbti = document.querySelector("#tombti");
const toTheFunFacts = document.querySelector("#tofunfacts");
const toTheTop = document.querySelector("#backtotopbtn");


const height = galleryTop.clientHeight;
const navList = [toTheIntro, toTheFav, toTheMbti, toTheFunFacts, toTheTop];

function goHere(subject, location) {
  subject.addEventListener("click", function scrollToTop(){
    galleryTop.scrollTo({
      top :location,
      behavior: 'smooth'
    });
  });
}

function moveToPage(){
  for(let i = 0; i < navList.length; i++){
    goHere(navList[i], height * (i + 1));
    if (i === 4) {
      goHere(navList[i], 0)
    }
  }
}

moveToPage();



/*이렇게 DOM에 바로 적용해도 가능하다. 하지만 코드가 너무 길어진다.
 const profile = document.querySelector("#toprofile");profile.addEventListener("click",function scrollToTop(){
   galleryTop.scrollTo({
     top: 500,
     behavior: "smooth"
   })
 })*/


//querySelectorAll로 alert 창 표시하기
const wrong = document.querySelectorAll('.wrong')
wrong.forEach(el => el.addEventListener("click", function(){
  alert("hmmm, Try It Again!\n흠...아닙니다!")
}))
  

const right = document.querySelectorAll('.right')
right.forEach(el => el.addEventListener("click", function(){
  alert("Correct!!\n정답입니다!")}
  ))

/*나쁜코드(querySelector만 했을 때) 
 function wrong(){
   alert("hmmm, Try It Again!\n흠...아닙니다!")
 };
 function right(){
   alert("Correct!!\n정답입니다!")
 };
위와 같이 작성하면 html에 onclick="javascript:wrong()"를 작성해야 한다.*/





//typing 효과 내기
const content = "Hello World, \n This is Eun Kyeong \n ↓Scroll Down↓";
const comment = document.querySelector(".typing");
let i = 0;

function typing(){
    let txt = content[i++];
    comment.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i >= content.length) {
      clearInterval(interval)  
    }
}
let interval = setInterval(typing, 100)



//ligth or dark mode
const checkbox = document.getElementById("checkbox");
const boxes = document.querySelectorAll(".box, .list, .icon, .label, .fa-sun")
checkbox.addEventListener('change',()=>
  //변화요소 넣기
	boxes.forEach((el)=>el.classList.toggle('light'))
);




