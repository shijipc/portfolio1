






// const form=document.querySelector('form');

    
        const name=document.getElementById('name');
         const email=document.getElementById('email');
         const number=document.getElementById('number');
         const subject=document.getElementById('subject');
         const message=document.getElementById('message');
         //const form=document.getElementById('form');


         form.addEventListener('submit',(e)=>{

            var emailcheck= /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

            if(name.value ==='' ||name.value == null)
                {
                  e.preventDefault();
                  name_error.innerHTML= "Name is required";
                }
            
                if(!email.value.match(emailcheck))
                    {
                        e.preventDefault();
                        email_error.innerHTML= "valid email is required";
                    }

            
       } )
      

            
        //  })




        //  console.log(form);

//             function sendEmail(){
//                 const bodymessage="Name: $(name.value)<br>Email: $(email.value)<br>Number:$(number.value)<br>Subject:$(subject.value)<br>Message: $(message.value)";
//                 console.log("function call");
//                 // console.log(bodymessage);
//                 Email.send({
//                 Host : "smtp.elasticemail.com",
//                 Username : "shijijerin09@gmail.com",
//                 Password : "306F3240FB3FFFB30C6D41D9CAA201C9E678",
//                 To : 'shijijerin09@gmail.com',
//                 From : "shijijerin09@gmail.com",
//                 Subject : subject.value,
//                 Body : bodymessage
//               }).then(
//                 message => {
//                     if(message=="ok"){
//                         Swal.fire({
//                             title: "Success!",
//                             text: "Message sent successfully",
//                             icon: "success"
//                           });
//                     }
//                 }
//                );
//             }

//             form.addEventListener("submit",(e)=>{
//                 e.preventDefault();
//                 sendEmail();
//             });
      




function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("number").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };
    // emailjs.send("service_xngtgyc","template_z61zc0y",params).then(function(res){
    //     alert("success" +res.status);
    // })

    const serviceID="service_xngtgyc";
    const templateID="template_z61zc0y";

    emailjs
    .send(serviceID,templateID,params)
    .then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("number").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully");
})
.catch((err) => console.log(err))
}

