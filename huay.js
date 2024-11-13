alert("สวัสดีครับ")
var n = prompt("ใส่เลขที่ต้องการมา")
rn = Math.floor(Math.random() * 10)
document.getElementById("your choosen").innerHTML = n
document.getElementById("result").innerHTML = rn    
if(rn == n)
{
document.getElementById("Booleanresult").innerHTML = "ถูกต้อง"
}
    else
{
    document.getElementById("Booleanresult").innerHTML = "ผิดด"
    document.getElementById("skibidi").innerHTML ="<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/PGZ7QiKdumo?si=pKefPz5KzzRFk5Nw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
}
