{
    let itemDropDown = document.querySelectorAll('.item-drop-down');
    if(itemDropDown.length) {
        itemDropDown.forEach(item => {
            let link = item.querySelector('.menu__link');
            link.addEventListener('click', function(e) {
                if(this.parentElement.classList.contains('item-drop-down')) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('_open');
                    
                    _slideToggle(this.nextElementSibling)
                }

                
            })
        })
    }
}
