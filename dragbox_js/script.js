let numbers=document.querySelectorAll(".box1");
let numbers2=document.querySelectorAll(".box2");

let id;

numbers.forEach((item)=>
{
    item.ondragstart=function()
    {
        id=this.id;
    }
});

numbers2.forEach((item)=>
{
    (item.ondragover=function(event)
    {
        event.preventDefault()
    }),
    (item.ondrop=function()
{
    let numbers=document.getElementById(id);
    if(id>=1 && id<=4 && this.id=="a1")
    {
        this.append(numbers);
    }
    else if (id>=5 && id<=8 && this.id=="a2")
    {
     this.append(numbers);   
    }
    
    else if (id>=9 && id<=12 && this.id=="a3")
    {
        this.append(numbers);
    }
    else
    {
    alert("use it in a correct way!!!")
    }
});
   
});


