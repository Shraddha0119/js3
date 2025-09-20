let main = document.getElementById("main")
let filprice = document.querySelector("select")
let input = document.querySelector("input")

let api = "https://dummyjson.com/products";
let realData;

const getData = async()=>{
 let res =   await fetch(api)
//    console.log(await res.json())
let data = await res.json()
console.log(data.products)
realData = data.products;
display(realData)

// let x =  realData.filter((el)=>{
//      if(el.category == "beauty"){
//         return el
//      }else if(el.category == "fragrances"){
//         return el
//      }
// })

// console.log(x)
}


getData()




const display = (data)=>{
    main.innerHTML = ""
//    console.log(data)
data.map((el,index)=>{
// console.log(el)
 let name = document.createElement("h2");
 name.innerText = el.title;
 let p = document.createElement("h3");
 p.innerText = el.price;
 let img = document.createElement("img");
 img.setAttribute("class", "images")
 img.src = el.images[0];
 let div = document.createElement("div");

 div.append(img, name, p);
 main.append(div);


})
}


const filterpr =()=>{

if (filprice.value == "lth"){
     realData.sort((a, b) => {
       return a.price - b.price;
     });
}else if(filprice.value == "htl"){
     realData.sort((a, b) => {
       return b.price - a.price;
     });
}


display(realData)
}

input.addEventListener("input",()=>{
  let x = event.target.value.toLowerCase()


  const filtered =realData.filter((data)=>{
    return data.title.toLowerCase().includes(x)
  })



  display(filtered)
  // console.log(filtered);
  
})









// const inputdata =()=>{
//     let input = document.querySelector("input")
//     console.log(input.value)
// }


// let arr = [1,5,9,6,7,3,77,87,55,32,11]

// let x =  arr.filter((el)=>{
//      return el>50
// })



// arr.sort((a,b)=>{
//    return b-a
// })

// console.log(arr)