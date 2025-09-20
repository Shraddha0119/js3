let api_key ="3df55a703b5b8c6b9edd3921118cbc28";
let api ="https://api.openweathermap.org/data/2.5/weather";



// ?q={buldhana}&appid=232f0bd383dc23f5ded51b0ea8ae959d&units=metric

let input = document.querySelector("input")
let main = document.querySelector("#main")

 const getData=async()=>{
    let cityname = input.value || "buldhana";


    let res =await fetch(`${api}?q=${cityname}&appid=${api_key}&units=metric`);
    

    let data =await res.json()
    // console.log(data);
    display(data)
    
 }


    getData()

 function display({name,main:{temp}}){
    // console.log(data.name);
    // console.log(data.main.temp);


    main.innerHTML=`<h1>${name}</h1>
                    <h2>${temp}</h2>
                     <iframe src="https://maps.google.com/maps?&hl=en&q=${name}&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                     `



              

          
    
    
 }

 