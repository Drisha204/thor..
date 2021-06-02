var canvas=new fabric.Canvas('myCanvas');
block_width=30;
block_hight=30;
  

player_x=10;
player_y=10;
var player_object="";
function player_update()
{
 fabric.Image.fromURL("player.png",function(Img){
 player_object=Img;
 
 player_object.scaleToWidth(150);
 player_object.scaleToHeight(140);
 player_object.set({
     top:player_y,
     left:player_x
 });
 canvas.add(player_object);
 });
}
function new_image(get_image)
{
 fabric.Image.fromURL(get_image,function(Img){
 block_image=Img;
 
 block_image.scaleToWidth(block_width);
 block_image.scaleToHeight(block_hight);
 block_image.set({
     top:player_y,
     left:player_x
 });
 canvas.add(block_image);
 });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{
    console.log("p and shift");
    block_width=block_width+10;
    block_hight=block_hight+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_hight;
 
}
if(e.shiftKey==true && keyPressed=='77')
{
    console.log("m and shift");
    block_width=block_width-10;
    block_hight=block_hight-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_hight;
 
}





if(keyPressed == '38'){
    up();
    console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
        }
        if(keyPressed == '37'){
            left();
            console.log("left");
            }
            if(keyPressed == '39'){
                right();
                console.log("right");
             }
             if(keyPressed == '70'){
                new_image('ironman_face.png');
                console.log("f");
                }
                if(keyPressed == '66'){
                    new_image('ironman_body.png');
                    console.log("b");
                    }
                    if(keyPressed == '76'){
                        new_image('ironman_left_hand.png');
                        console.log("l");
                        }
                        
                    if(keyPressed == '82'){
                        new_image('ironman_right_hand.png');
                        console.log("r");
                        }
                        
                    if(keyPressed == '72'){
                        new_image('ironman_legs.png');
                        console.log("h");
                        }
                        
                        }
                        function up() {
                            if(player_y>=0)
                            {
                                player_y=player_y-block_hight;
                                console.log("x="+player_x+"y="+player_y);
                                canvas.remove(player_object);
                               player_update();
                            }
                            }    
                            function down() {
                                if(player_y<=500)
                                {
                                    player_y=player_y+block_hight;
                                    console.log("x="+player_x+"y="+player_y);
                                    canvas.remove(player_object);
                                   player_update();
                                }
                                }
                                function left() {
                                    if(player_x>0)
                                    {
                                        player_x=player_x-block_width;
                                        console.log("x="+player_x+"y="+player_y);
                                        canvas.remove(player_object);
                                       player_update();
                                    }
                                    }
                                    function right() {
                                        if(player_x<=950)
                                        {
                                            player_x=player_x+block_width;
                                            console.log("x="+player_x+"y="+player_y);
                                            canvas.remove(player_object);
                                           player_update();
                                        }
                                        }            
                    
