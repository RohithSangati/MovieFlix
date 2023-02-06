$(document).ready(()=>{
    $("#sendQueryButton").click(()=>{
        name=$("#queryName").val();
        email=$("#queryEmail").val();
        subject=$("#querySubject").val();
        message=$("#queryMessage").val();
        var obj={
            name:name,
            email:email,
            subject:subject,
            message:message
        }
        sendToAdmin(obj);
    })
})

function sendToAdmin(obj){
    $.post("http://localhost:3333/queries/addqueries",obj,(xhr,status,responseText)=>{
        alert(responseText.responseText);
        window.location.href="contact.html"
    })
}