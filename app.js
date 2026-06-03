const f=document.getElementById('form');
f.addEventListener('submit',e=>{
e.preventDefault();
const t='EX-'+Date.now();
document.getElementById('tickets').innerHTML+=`<tr><td>${t}</td><td>${orderId.value}</td><td>Open</td></tr>`;
f.reset();
});