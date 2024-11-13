var round = prompt("ใส่จำนวนรอบ")
var yourchoosen = prompt("เลขที่คุณอยากเล่น")
for(var cr = 1 ; cr <= round ; cr++)
{
   var rn = Math.floor(Math.random() * 10)
   console.log(rn)
   if(yourchoosen == rn)
   {
    console.log("r")
   }
   else
   {
    console.log("wr")
   }
   

}
