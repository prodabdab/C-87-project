var canvas = new fabric.Canvas('iwilldoit');

widht = 30;
height = 30;

player_x = 10;
player_y = 10;

var oblct ="";
 function player_move() {
     fabric.Image.fromURL("player.png", function (Img) {
        oblct=Img;
        oblct.scaleToWidth(140);
        oblct.scaleToHeight(150);
        oblct.set({top:player_y,left:player_x});
        canvas.add(oblct);
     });
 } 

 var AT_oblct ="";
 function AT_move(getimg) {
     fabric.Image.fromURL(getimg, function (Img) {
       AT_oblct=Img;
        AT_oblct.scaleToWidth(widht);
        AT_objlct.scaleToHeight(height);
        AT_oblct.set({top:player_y,left:player_x});
        canvas.add(AT_oblct);
     });
 }

 window.addEventListener("keydown",My_Keydown);
 function My_Keydown(e) {

    if (keypressed == '70') {
        new_Image(' spiderman_face.png ');
        console.log("f")
    }

    
    if (keypressed == '66') {
        new_Image(' hulk_head.png ');
        console.log("b")
    }

    
    if (keypressed == '76') {
        new_Image(' captain_america_left_hang.png ');
        console.log("l")
    }

    
    if (keypressed == '82') {
        new_Image(' hulk_right_hand.png ');
        console.log("r")
    }

    
    if (keypressed == '72') {
        new_Image(' ironman_body.png ');
        console.log("h")
    }

    
    if (keypressed == '80') {
        new_Image(' player.png ');
        console.log("p")
    }

       
    if (keypressed == '38') {
        up  ();
        console.log("up")
    }
 }