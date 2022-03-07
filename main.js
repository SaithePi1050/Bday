var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

blockimage = "";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img)
    {
        blockimage = Img;
        blockimage.scaleToWidth(900);
        blockimage.scaleToHeight(600);
        blockimage.set({
            top: 0,
            left: 0
        });
        canvas.add(blockimage); 
    });
}

function play()
{
	x.play();
}
