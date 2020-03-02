// Generating $count blank lines to insert into page
function getBlankLines(count=0)
{
    return "<br/>".repeat(count + 1);
}

// Generating random integer
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

// Generating random string for id
function MakeId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

// 1. document.write. Task with URL and strings
var firstTitle = document.createElement("h1");
firstTitle.innerText = "1. document.write, URL, strings";
document.body.append(firstTitle);

// String and its data to body
var userInput = prompt("Enter any line:", "Any Line");
document.write(userInput); // Bad way: DOM-based XSS
document.write(getBlankLines());
document.write("Words Count: ", userInput.split(" ").length, ';\t',
                 "Letters Coount: ", userInput.split(" ").join("").length);
document.write(getBlankLines(1));

// Task with URL
document.write("URL: ", document.URL, "<br/>");
document.write("Protocol (Scheme): ", document.URL.split(":")[0], "<br/>");
var tmp = document.URL.split("/");
tmp = tmp[tmp.length - 1].split(".");
if (tmp.length >= 2)
{
    document.write("File name: ", tmp[tmp.length - 2],
                   ";\tFile extention: ", tmp[tmp.length - 1].split("?")[0]);
}
else
{
    document.write("File name: ", tmp[tmp.length - 1], ";\tFile extention: Unknown");
}
document.write(getBlankLines(1));

// Task with parameters
if (document.URL.indexOf("?") == -1)
{
    var warningElem = document.createElement("p");
    warningElem.style = "color:#FF0000";
    warningElem.innerText = "No paramenters in URL were occured!";
    document.body.append(warningElem);
}
else
{
    var paramArray = document.URL.substr(document.URL.indexOf("?") + 1).split("&");
    var paramDict = {};
    paramArray.forEach(element => {
        tmp = element.split("=");
        paramDict[tmp[0]] = tmp[1];
    });
    var strParamDict = JSON.stringify(paramDict);
    document.write(strParamDict);
}
document.write(getBlankLines(2));

// -===========================================================================================-

// 2 Documents Tags
var secondTitle = document.createElement("h1");
secondTitle.innerText = "2. HTML Tags with JS";
document.body.append(secondTitle);

// Creating anchors
var anchorsCount = 0;
while (true)
{
    var randCount = String(randomInteger(1, 10));
    var anchorsCount = Number(prompt("Number of anchors from 1 to 10:", randCount));
    if (isNaN(anchorsCount) || anchorsCount < 1 || anchorsCount > 10)
    {
        alert("Wrong!");
    }
    else
    {
        break;
    }
    
}
document.write("Anchors count: ", anchorsCount, "<br/>");
for (var i = 0; i < anchorsCount; i++)
{
    var anotherAnchor = document.createElement("a");
    anotherAnchor.id = MakeId(6);
    anotherAnchor.innerText = "Anchor №" + String(i + 1);
    document.body.append(anotherAnchor);
    document.write("<br/>");
}
document.write("<br/>");

// Creating links
var linksCount = 0;
while (true)
{
    var randCount = String(randomInteger(1, 10));
    linksCount = prompt("Enter count of links from 1 to 10:", randCount);
    if (isNaN(linksCount) || linksCount < 1 || linksCount > 10)
    {
        alert("Wrong!");
    }
    else
    {
        break;
    }
}
document.write("Links count: ", linksCount, "<br/>");
for (var i = 0; i < linksCount; i++)
{
    var anotherLink = document.createElement("link");
    anotherLink.id = MakeId(6);
    anotherLink.title = "Link to nowhere №" + String(i + 1);
    anotherLink.href = document.URL.split("?")[0] + "/" + anotherLink.id;
    document.body.append(anotherLink);
}
document.write(getBlankLines(1));

// Creating n copies of image pic.png
var picsCount = 0;
while (true)
{
    var randCount = String(randomInteger(1, 10));
    picsCount = prompt("Enter count of image copies from 1 to 10:", randCount);
    if (isNaN(picsCount) || picsCount < 1 || picsCount > 10)
    {
        alert("Wrong!");
    }
    else
    {
        break;
    }
}
document.write("Images copies count: ", picsCount, "<br/>");
for (var i = 0; i < picsCount; i++)
{
    var anotherPic = document.createElement("img");
    anotherPic.src = "pic.png";
    anotherPic.id = MakeId(10) + Number(i + 1);
    anotherPic.style.height = String(randomInteger(100, 300))+ "px";
    anotherPic.style.width = String(randomInteger(100, 300))+ "px"
    document.body.append(anotherPic);
}
document.write(getBlankLines(1));

// Document tags indo
document.write("Anchors count (by JS): ", document.getElementsByTagName("a").length, "<br/>");
document.write("Links count (by JS): ", document.getElementsByTagName("link").length, "<br/>");
document.write("Firts anchor innerHTML:", "<br/>");
document.write(document.getElementsByTagName("a")[0].innerHTML, "<br/>");
var images = document.getElementsByTagName("img");
document.write("Images count (by JS): ", images.length, "<br/>");
document.write("First image width: ", images[0].style.width, "<br/>");

var maxWidth = -1;
var heightSum = 0;
for (var i = 0; i < images.length; i++)
{
    tmp = Number(images[i].style.width.split("px")[0]);
    if (tmp > maxWidth)
    {
        maxWidth = tmp;
    }
    heightSum += Number(images[i].style.height.split("px")[0]);
}
document.write("Max width: ", maxWidth, "<br/>");
document.write("Heights sum: ", heightSum, getBlankLines(1));

// -==========================================================================================-
