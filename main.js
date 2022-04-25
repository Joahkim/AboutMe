// 지름길과 back to the top버튼
const goHere = function(subject,location){subject.addEventListener("click",function scrollToTop(){
  galleryTop.scrollTo({
    top: location,
    behavior: "smooth"
  })
})
};
const galleryTop = document.querySelector(".gallery")
const toTheIntro = document.querySelector("#toprofile");
const toTheFav = document.querySelector("#tofavthings");
const toTheMbti = document.querySelector("#tombti");
const toTheFunFacts = document.querySelector("#tofunfacts");
const toTheTop = document.querySelector("#backtotopbtn");

goHere(toTheIntro, 500);
goHere(toTheFav, 1000);
goHere(toTheMbti, 1500);
goHere(toTheFunFacts, 2000);
goHere(toTheTop, 0);


// 퀴즈의 결과를 alert창으로 알려줌
function wrong(){
  alert("hmmm, Try It Again!\n흠...아닙니다!")
};
function right(){
  alert("Correct!!\n정답입니다!")
};
