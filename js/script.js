let canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var inkColor = "blue";
var imgSrc = "pages/page (0).jpg";
var dfont = "22px myfont";
var mydata =
    "What ever you write above will automatically will abe converted over here for freee\n for example if a user want to make as assignment on deep learning then simply he needs to paste the content at the box\n\n\n\n\n\nDeep learning is based on the branch of machine learning, which is a subset of artificial intelligence. Since neural networks imitate the human brain and so deep learning will do. In deep learning, nothing is programmed explicitly. Basically, it is a machine learning class that makes use of numerous nonlinear processing units so as to perform feature extraction as well as transformation. The output from each preceding layer is taken as input by each one of the successive layers\n\nDeep learning models are capable enough to focus on the accurate features themselves by requiring a little guidance from the programmer and are very helpful in solving out the problem of dimensionality.Deep learning algorithms are used, especially when we have a huge no of inputs and outputs.\n\nSince deep learning has been evolved by the machine learning, which itself is a subset of artificial intelligence and as the idea behind the artificial intelligence is to mimic the human behavior, so same is ";
var maxWidth = 720;
var lineHeight = 24;
var x = 28;
var y = 22 + 22;
var fontindex = 0;
var totalfontnum = 8;
window.onload = draw();

let text_input = document.getElementById("inputText");
text_input.addEventListener("input", () => {
    //   console.log(text_input.value);
    mydata = text_input.value;
    redraw();
});

function draw() {
    imageObj = loadimg();
    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
        defaultFontload();
    };
}

function redraw() {
    imageObj = loadimg();
    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
        drawText(ctx, mydata, x, y, maxWidth, lineHeight);
    };
}

function loadimg() {
    var imageObj = new Image();
    imageObj.src = imgSrc;
    return imageObj;
}

function drawText(context, text, x, y, line_width, line_height) {
    var line = "";
    var paragraphs = text.split("\n");
    for (var i = 0; i < paragraphs.length; i++) {
        var words = paragraphs[i].split(" ");
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + " ";
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > line_width && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + " ";
                y += line_height;
            } else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
        y += line_height;
        line = "";
    }
}

async function loadFonts() {
    const font = new FontFace(
        "myfont",
        "url('fonts/font (" + fontindex + ").ttf')"
    );
    // wait for font to be loaded
    await font.load();
    // add font to document
    document.fonts.add(font);
    // enable font with CSS class
    // document.body.classList.add("fonts-loaded");
    ctx.font = dfont;
    ctx.fillStyle = inkColor;
    //   drawText(ctx, mydata, x, y, maxWidth, lineHeight);
    redraw();

    //   console.log(i);
}
async function defaultFontload() {
    const font = new FontFace("myfont", "url('fonts/font (0).ttf')");
    // wait for font to be loaded
    await font.load();
    // add font to document
    document.fonts.add(font);
    // enable font with CSS class
    // document.body.classList.add("fonts-loaded");
    ctx.font = dfont;
    ctx.fillStyle = inkColor;
    drawText(ctx, mydata, x, y, maxWidth, lineHeight);

    // console.log("default font loaded");
}
