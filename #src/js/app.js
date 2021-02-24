window.onload = () => {
    @@include('appFull.js');
    @@include('_function.js');
    @@include('forms.js');
    @@include('files/dynamic_adapt.js');
    @@include('../common/menu/menu.js');
    @@include('../common/popup/popup.js');
    @@include('../common/red-block/red-block.js');
    @@include('../common/header/header.js');
    @@include('blocks/#testimonials.js');
    @@include('pages/#about.js');



    {
        let buttonsContact = document.querySelectorAll('.btn-cont');
        if(buttonsContact.length) {
            buttonsContact.forEach(btn => {
                let text = btn.innerText;
                btn.innerText = '';
                btn.insertAdjacentHTML('afterbegin', `<span>${text}</span>`)
                
            })
        }
    }
}



