const slides=[
{img:"images/1.jpg",text:"A true friend is a priceless gift."},
{img:"images/2.jpg",text:"Thank you for every smile."},
{img:"images/3.jpg",text:"Memories become beautiful with friendship."},
{img:"images/4.jpg",text:"Some friendships last forever."},
{img:"images/5.jpg",text:"Happy Friendship Day, JYOOO!<br><br>From NIKHIL ❤️"}];
let i=-1;
function next(){
i++;
const c=document.getElementById("content"),b=document.getElementById("btn");
if(i<slides.length){
c.innerHTML=`<img src="${slides[i].img}"><p>${slides[i].text}</p>`;
if(i===slides.length-1)b.style.display="none";
}}
