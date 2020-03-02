function getBlankLines(count=0)
{
    return "<br/>".repeat(count + 1);
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
    document.write(getBlankLines(1));
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
    document.write(getBlankLines(1));
}

// -===========================================================================================-

