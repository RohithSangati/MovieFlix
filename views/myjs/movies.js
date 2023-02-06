window.onload=()=>{
    $(document).ready(()=>{
        $.get("http://localhost:3333/movies/getmovies",(data,status)=>{
            addMoviesTopage(data);
        })
    })    
}

function addMoviesTopage(obj){
    for(x in obj){
        data=obj[x];
        var ele=document.createElement("div");
        ele.innerHTML="<div class='single-destinations' style='display:flex;flex-direction:column;background-color:white;cursor:pointer;justify-content:center;align-items:center;border-radius:20px'><div class='thumb' onclick='show("+data.movieId+")'><img style='border-top-left-radius: 20px;border-top-right-radius:20px' src=img/myimgs/"+data.cardImage+" alt=''></div><div id='movieCardName' style='color:black;font-size:15px;font-weight: bold;padding:2px'>"+data.name+"</div><div id='movieCardSubTags' style='color:black'>"+data.language+"/"+data.category+"</div><div style='font-size:20px;border:1px solid white;width:100%;text-align:center;padding:6px;font-weight:normal;border-bottom-left-radius: 20px;border-bottom-right-radius:20px;background:linear-gradient(to right,grey,black,grey);color:white'>Book Ticket</div></div>"
        ele.className="col-lg-3 movieCard";
        ele.id=data.movieId;    
        $("#moviesBodyContainer").append(ele);
    }
}

function show(id){
    location.href="movie.html#"+id;
}
