const contactH3 = document.querySelector('.contactmeh3')
const contactH3Underline = document.querySelector('.underline')
const contactConts = document.querySelectorAll('.contact-cont')
const contactMedias = document.querySelectorAll(".contact .media")

const obs = new IntersectionObserver(entries =>{

    if(entries[0].isIntersecting){
        entries[0].target.style.animation = 'h3anim 1.5s ease-out forwards'
        contactH3Underline.style.animation = 'h3animUnd 1s .7s ease-out forwards'

        let delay = 1
        contactConts.forEach((e,i) =>{

            e.style.animation = `headeranim 1s ${delay}s ease forwards`
            contactMedias[i].style.animation = `headeranim 1s ${delay + 1}s ease forwards`
            delay += 0.4
        })

        obs.disconnect()
    }
}, {threshold: 1})

obs.observe(contactH3)



const aboutH3 = document.querySelector('.abouth3')
const aboutTxt = document.querySelector('.about-txt-cont')
const aboutBtn = document.querySelector('.about-btn')
const aboutDots = document.querySelector('.about-dots')
const aboutImg = document.querySelector('.img-cont')



const obs2 = new IntersectionObserver(entries =>{

    if(entries[0].isIntersecting){
        aboutH3.style.animation = 'opacityanim 1.5s ease-out forwards';
        aboutTxt.style.animation = 'opacityanim 1.5s .7s ease-out forwards'
        aboutBtn.style.animation = 'opacityanim 2s 1.5s ease-out forwards'
        aboutImg.style.animation = 'opacityanim 2s 1.2s ease-out forwards'
        aboutDots.style.animation = 'opacityanim 1.5s 2.5s ease-out forwards'
    }
}, {threshold: 0.9})

obs2.observe(aboutTxt)






const myProjectsH3 = document.querySelector('.projectsH3');
const hoodieProj = document.querySelector(".hoodie-proj");

const obs3 = new IntersectionObserver(entries =>{

    if(entries[0].isIntersecting){
        myProjectsH3.style.animation = 'opacityanim 2s ease-out forwards';
    }
}, {threshold: 0.9})

obs3.observe(myProjectsH3)




const projects = document.querySelectorAll('.project');

const obs4 = new IntersectionObserver(entries =>{

    if(entries[0].isIntersecting){
        const en = entries[0].target;

        const title = en.childNodes[3].childNodes[1],
            desc = en.childNodes[3].childNodes[3],
            tags = en.childNodes[3].childNodes[5],
            codeBtn = en.childNodes[3].childNodes[7].childNodes[1],
            liveBtn = en.childNodes[3].childNodes[7].childNodes[3],
            img = en.childNodes[1].childNodes[5],
            dots = en.childNodes[1].childNodes[1],
            dotsB = en.childNodes[1].childNodes[3]

        title.style.animation = `opacityanim 1.7s ease-out forwards`
        desc.style.animation = `opacityanim 2.2s .8s ease-out forwards`
        tags.style.animation = `opacityanim 1.3s 1.5s ease-out forwards`
        codeBtn.style.animation = `opacityanim 1.2s 2s ease-out forwards`
        liveBtn.style.animation = `opacityanim 1.2s 2.5s ease-out forwards`
        img.style.animation = `opacityanim 3s .9s ease-out forwards`
        dots.style.animation = `opacityanim 2s 2s ease-out forwards`
        dotsB.style.animation = `opacityanim 2s 2s ease-out forwards`
    }
}, {threshold: 0.7})


projects.forEach(proj =>{
    obs4.observe(proj)
})