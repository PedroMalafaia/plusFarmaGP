// ESTRUTURA DE VALIDACAO


app.post('/login',(req,res) =>{
    console.log(req.body)
    function logar(){
        const form = {
            loginButton: () => document.getElementById("login-button"),
            email: () => document.getElementById("email"),
            password: () => document.getElementById("password")
        }
        
        try {
            
            if ((form.email().value == "3@3.com") && (form.password().value == "123456"))
            console.log("o if deu certo")
            window.location.href = "./";
    
        } catch (error) {
            console.log(error)
                
        }
    }
})
