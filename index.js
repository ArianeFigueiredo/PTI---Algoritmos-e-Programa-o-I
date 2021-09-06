do{
  var precoGasolina, precoAlcool, relacaoDeConsumo, opcao

  precoGasolina = parseFloat (prompt('Informe o preço da gasolina'));
  precoAlcool = parseFloat(prompt('Informe o preço do álcool'));
  relacaoDeConsumo = precoAlcool/precoGasolina;

  if(relacaoDeConsumo == 0.7){
  alert("Tanto faz abastecer com álcool ou gasolina!!")
}
  else if(relacaoDeConsumo >= 0.7){  
  alert("É mais vantajoso abastecer com gasolina, pois a relação de consumo é de: " + relacaoDeConsumo)
}
  else if(relacaoDeConsumo <= 0.7){
  alert("É mais vantajoso abastecer com álcool, pois a relação de consumo é de: " + relacaoDeConsumo)
}
opcao = (prompt('Deseja fazer o cálculo novamente? Escolha uma opção. Sim ou Não'));
  switch(opcao){
    case 'Sim':
      alert('Então vamos calcular de novo!')
      break
    case 'Não':
      alert('Obrigad@ por ter realizado o cálculo conosco!')
      break
    default:
      alert('Opcao invalida!')
      
      //ou substituiria o bloco da opção switch pelo seguinte código--->var repetir = (prompt('Deseja fazer o cálculo novamente?\n s ou n'));
}}
while (opcao == 'Sim')
