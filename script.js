const slidercontainer = document.querySelector('.slider-container');
const rightslide = document.querySelector('.right-slide');
const leftslide = document.querySelector('.left-slide');
const upbutton = document.querySelector('.up-button');
const downbutton = document.querySelector('.down-button');
const slidelength = rightslide.querySelectorAll('div').length;
let activesliderindex = 0;
leftslide.style.top = `-${(slidelength - 1) * 100}vh`
upbutton.addEventListener('click', () => changeslide('up'));
downbutton.addEventListener('click', () => changeslide('down'));
const changeslide = (direction) => {
    const sliderHight = slidercontainer.clientHeight;
    if (direction === 'up') {
        activesliderindex++;
        if (activesliderindex > slidelength - 1) {
            activesliderindex = 0;
        }
    }
    else if (direction === 'down') {
        activesliderindex--;
        if (activesliderindex < 0) {
            activesliderindex = slidelength - 1;
        }
    }
        rightslide.style.transform = `translateY(-${activesliderindex * sliderHight}px)`
        leftslide.style.transform = `translateY(${activesliderindex * sliderHight}px)`

    }
