const modalBg = document.querySelector('.modal-bg');
const burger = document.querySelector('.burger-modal')
const burgerBtn = document.querySelector('.burger-cont')

burgerBtn.addEventListener('click', e =>{
    modalBg.classList.toggle('off')
    burger.classList.toggle('off')
})

modalBg.addEventListener('click', e =>{
    modalBg.classList.add('off')
    burger.classList.add('off')
})


const skills = ["HTML","CSS","Javascript","NodeJS","MongoDB","SASS","React","C++","MySQL","Express","EJS","Figma"]

/*
    -Zrobic bardzo dlugi slide, tak zeby z minute przejezdzal
    -Do niego dac testowo 20 rzeczy
    -zrobic tak zeby jeden element sie nie pojawial wiecej niz 3 razy na slide
    -animacje dac transformu

*/
/* setInterval(() => console.log(document.querySelector('.burgex').clientWidth)) */
const rows = document.querySelectorAll('.skill-row');

rows.forEach(row =>{

    const rowElems = skills.map(item =>{
        const div = document.createElement('div');
        div.setAttribute('class','skill')
        div.innerHTML = item;

        return div
    });

    for(let i = 0; i < 8; i++){

        // Create new elem
        const elem = document.createElement('div');
        elem.setAttribute('class','skill')

        // Create random number and number of exact items in rowElems array
        let rand = Math.floor(Math.random() * skills.length)
        let numOfExactItems = 0;

        // Check if rowElems contains at least 3 items same as new item, if so, then try again to prevent too much duplicates
        rowElems.forEach(e =>{
            if(e == skills[rand])
                numOfExactItems++
        })

        while(numOfExactItems > 2){

            rand = Math.floor(Math.random() * skills.length)
            numOfExactItems = 0;

            rowElems.forEach(e =>{
                if(e == skills[rand])
                    numOfExactItems++
            })

/*             while(numOfExactItems < 3 && (rowElems[rand+1] == skills[rand] || rowElems[rand-1] == skills[rand])){
                rand = Math.floor(Math.random() * skills.length)
            } */
        }

        // Add new item to array
        elem.innerHTML = skills[rand]
        rowElems.push(elem)
    }

    rowElems.forEach(e =>{
        row.append(e)
    })
})










/* --- Intersection Observer --- */





/* --- Animations --- */

const medias = document.querySelectorAll('.media')

medias.forEach(med =>{
    med.addEventListener('animationend', e =>{

        e.target.style.animationFillMode = 'none'
        e.target.style.opacity = '1'
    })
})