var pacientes = document.querySelectorAll(".paciente");

//selecionei o elemento que eu quero
var addBotao = document.querySelector("#adicionar-paciente");

//add um evento escutador no elemento
addBotao.addEventListener("click", function(event) {
  event.preventDefault();

  //selecionei o form
  var form = document.querySelector("#form-adiciona");

  //pega os valores digitados
  var nome = form.name.value;
  var dono = form.owner.value;
  var raca = form.breed.value;
  var data = form.date.value;
  var horario = form.hour.value;

  //crio os elementos <tr> e <td>
  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var donoTd = document.createElement("td");
  var racaTd = document.createElement("td");
  var dataTd = document.createElement("td");
  var horarioTd = document.createElement("td");

  //preenchendo os valores trazidos do form
  nomeTd.textContent = nome;
  donoTd.textContent = dono;
  racaTd.textContent = raca;
  dataTd.textContent = data;
  horarioTd.textContent = horario;

  //colocado <td> dentro do <tr>
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(donoTd);
  pacienteTr.appendChild(racaTd);
  pacienteTr.appendChild(dataTd);
  pacienteTr.appendChild(horarioTd);

  //traz o <tr> que acabei de criar para a tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
