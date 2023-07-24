document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const flapTarget = botao.target.dataset.tabButton;
            const flap = document.querySelector(`[data-tab-id=${flapTarget}]`);
            hideAllTabs();
            flap.classList.add('shows__list--is-active');
            removeActiveBtn();
            botao.target.classList.add('shows__tabs__btn--is-active');
        })
    }
})
function hideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
function removeActiveBtn(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__btn--is-active');
    }
}