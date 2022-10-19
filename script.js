//elementos
const aluno = document.getElementById("txtaluno");
const media = document.getElementById("media");
const matematica = document.getElementById("matematica");
const portugues = document.getElementById("portugues");
const p = document.querySelector("P"); 
const clearBtn = document.getElementById("clear-Btn");
const calcBtn = document.querySelector("#calc-Btn");

//fuções
function calcMedia() {
  const media =  (parseInt(matematica.value) + parseInt(portugues.value ))/2 ;
   
   return media ;
}

function cleanInputs(){
  aluno.value = "";
  matematica.value = "";
  portugues.value = "";
  
}

function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}
     
//eventos

[matematica,portugues].forEach((el) => {
 el.addEventListener(("input"), (e) => {
  const updatedValue = validDigits(e.target.value);

  e.target.value = updatedValue;
  })
})

clearBtn.addEventListener(("click"), (e) =>{
  e.preventDefault();
  cleanInputs();
});

calcBtn.addEventListener(("click"), (e) =>{
  e.preventDefault();
  
  if (!aluno.value ||!portugues || !matematica) return;
  
  const media = calcMedia(matematica,portugues);

  p.innerHTML = ` A media do aluno, ${aluno.value} é ${media}.`;

 if (media <= 5) {
    p.innerHTML =  `A media do aluno/a, ${aluno.value} é ${media}, Aluno "Reprovado".`;
      p.style.color = "red";
   }else{
    p.innerHTML = `A media do aluno/a, ${aluno.value} é ${media}, Aluno "Aprovado".`;

  }
  
});
   


