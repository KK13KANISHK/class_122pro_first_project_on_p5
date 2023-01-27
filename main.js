function preload()
{

}

function setup()
{
    canvas = createCanvas(1515, 600);
    canvas.position(1, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 1533, 800);
    tint(tint_color);
    
    circle(30, 30, 30);
    circle(1480, 30, 30);
    circle(1480, 570, 30);
    circle(30, 570, 30);

    rect(15, 45, 30, 510);
    rect(1468, 45, 30, 510);
    rect(45, 19, 1419, 30);
    rect(45, 550, 1419, 30);


}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}