let string="";
 let buttons=document.querySelectorAll("button");
 for(let button of buttons )
 {
    button.addEventListener("click",()=>{
        let val=button.innerText;
        if(val=='=')
        {
            string=eval(string);

            document.querySelector(".display").innerText=string;
            string=string+"";
        }
      else if(val=='AC')
      {
        string="";
        document.querySelector(".display").innerText=string;

      }
      else if(val=='X')
      {
        
         string=string.substring(0,(string.length)-1);
        console.log(string);
        document.querySelector(".display").innerText=string;
      }
      
      else{
      string=string+val;
      console.log(string);
      document.querySelector(".display").innerText=string;
        }
    })
 }