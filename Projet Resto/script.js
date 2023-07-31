window.onscroll = () => {
    const a1 = document.getElementsByClassName('a1');

    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        document.querySelector('header').style.background = '#ffffff';
        document.querySelector('header').style.height = '35px';
        document.getElementById('logo').style.color = '#000000';
    
        for(let i =0; i < a1.length;i++){
            a1[i].style.color = '#000000';
        }
    }else{
        document.querySelector('header').style.background = 'transparent';
        document.querySelector('header').style.height = '70px';
        document.getElementById('logo').style.color = '#ffffff';
    
        for(let i =0; i < a1.length;i++){
            a1[i].style.color = '#ffffff';
        }
    }
}