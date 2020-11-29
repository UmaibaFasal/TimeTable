let month=["January","February","March","April","May","June","July","August","September","October","November","December"];
let d=new Date();
let n=d.getDate();
document.getElementById('date').innerHTML=n;
let m=month[d.getMonth()];
document.getElementById('month').innerHTML=m;
let y=d.getFullYear();
document.getElementById('year').innerHTML=y;
let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dy=day[d.getDay()];
document.getElementById('day').innerHTML=dy;
setInterval(displayTime,500);
function displayTime(){
	let d= new Date();
	let h=d.getHours();
	let mi=d.getMinutes();
	let s=d.getSeconds();
	let prepand=(h>12)?"PM":"AM";
	h=(h>12)?h-12:h;
	h=(h<10)?("0"+h):h;
	mi=(mi<10)?("0"+mi):mi;
	s=(s<10)?("0"+s):s;
	document.getElementById('time').innerHTML=h+":"+mi+":"+s+" "+prepand;
}
let list1=document.getElementById('opt1');
list1.style.display='none';
let bt1=document.getElementById('dd1');
bt1.addEventListener('click',(event)=>{
	if(list1.style.display=="none")
		list1.style.display="block";
	else
		list1.style.display="none";
})
let list2=document.getElementById('opt2');
list2.style.display='none';
let bt2=document.getElementById('dd2');
bt2.addEventListener('click',(event)=>{
	if(list2.style.display=="none")
		list2.style.display="block";
	else
		list2.style.display="none";
})
let list3=document.getElementById('opt3');
list3.style.display='none';
let bt3=document.getElementById('dd3');
bt3.addEventListener('click',(event)=>{
	if(list3.style.display=="none")
		list3.style.display="block";
	else
		list3.style.display="none";
})
let list4=document.getElementById('opt4');
list4.style.display='none';
let bt4=document.getElementById('dd4');
bt4.addEventListener('click',(event)=>{
	if(list4.style.display=="none")
		list4.style.display="block";
	else
		list4.style.display="none";
})
let list5=document.getElementById('opt5');
list5.style.display='none';
let bt5=document.getElementById('dd5');
bt5.addEventListener('click',(event)=>{
	if(list5.style.display=="none")
		list5.style.display="block";
	else
		list5.style.display="none";
})