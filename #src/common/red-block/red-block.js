let redBlock = document.querySelector('.red-block');
if(redBlock) {
    let titles = redBlock.querySelectorAll('.red-block__card-title');
    let heightArr = [];
    
    titles.forEach(title => {
        heightArr.push(+title.clientHeight);
    })

    let height = Math.max(...heightArr);

    titles.forEach(title => {
        title.style.minHeight = height + 'px';
    })
}
