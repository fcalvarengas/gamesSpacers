
   

    const form = document.getElementById('form')
    
    const usermane = document.getElementById('nomecompleto')
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')
    const passwordtwo = document.getElementById('confirmarsenha')

    form.addEventListener('submit',(e) => {
    e.preventDefault()


        checkInputs()  

    })
            const usernameValue = usermane.value.trim()
            const emailValue = email.value.trim()
            const senhaValue = senha.value.trim()
            const confirmarsenhaValue = confirmarsenhe.value.trim()

            if(usernameValue === '') {

                errorValidation(username, 'Preencha esse campo')
            }else{


            }

            function errorValidation(input, message) {
                const fomrControl = input.parentElement;
            }


    
