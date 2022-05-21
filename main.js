let btn_first=document.getElementById("btn_first");
let input=document.querySelectorAll(".input");
let btn_second=document.getElementById("btn_second");
let no_data=document.getElementById("no_data");
let add_tasks=document.getElementById("add_tasks");
let card=document.getElementById("card");
let fi=document.getElementsByClassName("fi");
let empty_name=document.getElementsByClassName("empty_name");
let f_table=document.getElementsByClassName("f_table");

let show_form=()=>{
card.style.display="block";
f_table[0].style.display="none";
}


btn_first.addEventListener("click",show_form )


let persons={
name_person:input[0].value,
address:input[1].value,
phone:input[2].value


};



 let store_data=()=>{
    if(input[0].value.trim()==""|| input[1].value.trim()==""|| input[2].value.trim()==""){
        if((input[0].value.trim()=="")){
            empty_name[0].style.display="block";


        }
      else if((input[1].value.trim()=="")){
            empty_name[1].style.display="block";


        }
       else if((input[2].value.trim()=="")){
            empty_name[2].style.display="block";


        }
        else{}

       
    }
    else{
        no_data.style.display="none";
     
        add_tasks.innerHTML +=`<div class="alert alert-danger" role="alert">
        your name is ${input[0].value} <br> your address is ${input[1].value} <br>
        your phone is ${input[2].value} 
       
        <i  class="remove fi fi-rr-cross"></i>
      </div>`
      input[0].value="";
      input[1].value="";
      input[2].value="";

    }

     }






 

btn_second.addEventListener("click",store_data);


let close_fun=()=>{
empty_name[0].style.display="none";

}
let close_fun1=()=>{
    empty_name[1].style.display="none";
    
    }

    let close_fun2=()=>{
        empty_name[2].style.display="none";
        
        }
fi[0].addEventListener("click",close_fun);
fi[1].addEventListener("click",close_fun1);
fi[2].addEventListener("click",close_fun2);

add_tasks.addEventListener("click",function(e){
    
    
if(e.target.classList.contains("remove")){

    e.target.parentElement.remove();
    if(add_tasks.childElementCount==0){
        no_data.style.display="block";

    }
}


})