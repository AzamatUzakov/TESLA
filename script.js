

let cnopka_one = document.querySelector('.one')
let cnopka_two = document.querySelector('.two')
let h1 = document.querySelector('.fl_one h1 ')
let speed = document.querySelector('.box_one h1')
let more = 60
let min = 20
let max = 220 + ' км/ч'
let rasxod = 750
cnopka_one.onclick = () => {
    more += 5
    h1.innerHTML = more + ' км/ч'
    if (more > 220) {
        h1.innerHTML = max
        more = 220
    }
    speed.innerHTML = Math.round(rasxod / more * 60) + ' км'
    console.log("cnopka");
}
cnopka_two.onclick = () => {
    more -= 5
    h1.innerHTML = more + ' км/ч'
    if (more < 20) {
        h1.innerHTML = min + ' км/ч'
        more = 60
    }
    speed.innerHTML = Math.round(rasxod / more * 20) + ' км'
    console.log("cnopka");
}

let h1_pech = document.querySelector('.fl_two h1')
let pech = document.querySelector('.pech')
let conditioner = document.querySelector('.conditioner')
let temp = document.querySelector('.m_one p ')
let norm_pech = 20

pech.onclick = () => {
    norm_pech += 1
    h1_pech.innerHTML = norm_pech + '°'

}
conditioner.onclick = () => {
    norm_pech -= 1
    h1_pech.innerHTML = norm_pech + '°'

}

let button_disk_one = document.querySelector('#one')
let button_disk_two = document.querySelector('#two')
let disk_h1 = document.querySelector('.fl_three h1')
let sum = document.querySelector('.box_two h2')
let disk_21_two = document.querySelector('.active_one')
let disk_21_one = document.querySelector('.active_two')
let disk_19_one = document.querySelector('.diskcho_one_nuzda')
let disk_19_two = document.querySelector('.diskcho_two_nuzda')
let dis_max = 21
let dis_min = 19
let pul = 89990
button_disk_one.onclick = () => {
    disk_19_one.style.display = 'none'
    disk_21_one.style.display = 'block'
    disk_19_two.style.display = 'none'
    disk_21_two.style.display = 'block'
    disk_h1.innerHTML = dis_max
    sum.innerHTML = '$' + addCommas(pul + 2300)

}



button_disk_two.onclick = () => {
    disk_19_one.style.display = 'block'
    disk_21_one.style.display = 'none'
    disk_19_two.style.display = 'block'
    disk_21_two.style.display = 'none'
    disk_h1.innerHTML = dis_min
    sum.innerHTML = '$' + addCommas(pul)

}


function addCommas(nStr) {

    nStr += '';

    var x = nStr.split('.');

    var x1 = x[0];

    var x2 = x.length > 1 ? '.' + x[1] : '';

    var rgx = /(\d+)(\d{3})/;
    console.log(rgx);

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


let open_button = document.querySelector('.modal_button button')
let close_modal = document.querySelector('.close')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')

open_button.onclick = () => {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = 1
        modal_bg.style.opacity = 1

    }, 200)
}
close_modal.onclick = () => {
    modal.style.opacity = 0
    modal_bg.style.opacity = 0


    setTimeout(() => {
        modal.style.display = 'none'
        modal_bg.style.display = 'none'
    }, 500)

}


let scale = document.querySelector(".scale")
let img_scale = document.querySelector('.img')
let contener = document.querySelector('.promo')
let img_salon = document.querySelector('.promo_salon')
let blockee = document.querySelector('.blockee')
scale.onclick = () => {
    img_scale.style.scale = 22
    setTimeout(() => {
        contener.style.display = 'none'
        img_salon.style.display = 'block'
        setTimeout(() => {
            img_salon.style.scale = 1

        }, 400);
    }, 700)
}

blockee.onclick = () => {

    img_salon.style.scale = 22
    setTimeout(() => {
        contener.style.display = 'block'
        img_salon.style.display = 'none '
        setTimeout(() => {
            img_scale.style.scale = 1

        }, 400);
    }, 700)
}

 
 




let cnopkacha = document.querySelectorAll('button[data-price]')
let imgcha = document.querySelector('.img_one')
let saloncha = {
    Bejivi: "img/bejivi.png",
    Black: "img/salon.png",
    White: "img/safet.png",

}

let summa = document.querySelector('#sum')
let narx = document.querySelectorAll('.box_button button[data-price]')
let org_ptice = 89990
console.log(summa);
cnopkacha.forEach((item, index) => {
    item.onclick = () => {
        let color = item.innerText
        imgcha.style.backgroundImage = `url(${saloncha[color]})`
        let bolohsba = +narx[index].getAttribute('data-price')
        summa.innerHTML = addCommas(org_ptice + bolohsba)

    }


})
 