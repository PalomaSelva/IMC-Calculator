import {Modal} from "./modal.js"
import {Error} from "./error.js"
import {calculateIMC,notANumber} from "./utils.js"

// variables
// let btnIMC=document.querySelector('button') 
let form=document.querySelector('form') 

// events
form.onsubmit= event=>{
    event.preventDefault() //Cancela os eventos => O evento padrão de um botão dentro de um formulário é submit, ou seja, enviar o formulário e recarregar a página
    
    const imcWeight=Number(document.querySelector('#imc-weight').value)
    const imcHeight=Number(document.querySelector('#imc-height').value)
    const imcResult=calculateIMC(imcWeight,imcHeight)
    
    const imcResultIsNotANumber = notANumber(imcResult)
    
    if (imcResultIsNotANumber){
        Error.open()
        return // encerra a execução da função
    }
    /* dava p usar um else
    else{
        let message = `Seu IMC é de ${imcResult}`
        Modal.text.innerHTML= message
        Error.close()
        Modal.open()
    }
    */
    
    let message = `Seu IMC é de ${imcResult}`
    Modal.text.innerHTML= message
    Error.close()
    Modal.open()

}



