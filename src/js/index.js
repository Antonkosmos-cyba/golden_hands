obj_hours=document.getElementById("hours");
 
name_month=new Array ("Января","Февраля","Марта", "Апреля","Мая", "Июня","Июля","Августа","Сентября", "Октября","Ноября","Декабря");
name_day=new Array ("Вс.","Пн.", "Вт.","Ср.","Чт.", "Пт.","Сб.");
 
function wr_hours()
{
time=new Date();
 
time_sec=time.getSeconds();
time_min=time.getMinutes();
time_hours=time.getHours();
time_wr=((time_hours<10)?"0":"")+time_hours;
time_wr+=":";
time_wr+=((time_min<10)?"0":"")+time_min;
time_wr+=":";
time_wr+=((time_sec<10)?"0":"")+time_sec;
 
//time_wr=""+name_day[time.getDay()]+" "+time.getDate()+" "+name_month[time.getMonth()]+" "+time.getFullYear()+"г. <br> Время: "+time_wr;
    
time_wr=""+time.getDate()+" "+name_month[time.getMonth()]+" "+time.getFullYear()+"г. "+name_day[time.getDay()]+ " <br> &#128368; "+time_wr;
 
obj_hours.innerHTML=time_wr;
}
 
wr_hours();
setInterval("wr_hours();",1000);