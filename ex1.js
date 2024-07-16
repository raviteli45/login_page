document.getElementById("b1").onclick = function()
{
    let username = document.getElementById("t1").value;
    console.log(username);
    document.getElementById("a1").innerHTML = "Hello " + username;
}