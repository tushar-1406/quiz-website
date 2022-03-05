let container = document.getElementById('container');
let question = document.getElementById('question');
let options = document.getElementById('options');
let submit = document.getElementById('submit');
let next = document.getElementById('next');
let first= document.getElementById('first');


let questions=[
    {
        question : 'what is the full form of js?',
        options: ['javascript', 'javascripting', 'json', 'none' ],
        rightanswer: 'javascript'

    },
    {
        question : 'c++ is programming language?',
        options: ['yes' ,'no' ],
        rightanswer: 'yes'
    },
    {
        question: 'which colour suits you ?',
        options:['black','white','both' , 'pink'],
        rightanswer:'both'
    },
    {
        question: 'cq is known as ?',
        options:['code quotient','coding question','none'],
        rightans:'code quotient'
    },
       

    {
        question: 'cq is known as ?',
        options:['code quotient','coding question','none'],
        rightans:'code quotient'
    },
       
]
 
var index=0;
function create()
{ 
   var heading=document.createElement("heading");
   heading.innerHTML=questions[index].question;
   first.appendChild(heading);
   for( var i=0;i<questions[index].options.length;i++)
   {
       var opt=document.createElement("input");
       opt.setAttribute("type","radio");
       opt.setAttribute("name","option");
       var label=document.createElement("label");
       label.innerText=questions[index].options[i];
    
      var list = document.createElement("li");
      
      
      list.appendChild(opt);
      list.appendChild(label);
       
     options.appendChild(list);
   }
}
create();