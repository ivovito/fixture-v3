function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  let golesLocal = event.target.children[1].value;
  let golesVisitante = event.target.children[2].value;

  let ganoLocal = false;
  let empate = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal == golesVisitante) empate = true;




  console.log(event.target.children[1].value);
  console.log(event.target.children[2].value);

  let tds = document.querySelectorAll('td');
  console.log(tds);
  for (let td of tds) {

    if (td.textContent.includes(local)) {
                                                                                                //partidos Ganados/Perdidos local
      if (ganoLocal)  td.parentElement.children[2].textContent = +td.parentElement.children[2].textContent + 1;
      else if (empate) ;
      else td.parentElement.children[4].textContent = +td.parentElement.children[4].textContent + 1;

                                                                                                //Puntaje si gana local
        if (ganoLocal) td.parentElement.children[8].textContent= +td.parentElement.children[8].textContent + 3;

                                                                                                //Diferencia de gol local
        if (ganoLocal) td.parentElement.children[7].textContent = +td.parentElement.children[7].textContent + golesLocal - golesVisitante;
        else if (empate) ;
        else td.parentElement.children[7].textContent = +td.parentElement.children[7].textContent + golesLocal - golesVisitante;

                                                                                                //goloes en contra del local
        if(ganoLocal) td.parentElement.children[6].textContent = +td.parentElement.children[6].textContent + +golesVisitante;
        else if(empate) td.parentElement.children[6].textContent = +td.parentElement.children[6].textContent + +golesVisitante;
        else td.parentElement.children[6].textContent = +td.parentElement.children[6].textContent + +golesVisitante;
                                                                                                //Goles a favor local
        if(ganoLocal) td.parentElement.children[5].textContent = +td.parentElement.children[5].textContent + +td.parentElement.children[7].textContent + +golesVisitante;
        else if(empate) td.parentElement.children[5].textContent = +td.parentElement.children[5].textContent + +td.parentElement.children[7].textContent + +golesVisitante;
        else td.parentElement.children[5].textContent = +td.parentElement.children[5].textContent + +td.parentElement.children[7].textContent + +golesVisitante;
    }

if (td.textContent.includes(visitante)) {
                                                                                                //Partidos Ganados/Perdidos visitante
  if (ganoLocal) td.parentElement.children[4].textContent = +td.parentElement.children[4].textContent + 1;
  else if (empate)  ;
  else td.parentElement.children[2].textContent = +td.parentElement.children[2].textContent + 1;

                                                                                                //Puntaje si gana visitante
  if    (ganoLocal) ;
  else if (empate)  ;
  else td.parentElement.children[8].textContent= +td.parentElement.children[8].textContent +3;

                                                                                                //Goles a favor visitante
  if(ganoLocal) td.parentElement.children[5].textContent = +td.parentElement.children[5].textContent + +td.parentElement.children[7].textContent + +golesVisitante;
  else if(empate) td.parentElement.children[5].textContent = +td.parentElement.children[5].textContent + +td.parentElement.children[7].textContent + +golesVisitante;
  else td.parentElement.children[5].textContent = +td.parentElement.children[5].textContent + +td.parentElement.children[7].textContent + +golesVisitante;
                                                                                                //Diferencia de gol visitante
  if (ganoLocal) td.parentElement.children[7].textContent = +td.parentElement.children[7].textContent + golesVisitante - golesLocal;
  else if (empate) ;
  else td.parentElement.children[7].textContent = +td.parentElement.children[7].textContent + golesLocal - golesVisitante;

                                                                                                //goloes en contra del visitante
  if(ganoLocal) td.parentElement.children[6].textContent = +td.parentElement.children[6].textContent + +golesLocal;
  else if(empate) td.parentElement.children[6].textContent = +td.parentElement.children[6].textContent + +golesLocal;
  else td.parentElement.children[6].textContent = +td.parentElement.children[6].textContent + +golesLocal;
}

    if (td.textContent.includes(local)|| td.textContent.includes (visitante)){
    console.log(td.parentElement);
                                                                                                //Partidos Empatados local/visitante
      if (empate)  td.parentElement.children[3].textContent = +td.parentElement.children[3].textContent + 1 ;
                                                                                                //Puntaje para ambos equipos si empatan
      if (empate) td.parentElement.children[8].textContent = +td.parentElement.children[8].textContent + 1;


    }
  }
}
