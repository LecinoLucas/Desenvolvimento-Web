
function validarNome(){
  var nome = document.querySelector('#nome-usuario').value


if(!Boolean(nome)){ 
  console.log('o campo de nome esta vazio')
  alert('Campo do nome é obrigatório! ')
  return (document.querySelector('#nome-msg').innerHTML = 'Campo obrigatório!  ',
  document.querySelector('#nome-usuario').focus())      
}else {document.querySelector('#nome-usuario').innerHTML = '' }

if(nome.length < 3 ) { 
  alert('O nome do usuário deve ter no mínimo 3 carecteres')
  return document.querySelector('#nome-usuario').focus()
  }
} 


function validarMatricula(){

  var matricula = document.querySelector('#matricula').value

  if(!Boolean(matricula)){ 
    console.log('o campo de matricula esta vazio')
    alert('Campo de Matrícula é obrigatório! ')
    return (document.querySelector('#matricula-msg').innerHTML = 'Campo obrigatório!  ', 
    document.querySelector('#matricula').focus())       
}else {document.querySelector('#matricula-msg').innerHTML = '' }

if(matricula.length >= 20){ 
    alert('O campo de matriculá é permitido até 20 caracteres ')    
    return (document.querySelector('#matricula').focus(),
    document.querySelector('#matricula-msg').innerHTML = '')
   }


}



function verificarData() {

  var data = document.getElementById('dataNas').value

  if(!Boolean(data)){ 
        console.log('o campo data de nascimento esta vazio')
        alert('Campo  data de nascimento é obrigatório! ',
        document.querySelector('#nome-usuario').focus())
        return (document.querySelector('#data-msg').innerHTML = 'Campo obrigatório!  ', 
        document.querySelector('#data').focus() )
    }else {document.querySelector('#nome-msg').innerHTML = '' 

    data = data.replace(/\//g, "-"); 

    var data_array = data.split("-")

    if(data_array[0].length != 4){
        data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
     }

     var hoje = new Date()

     if(data_array[0] >= hoje.getFullYear() ) { 
        return (alert('O ano de nascimento não pode ser o mesmo ou maior que o ano atual'), 
        document.getElementById('data').focus())
     }
    }
     //final da validação  do campo de  ano de nascimento com o ano atual

  }

  function validarCurso() {
    //Curso escolhido pelo usuário
    var select1 = document.getElementById('Curso');
    //Option do que o usuário selecionou  
    var valor1 = select1.options[select1.selectedIndex].value;
  
  
    //Checkbox do não cursaria escolhido pelo usuário
    var marcados = document.querySelectorAll('[name=notCurso]:checked')
    var escolhas = [];
    //Adicionando no array escolhas os checkbox marcados
    for (var i = 0; i < marcados.length; i++) {
  
      escolhas.push(marcados[i].value);
    }
  
    if (escolhas.includes(valor1) == true) {
      alert('Curso não pode ser selecionado como não cursaria, porque você escolheu esse curso anteriormente ! ',
        document.querySelector('#Curso').focus())
      //document.getElementById('res').innerHTML = 'Curso não pode ser selecionado como não cursaria, porque você escolheu esse curso anteriormente';
    }
    else if (escolhas.includes(valor1) == false) {
      document.getElementById('res').innerHTML = '';
    }
  
  }

  function validarEmail() {
    //Valor digitado pelo usuário
    var email = document.getElementById('e-mail').value;
  
  
    if (email.indexOf('.') == -1) {
      alert('O email deve possuir .(ponto)',
      document.querySelector('#e-mail').focus())

    }
    else if (email.indexOf('@') == -1) {
      alert('O email deve possuir @',
      document.querySelector('#e-mail').focus())

    }
    else if (email[0] === '@') {
      alert('@ não pode ser o primeiro caractere do email',
      document.querySelector('#e-mail').focus())

    }
    else if (email.includes('@.') || email.includes('.@')) {
      alert('@ e .(ponto) não podem ficar juntos',
      document.querySelector('#e-mail').focus())

    }
    else {
      document.getElementById(' ').innerHTML = '';
    }
  }


  function validarSenha() {
  
    //Regex
    const letraMinusculas = /[a-z]/
    const letraMaiusculas = /[A-Z]/
    const letras = /[a-z]/ig;
    const especiais = /\W|_/;
  
    //Valores inseridos pelo usuário
    var senha = document.getElementById('senha1').value;
    var confirmSenha = document.getElementById('senha2').value;
    
    if (senha != confirmSenha) {
      alert('Senhas diferentes',
      document.querySelector('#senha1-msg').focus())

    }
    else if (senha.length > 8) {
      alert('Senha muito longa. Deve possuir entre 6 e 8 caracteres',
      document.querySelector('#senha1-msg').focus())
;
    }
    else if (!letraMaiusculas.test(senha)) {
      alert('Deve possuir maiusculas',
      document.querySelector('#senha1-msg').focus())

    }
    else if (!especiais.test(senha)) {
      alert('Deve possuir pelo menos um caractere especial',
      document.querySelector('#senha1-msg').focus())
    }
    else if (!letras.test(senha)) {
      alert('Deve possuir pelo menos uma letra',
      document.querySelector('#senha1-msg').focus())
    }
    else {
      document.getElementById('  ').innerHTML = '';
    }
  
  }
