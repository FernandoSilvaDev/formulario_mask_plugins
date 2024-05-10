$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-000'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    $('#zip-code').mask('00000-000', {
        placeholder: '00000-00'
    })

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true},
            telefone: {required: true},
            cpf: {required: true},
            endereco: {required: true},
            zipCode: {required: true}
        },
        messages: {
            nome: 'Por favor, insira o seu nome!',
            email: 'Por favor, Insira o seu e-mail!',
            telefone: 'Por favor, insira o seu telefone!',
            cpf: 'Por favor, insira o seu CPF!',
            endereco: 'Por favor, insira o seu endereço!',
            zipCode: 'Por favor, insira o seu CEP!'
        }
    })
})