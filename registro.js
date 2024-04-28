function cadastrar(){
    alert('Cadastro realizado com sucesso!')
    let placa = document.getElementById('placa_do_veiculo').value
    let proprietario = document.getElementById('nome_do_proprietario').value
    let numapart = document.getElementById('numero_do_apartamento').value
    let bloco = document.getElementById('bloco_do_apartamento').value
    let modelo = document.getElementById('modelo_do_veiculo').value
    let cor = document.getElementById('cor_do_veiculo').value
    let numvagapart = document.getElementById('numero_de_vagas_de_estacionamento').value
  
    console.log("A placa do veiculo é:" + placa)
    console.log("O nome do proprietario é:" + proprietario)
    console.log("O numero do apartamento é:" + numapart)
    console.log("O bloco é:" + bloco)
    console.log("O modelo do carro é:" + modelo)
    console.log("A cor do carro é:" + cor)
    console.log("Esse é o numero de vagas:" + numvagapart)
  
  }
  
