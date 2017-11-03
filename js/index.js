$(document).ready(function(){
        var player = {
            char : $(".warrior"),
            x : 200,
            y : 200
        };
        var monster = {
            monst : $(".monster"),
            x : 100,
            y : 200
        };
        var catches = 0;
        var K = {};

        $(document).on("keydown keyup", function(e){
        var kN = e.which;

        if ( kN > 36 || kN < 41 ){
            K[kN] = e.type === "keydown";
        }
        });

        function gameBox(){
            if(K[37]) player.x -= 2;
            if(K[39]) player.x += 2;
            if(K[40]) player.y += 2;
            if(K[38]) player.y -= 2;

            player.char.css({transform:"translate3D("+ player.x +"px, "+ player.y +"px, 0)"});
            monster.monst.css({transform:"translate3D(" + monster.x + "px, " + monster.y + "px, 0)"});

            var charY = player.char.position().top;
            var charX = player.char.position().left;

            var monstY = monster.monst.position().top;
            var monstX = monster.monst.position().left;

            var mapWidthLeft = 730,
                mapWidthRight = 1160,
                mapHeightTop = 162,
                mapHeightBottom = 554;

            var distanceY = charY - monstY,
                distanceX = charX - monstX,
                touchDistance = 40;

            if (charX < mapWidthLeft){
                player.x = player.x + 2;
            }
            if (charX > mapWidthRight){
                player.x = player.x - 2;
            }
            if (charY < mapHeightTop){
                player.y = player.y + 2;
            }
            if (charY > mapHeightBottom){
                player.y = player.y - 2;
            }
            if (Math.sqrt(distanceY * distanceY + distanceX * distanceX) < touchDistance ){
                monster.x = 32 + (Math.random() * (510 - 100));
                monster.y = 32 + (Math.random() * (480 - 100));
                document.getElementById("touches").innerHTML = catches += 1;
            } else {
            }
          }

          (function engine() {
          gameBox();
          window.requestAnimationFrame(engine);
          }());
});
