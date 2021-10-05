function exibirConteudo1(){
  let paragrafoUm = document.querySelector(".paragrafo1");

  if(paragrafoUm.classList.contains("respostaAtiva")){
    paragrafoUm.classList.remove("respostaAtiva");
  }else{
    paragrafoUm.classList.add("respostaAtiva");
  };
}

function exibirConteudo2(){
  let paragrafoDois = document.querySelector(".paragrafo2");

  if(paragrafoDois.classList.contains("respostaAtiva")){
    paragrafoDois.classList.remove("respostaAtiva");
  }else{
    paragrafoDois.classList.add("respostaAtiva");
  };
}

function exibirConteudo3(){
  let paragrafoTres = document.querySelector(".paragrafo3");

  if(paragrafoTres.classList.contains("respostaAtiva")){
    paragrafoTres.classList.remove("respostaAtiva");
  }else{
    paragrafoTres.classList.add("respostaAtiva");
  };
}

function exibirConteudo4(){
  let paragrafoQuatro = document.querySelector(".paragrafo4");
  if(paragrafoQuatro.classList.contains("respostaAtiva")){
    paragrafoQuatro.classList.remove("respostaAtiva");
  }else{
    paragrafoQuatro.classList.add("respostaAtiva");
  }
}