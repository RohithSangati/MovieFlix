window.onload=()=>{
    var hash=window.location.hash.substring(1);
    while(hash.length<3){
        hash='0'+hash;
    }
    $.get("http://localhost:3333/movies/getmovie/"+hash,(data,status)=>{
        $("#movieCardImage").attr("src","./img/myimgs/"+data.cardImage);
        $("#movieCardName").html(data.name);
        $("#movieCardDescription").html(data.description);
        $("#movieCardDescriptionFormat").html(data.category+". "+data.format);
        var date=data.theatreObjects[0].startDate.substring(0,10)
        $("#movieCardDurationLanguagestartDate").html(data.duration+". "+data.language+". "+date);
        var url="./img/myimgs/"+data.coverImage;
        $("#MoviePageBody").css({"background":"linear-gradient(to left, rgba(0,0,0, 0) 35%, rgb(12, 12, 12),rgba(0,0,0,1)),"+"url("+url+")","background-repeat":"no-repeat","background-size": "100%","z-index": "100", "height":"auto"})
        addtheatres(data.theatreObjects,"Hyderabad");
    })
}

function addtheatres(data,location){
    for(x in data){
        obj=data[x];
        var ele=document.createElement("div");
        ele.innerHTML="<div>"+obj.theatre+"</div><div>"+obj.price+"</div><div>"+location+"</div> <div style='border-radius:10px;background-color: greenyellow;padding: 15px;cursor:pointer'>Book Now!</div>"
        ele.className="col-lg-12";
        ele.style="display:flex;flex-direction: row;gap:10px;padding:30px;justify-content: space-evenly;border-top: 1px solid black;align-items: center;";
        $("#theatreRow").append(ele);
    }
}