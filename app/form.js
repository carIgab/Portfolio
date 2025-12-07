function validacao_formulario(){
    let nome_inpt = document.querySelector("#name_form")
    let email_inpt = document.querySelector("#email_form")
    let mensagem_inpt = document.querySelector("#message_form")

    // valida se todos os campo foram preenchidos corretamente
    if (nome_inpt.value != "" && valida_email(email_inpt.value) && mensagem_inpt.value != ""){
        // Caso todos estejam corretamente
        alert(`Prezado(a) ${nome_inpt.value}, sua mensagem foi enviada com sucesso`)
        document.querySelector(".form_camp").reset()
        nome_inpt.style.borderBottom = '1px solid var(--color-secundary)';
        email_inpt.style.borderBottom = '1px solid var(--color-secundary)';
        mensagem_inpt.style.borderBottom = '1px solid var(--color-secundary)';   
    }
    else{
        // Não caso todos estejam corretamente
        alert("Erro no envio da mensagem, favor verificar se os campos foram preenchidos corretamente")
        nome_inpt.style.borderBottom = '1px solid red';
        email_inpt.style.borderBottom = '1px solid red';
        mensagem_inpt.style.borderBottom = '1px solid red';   
    }

         
}

function valida_email(email){
    // função do valida do email, para um formato 'email@dominio.com'
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    
}
