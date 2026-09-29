let a="";
let b="";
let c=0;
let op="";
const screen=document.querySelector('#visual');
const but=document.querySelectorAll('button');
const all=document.querySelector('#clear');
but.forEach(button =>{
button.addEventListener('click',function()
{
  let input=this.innerText;
   if(input==='back')
  {
    if(b!=="")
    {
      b=b.slice(0,-1);
    }
    else if(op!=="")
    {
      op="";
    }
   else if(a!=="")
    {
      a=a.slice(0,-1);
    }
  }
  else if(input=== '=')
  {
  
    switch(op)
    {
      case '+':
      c=Number(a)+Number(b);
      break;

      case '-':
      c=a-b;
      break;
 
     case '/':
      c=a/b;
      break;

    case 'x':
      c=a*b;
      break;
    }
  }
else if(input==='+'||input==='-'||input==='x'||input==='/')
  {
    if(a!==""){
    op=input;
    }
  }
  else if(op==="")
  {
    a+=input;
  }
  else 
  {  
    b+=input;
  }
if (input === '=')
{
  screen.innerText=c;
  a=c.toString();
b="";
op="";
}
else 
{
  screen.innerText=a+op+b;
  }
if (input === 'AC')
{
  screen.innerText=0;
  a="";
  b="";
  op="";
  }
});
});
