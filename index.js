const textbox=document.getElementById("text");
const toferan=document.getElementById("ctof");
const tocel=document.getElementById("ftoc");
const result=document.getElementById("result");
const btn=document.getElementById("btn");
let temp;

function convert()
{
  if(toferan.checked)
  {
    temp=Number(textbox.value);
    temp=temp*9 / 5 + 32;
    result.textContent=temp.toFixed(1)+"℉";

  }
  else if(tocel.checked)
  {
    temp=Number(textbox.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+"℃";
  }
  else{
    result.textContent="select a unit";
  }
}
btn.addEventListener("click",(e)=>{
    convert();
    e.preventDefault();
})
