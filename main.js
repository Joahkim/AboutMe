//지름길 버튼
const galleryTop = document.querySelector(".gallery")
const toTheIntro = document.querySelector("#toprofile");
const toTheFav = document.querySelector("#tofavthings");
const toTheExperience = document.querySelector("#toexperience");
const toTheFunFacts = document.querySelector("#tofunfacts");
const toTheContact = document.querySelector("#contactinfo")
const toTheTop = document.querySelector("#backtotopbtn");
const pushHome = document.querySelector("#home")


const height = galleryTop.clientHeight;
const navList = [pushHome, toTheIntro, toTheFav, toTheExperience, toTheFunFacts, toTheContact, toTheTop];

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
    goHere(navList[i], height * i);
    if (i === 0 || i === 6) {
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





//querySelectorAll로 퀴즈 alert 창 표시하기
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
const content = "Hello World, \n Welcome To My Web \n Please Scroll Down To Surf \n🏄";
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
const boxes = document.querySelectorAll(".box, .list, .icon, .label, .fa-sun, .part, .line, .options, .fa-canadian-maple-leaf, .fa-hand-peace, .article, .profile_textbox")
checkbox.addEventListener('change',()=>
  //변화요소 넣기
	boxes.forEach((el)=>el.classList.toggle('light'))
);




//슬라이드
let currentImg = 0;
let positionValue = 0;
const IMAGE_WIDTH =  594;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const innerEls = document.querySelectorAll(".inner_el");


function next(){
  if(currentImg < 7){
    prevBtn.removeAttribute('disabled')
    positionValue -= IMAGE_WIDTH;
    innerEls.forEach((el)=>el.style.transform = `translateX(${positionValue}px)`)
    currentImg += 1;
  }
  if(currentImg === 7){
    nextBtn.setAttribute('disabled', 'true');
  }
}

function prev(){
  if(currentImg > 0){
    nextBtn.removeAttribute('disabled')
    positionValue += IMAGE_WIDTH;
    innerEls.forEach((el)=>el.style.transform = `translateX(${positionValue}px)`)
    currentImg -= 1;
  }
  if(currentImg === 0){
    prevBtn.setAttribute('disabled', 'true');
  }
}

function init(){
  prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
}

init();