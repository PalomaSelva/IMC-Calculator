export const Error={
    screen: document.querySelector('.error'),
    open(){
        Error.screen.classList.remove('hide')
    },
    close(){
        Error.screen.classList.add('hide')
    }
}