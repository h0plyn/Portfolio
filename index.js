console.log('Let\'s Go!!')

function box() {
    let info = document.querySelector('.info');
   console.log(info)
    if (info.style.visibility === 'hidden') {
        info.style.visibility = 'visible';
    } else {
        info.style.visibility = 'hidden'
    }
}

