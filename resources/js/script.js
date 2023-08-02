const imgs = document.querySelectorAll('img');

for (let img of imgs) {
    img.setAttribute('draggable', 'false');
}

const slider = document.getElementById('slider-content');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const sliderContent = [
    {
        title: 'Kent Mobilyaları',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro, cupiditate molestias quam quo et expedita iure repudiandae accusantium.',
        image: 'https://images.unsplash.com/photo-1445937888010-cc262f556033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }, 
    {
        title: 'Dış Aydınlatma Direkleri',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, laborum.',
        image: 'https://images.unsplash.com/photo-1522013586355-831ecbf8bbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        title: 'Lokal Aydınlatma Direkleri',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis doloremque placeat. Officiis, architecto dolore.',
        image: 'https://images.pexels.com/photos/17391841/pexels-photo-17391841/free-photo-of-white-lamp-on-buildings-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]
    

let activeImg = 0;

function changeBackground(num) {
    slider.style.backgroundImage = `url('${sliderContent[num][image]}')`;
    console.log(sliderContent[num][image]);
}

leftArrow.addEventListener('click', () => {
    activeImg--;
    if(activeImg < 0) {
        activeImg = sliderContent.length - 1;
    }
    changeBackground(activeImg);
    console.log(activeImg);
})

rightArrow.addEventListener('click', () => {
    activeImg++;
    if(activeImg > sliderContent.length - 1) {
        activeImg = 0;
    }
    changeBackground(activeImg);
    console.log(activeImg);
})