window.onload=()=>{
    $(document).ready(()=>{
        $.get("http://localhost:3333/users/getusers",(data,status)=>{
            addUsersToAdminPage(data);
        })
        $.get("http://localhost:3333/queries/getqueries",(data,status)=>{
            addQueriesToAdmin(data);
        })
    })
}

function addUsersToAdminPage(obj){
    var x=1;
    for(key in obj){
        var ele=document.createElement('tr');
        ele.innerHTML=`<td>${x}</td><td>${obj[key].name}</td><td>${obj[key].mobile}</td><td>${obj[key].email}</td>`;
        x++;
        $("#userdata").append(ele);
    }
}


function addQueriesToAdmin(obj){
    for(k in obj){
        var ele=document.createElement('tr');
        ele.innerHTML=`<td>${obj[k].name}</td><td>${obj[k].email}</td><td>${obj[k].subject}</td><td>${obj[k].message}</td>`;
        $("#enquiries").append(ele);
    }      
}

function displayUsers(){
    $("#usersData").css("display","table")
    $("#addMoviesData").css("display","none")
    $("#addTheatresData").css("display","none")
    $("#enquiries").css("display","none")
}


function displayMovies(){
    $("#usersData").css("display","none")
    $("#addMoviesData").css("display","block")
    $("#addTheatresData").css("display","none")
    $("#enquiries").css("display","none")
}

function displayTheatres(){
    $("#usersData").css("display","none")
    $("#addMoviesData").css("display","none")
    $("#addTheatresData").css("display","block")
    $("#enquiries").css("display","none")
}

function displayqueries(){
    $("#usersData").css("display","none")
    $("#addMoviesData").css("display","none")
    $("#addTheatresData").css("display","none")
    $("#enquiries").css("display","table")
}

var theatreArr=[]
var movieArr=[]

$(document).ready(()=>{
    $("#theatreSaveAndAddBtn").click(()=>{
        var obj={
            theatre:$("#addTheatreSelect").val(),
            price:$("#theatrePrice").val(),
            startDate:$("#theatreStartDate").val(),
            endDate:$("#theatreEndDate").val()
        }
        theatreArr.push(obj);
        $("#addTheatreSelect").val("null1"),
        $("#theatrePrice").val(null),
        $("#theatreStartDate").val(null),
        $("#theatreEndDate").val(null)
    })
    $("#addMovieBtn").click(()=>{
        var theatreObjects=[]
        for(i in theatreArr){
            theatreObjects.push(theatreArr[i]);
        }
        var obj={
            movieId:$("#addMovieId").val(),
            name:$("#addMovieName").val(),
            cardImage:$("#addMovieImUrl").val(),
            coverImage:$("#addMovieCoverImUrl").val(),
            description:$("#addMovieDescription").val(),
            category:$("#addMovieCategory").val(),
            format:$("#addMovieFormat").val(),
            duration:$("#addMovieDuration").val(),
            language:$("#addMovieLang").val(),
            bookings:0,
            theatreObjects:theatreObjects
        }
        $.post("http://localhost:3333/movies/addmovie",obj,(xhr,status,responseText)=>{
            alert(responseText.responseText);
            window.location.href="admin.html";
        })
    })
})



$(document).ready(()=>{
    $("#MovieSaveAndAddBtn").click(()=>{
        var obj={
            movie:$("#addMovieSelect").val(),
            price:$("#moviePrice").val(),
            startDate:$("#movieStartDate").val(),
            endDate:$("#movieEndDate").val()
        }
        movieArr.push(obj);
        $("#addMovieSelect").val("null")
        $("#moviePrice").val("null");
        $("#movieStartDate").val("null");
        $("#movieEndDate").val("null")
    })
    $("#addTheatreBtn").click(()=>{
        var movieObjects=[]
        for(x in movieArr){
            movieObjects.push(movieArr[x])
        }
        var obj={
            theatreId:$("#addTheatreId").val(),
            name:$("#addTheatreName").val(),
            theatreImage:$("#addTheatreImUrl").val(),
            location:$("#addTheatreLocation").val(),
            bookings:0,
            movieObjects:movieObjects,
        }
        $.post("http://localhost:3333/theatres/addtheatre",obj,(xhr,status,responseText)=>{
            alert(responseText.responseText);
            window.location.href="admin.html";
        })
    })
})