const objetos = document.getElementById("objetos") //literais tipo personalizado classes propriedades e metodos sem instaciar

const computador={
    cpu:"", 
    ram:"",
    hd:"", //criar metodo:
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD.:${this.hd}`)
    }
}
computador["monitor"] = "22pol"
computador.placaVideo = "rtx"
delete(computador.hd)

const c1= Object.assign({}, computador)
console.log()
c1.info() //c1 clonado de meu computadores

const c2 = Object.create(computador)
c2.cpu="i9"
c2.ram="32gb"
c2.hd= "2tb"
c2.info()

const o1= {obj1: '1'}
const o2= {obj2: '2'}
const o3= {obj3: '3'}
const o4= Object.assign(o1, o2, o3)
console.log(o4)

const computadores = [
    {
        cpu:"i9", 
        ram:"64gb",
        hd:"2tb"
    },
    {
        cpu:"i7", 
        ram:"32gb",
        hd:"2tb"
    },
    {
        cpu:"i5", 
        ram:"16gb",
        hd:"1tb"
    }
]

//array de objetos:
computadores.forEach((c)=>{
    const div = document.createElement("div")
    div.innerHTML = c.cpu+"<br/>"+c.ram + "<br/>"+ c.hd
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})


//computador.info()

//console.log(computadores)
//objetos.innerHTML = computador.cpu + " - " + computador.ram + " - " + computador.hd
//objetos.innerHTML = JSON.stringify(computadores)