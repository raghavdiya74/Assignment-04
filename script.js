$(document).ready(function(){


   $("#togglePassword").click(function(){
    let pass = $("#password");
    
    if(pass.attr("type") === "password"){
        pass.attr("type","text");
        $(this).text("Hide");
    }else{
        pass.attr("type","password");
        $(this).text("Show");
    }
   });


   $("#regForm").submit(function(e){
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let password = $("#password").val().trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let passPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


    if(name === "" || email === "" || phone === "" || password === "" ){
        e.preventDefault();

        $("#msgBox")
        .removeClass("success")
        .addClass("error")
        .text("All fields are required")
        .show();

        return;
    }


    if(!emailPattern.test(email)){
        e.preventDefault();

        $("#msgBox")
        .removeClass("success")
        .addClass("error")
        .text("Enter valid email")
        .show();

        return;
    }


    if(!phonePattern.test(phone)){
        e.preventDefault();

        $("#msgBox")
        .removeClass("success")
        .addClass("error")
        .text("Phone must be 10 digits")
        .show();

        return;
    }


    if(!passPattern.test(password)){
        e.preventDefault();

        $("#msgBox")
        .removeClass("success")
        .addClass("error")
        .text("Password must contain uppercase, lowercase and number")
        .show();

        return;
    }

    
    e.preventDefault();

    $("#msgBox")
    .removeClass("error")
    .addClass("success")
    .text("Form submitted successfully!")
    .show();

   });

});