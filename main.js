function login() {
   
        player_1name =document.getElementById("player_1").value;
        player_2name =document.getElementById("player_2").value;
        
        localStorage.setItem("name1",player_1);
        localStorage.setItem("name2",player_2);
        
       window.location=("game_index.html")
        }
