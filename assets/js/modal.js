// object literal 
export const Modal = {

    screen: document.querySelector('.modal-container'),
    btnClose:document.querySelector('.close'),
    text: document.querySelector('.modal-wrapper h2'),

    open(){
        Modal.screen.classList.remove('hide')
    },
    close(){
        Modal.screen.classList.add('hide')
    }
}
Modal.btnClose.addEventListener('click', () => Modal.close())

window.addEventListener('keydown', (e)=>{
    if (e.key=='Escape'){
        Modal.close()
    }
})