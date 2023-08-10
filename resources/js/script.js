//Disable dragging in images

const imgs = document.querySelectorAll('img');

for (let img of imgs) {
    img.setAttribute('draggable', 'false');
    img.setAttribute('loading', 'lazy');
}


//Slider Interaction

const leftArrow = document.getElementById('slider-left-arrow');
const rightArrow = document.getElementById('slider-right-arrow');
const slider = document.getElementById('slider-content');
const sliderDescription = document.querySelector('#slider-description');
const heading = document.querySelector('h1');
const paragraph = document.querySelector('#slider p');
const sliderLink = document.querySelector('#slider a');

const sliderContent = [
    {
        title: 'Kent Mobilyaları',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro, cupiditate molestias quam quo et expedita iure repudiandae accusantium.',
        image: 'https://images.unsplash.com/photo-1445937888010-cc262f556033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '#'
    }, 
    {
        title: 'Dış Aydınlatma Direkleri',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, laborum.',
        image: 'https://images.unsplash.com/photo-1522013586355-831ecbf8bbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '#'
    },
    {
        title: 'Lokal Aydınlatma Direkleri',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis doloremque placeat. Officiis, architecto dolore.',
        image: 'https://images.pexels.com/photos/17391841/pexels-photo-17391841/free-photo-of-white-lamp-on-buildings-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        link: '#'
    }
]

function changeContent(idx) {
    slider.style.backgroundImage = `url('${sliderContent[idx].image}')`;
    sliderDescription.classList.add('fade-out');
    setTimeout(() => {
        sliderDescription.classList.remove('fade-out');
        heading.innerText = sliderContent[idx].title;
        paragraph.innerText = sliderContent[idx].description;
        sliderLink.href = sliderContent[idx].link;
    }, 1000);
}

let activeContent = 0;

function leftArrowCallback() {
    activeContent--;
    if(activeContent < 0) {
        activeContent = sliderContent.length - 1;
    }
    changeContent(activeContent);
    leftArrow.removeEventListener('click', leftArrowCallback);
    setTimeout(() => {
        leftArrow.addEventListener('click', leftArrowCallback)
    }, 1000);
}

function rightArrowCallback() {
    activeContent++;
    if(activeContent > sliderContent.length - 1) {
        activeContent = 0;
    }
    changeContent(activeContent);
    rightArrow.removeEventListener('click', rightArrowCallback);
    setTimeout(() => {
        rightArrow.addEventListener('click', rightArrowCallback)
    }, 1000);
}

leftArrow.addEventListener('click', leftArrowCallback);

rightArrow.addEventListener('click', rightArrowCallback);


//Page Transition

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenELs = document.querySelectorAll('.hidden');

hiddenELs.forEach((el) => observer.observe(el));


//Navbar Transition

const nav = document.querySelector('nav');
const scrollWatcher = document.createElement('div');

nav.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    console.log(entries);
    nav.classList.toggle('sticking', !entries[0].isIntersecting);
}, {rootMargin: '200px 0px 0px 0px'});

navObserver.observe(scrollWatcher);


//Navbar Mobile Toggle

const toggler = document.getElementById('nav-links-logo');

toggler.addEventListener('click', () => {
    nav.classList.toggle('show-links');
})

window.addEventListener("resize", () => {
    if (document.body.clientWidth > 1100) {
        nav.classList.remove("show-links");
      }
});
  