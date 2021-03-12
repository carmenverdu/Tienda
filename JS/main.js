const precio = {
    cerezas: 4.1,
    coco: 3.7,
    manzana: 2.4,
    melocoton: 5.2,
    naranja: 2.5,
    pera: 1.8,
}

let contador = 0;

const convertIdToValidString = value => {
    let str = value;
    let position = str.indexOf('0');
    return str.substring(0, position);
}


const añadirPrecio = product => {
    contador += precio[product];
    document.getElementById('preciototal').innerHTML = contador.toFixed(2);
}

const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById('producto').innerHTML= document.getElementById(ev.target.id).getAttribute('alt')
   }


const allowDrop = ev => {
    ev.preventDefault();
   }


const dropHandler = ev => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let item = document.getElementById(data);
    añadirPrecio(convertIdToValidString(data));
    item.style.display = 'none';
    document.getElementById('producto').innerHTML= "";
    ev.target.appendChild(document.getElementById(data));
   }