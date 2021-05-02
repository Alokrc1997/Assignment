
const country=document.getElementById('country');
const search=document.getElementById('search');
const temp=document.getElementById('temp');
//const icon=document.getElementById('icon');
const weather=document.getElementById('weather');
const minmax=document.getElementById('minmax');
const date=document.getElementById('date');
const icon=document.getElementById('icon');
const content=document.getElementById('content');
const week=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
async function fetchData(u){
    
    const data =await fetch(u);
    return await data.json();

    // console.log(d.dt);
    // var date=  new Date(d.dt*1000);
    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(date.getDate());
    // console.log(date.getDay());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.toLocaleTimeString("en-US"));
    // console.log(date.toLocaleDateString("en-US"));

}
search.addEventListener('keypress',(e)=>{
    if(e.key==="Enter")
    {
    content.style.display='none';
    const val=search.value;
    search.placeholder="Searching...";
    search.value="";
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=21a34e3f14ff3e98d97da47f2b0c4636`;
    
    fetchData(url)
.then((d)=>{
    content.style.display='block';
    search.placeholder="Search City"
    console.log(d);
    var dat=  new Date(d.dt*1000);
    country.innerText=`${d.name}, ${d.sys.country}`;
    temp.innerText=`${d.main.temp}°C`;
    
    weather.innerText=`${d.weather[0].description}`;
    minmax.innerText=`${d.main.temp_min}°C | ${d.main.temp_max}°C`;
    date.innerText=`${week[dat.getDay()]}, ${dat.toLocaleDateString("en-US")}`;
    console.log(`${week[dat.getDay()]}, ${dat.toLocaleDateString("en-US")}`)
    setIcon(`${d.weather[0].main}`)
})
.catch(e=>{
    console.log(e);
    content.style.display='none';
    alert("Something went Wrong");
});
    }
});

function setIcon(type){
    console.log(type);

    if (type=='Clear'){
        icon.innerHTML="<i class='far fa-sun' style='color: rgb(230, 178, 38);'></i>";
      }
      else if(type=='fas fa-bolt'){
        icon.innerHTML="<i class='far fa-thunderstorm' style='color:#3a0ca3;'></i>";
        
      }
      else if(type=='Snow'){
        icon.innerHTML="<i class='fas fa-snowflake' style='color:#e5e5e5;'></i>";
       
      }
      else if(type=='Clouds'){
        icon.innerHTML="<i class='fas fa-cloud' style='color:#6c757d;'></i>";
        
       
      }
      else if(type=='Rain'){
        icon.innerHTML="<i class='fas fa-cloud-showers-heavy' style='color:#d0d1ff;'></i>";
        
       
      }
      else if(type=='Drizzle'){
        icon.innerHTML="<i class='fas fa-cloud-rain' style='color:#cbf3f0;'></i>";
        
      }
      else if(type=='Haze'){
        console.log(type);
        icon.innerHTML="<i class='fas fa-smog' style='color:#6b705c;'></i>";
      }
      else {
        icon.innerHTML="<i class='far fa-sun' style='color: rgb(230, 178, 38);'></i>";
      }

}

