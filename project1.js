
{/* 
Other Features :   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
time zone concept reference : https://youtu.be/-likemsorlw
Time zones : http://www.timezoneconverter.com/cgi-bin/zoneinfo.tzc?s=default&tz=America/New_York

*/}

let a;
let date1;
let time1;
let a1;
let date2;
let time2,time3,time4,time5,time6;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//INDIAN TIME or current time
setInterval(() => {
    a = new Date();
    //time = ' ' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    time1 = ' '+ a.toLocaleTimeString();
    date = a.toLocaleDateString(undefined,options);
    document.getElementById('time').innerHTML = time1 + "<br> on " + date;
}, 1000);  

//Rome
setInterval(() => {
    let x = new Date();
    time2 = x.toLocaleString("en-US",{timeZone:'Europe/Rome',timeStyle:'medium',hourCycle:'h12'});
    document.getElementById('rome1').innerHTML = ' '+ time2;
    
},1000);
setInterval(() => {
    let x = new Date();
    time3 = x.toLocaleString("en-US",{timeZone:'Europe/London',timeStyle:'medium',hourCycle:'h12'});
    document.getElementById('london1').innerHTML = ' '+ time3;
    
},1000);

//Japan
setInterval(() => {
    let x = new Date();
    time4 = x.toLocaleString("en-US",{timeZone:'Japan',timeStyle:'medium',hourCycle:'h12'});
    document.getElementById('japan').innerHTML = ' '+ time4;
    
},1000);

//Argentina
setInterval(() => {
    let x = new Date();
    time5 = x.toLocaleString("en-US",{timeZone:'America/New_york',timeStyle:'medium',hourCycle:'h12'});
    document.getElementById('argen').innerHTML = ' ' + time5;
    
},1000);

//Germany / Berlin
setInterval(() => {
    let x = new Date();
    time6 = x.toLocaleString("en-US",{timeZone:'Europe/Berlin',timeStyle:'medium',hourCycle:'h12'});
    document.getElementById('germ').innerHTML = ' '+ time6;
    
},1000);


    