document.getElementById('output').style.visibility= 'hidden';

document.getElementById('input').addEventListener('input',function(e)
{
    document.getElementById('output').style.visibility= 'visible';
    let pounds = e.target.value;
    document.getElementById('gram').innerHTML=pounds/0.0022046;
    document.getElementById('kilogram').innerHTML=pounds/2.2046;
    document.getElementById('ounces').innerHTML=pounds*16.000;
});