function addUser()
{
    var player1_name = document.getElementById("player1_name_input").value;
    var player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player-1",player1_name);
    localStorage.setItem("player-2",player2_name);
    window.location="quiz_game_page.html";
}
