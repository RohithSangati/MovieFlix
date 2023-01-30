$(document).ready(function(){
    $("#signupBtn").click(function(){
        var name=$("#signupName").val();;
        var mobile=$("#signupMobile").val();
        var email=$("#signupEmail").val();
        var password=$("#signupPassword").val();
        var obj={
            name:name,
            mobile:mobile,
            email:email,
            password:password,
            movieHistory:[],
        }
        postUserDataInDatabase(obj);
    })
})


function postUserDataInDatabase(obj){
    var xhttp=new XMLHttpRequest();
    xhttp.open("POST",'http://localhost:3000/users');
    xhttp.setRequestHeader("content-type","application/json");
    xhttp.send(JSON.stringify(obj));
    xhttp.onload=function(){
        alert(xhttp.responseText);
    }
}



$(document).ready(()=>{
    $("#loginBtn").click=()=>{
        var email=$("#loginEmail").val();
        var password=$("loginPassword").val();
        if(exists(email,password)){
            
        }
    }
})