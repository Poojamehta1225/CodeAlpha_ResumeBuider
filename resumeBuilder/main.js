function addNewWEField()
{
   // console.log("Adding new field")
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("placeholder","enter here")

   let weOb=document.getElementById("we");
   let weAddButtonOb=document.getElementById("weAddButton");

   weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewEQField(){
    let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("placeholder","enter here")

   let eqOb=document.getElementById("eq");
   let eqAddButtonOb=document.getElementById("eqAddButton");

   eqOb.insertBefore(newNode,eqAddButtonOb);

}

function addNewSField(){
    let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("sField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("placeholder","enter here")

   let sOb=document.getElementById("s");
   let sAddButtonOb=document.getElementById("sAddButton");

   sOb.insertBefore(newNode,sAddButtonOb);


}
// generating resume ........
function generateResume(){
   //console.log("generating resume");
   let nameField = document.getElementById("nameField").value;

   let nameT1 =  document.getElementById("nameT1");

   nameT1.innerHTML=  nameField;


   document.getElementById("nameT2").innerHTML=nameField;

   //Contect 
   document.getElementById("phoneT").innerHTML = document.getElementById(
      "phoneField"
      ).value;


   //address..
   document.getElementById("addressT").innerHTML = document.getElementById('addressField').value;

   document.getElementById("instaT").innerHTML  = document.getElementById('instaField').value;

   document.getElementById("gitT").innerHTML = document.getElementById('gitField').value;

   document.getElementById("linkT").innerHTML = document.getElementById('linkField').value;

   //professional....
//objective...
   document.getElementById("objectiveT").innerHTML=document.getElementById('objectiveField').value;
   
//work expeance....
let wes = document.getElementsByClassName("weField");
let str = "";

for(let e of wes) {
   str=str+`<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML = str;



//Academic Qualification....
let eqs = document.getElementsByClassName("eqField");
let str1 = "";

for(let e of eqs) {
   str1 += `<li> ${e.value} </li>`;
}
document.getElementById("eqT").innerHTML = str1;




//skills
let ss= document.getElementsByClassName("sField");
let str2 = "";

for(let e of ss) {
   str2 = str2 +`<li> ${e.value} </li>`;
}
document.getElementById("sT").innerHTML = str2;


// for profile img...
let file=document.getElementById("imgField").files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

reader.onloadend = function () {
   document.getElementById("imgT").src = reader.result;

};



document.getElementById("resume-form").style.display='none';

document.getElementById("resume-template").style.display="block";


}



      function printResume(){
      window.print();

      }