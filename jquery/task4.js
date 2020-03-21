function first()
{
    $("#id1").load("https://inxaoc.github.io/example/ajax-1.html");
}

function getList(depth, json)
{
    if (depth >= 10)
    {
        return "ERROR";
    }

    //let tab = "\t".repeat(depth);
    let result = "<ul>";
    for (let key in json)
    {
        let val = json[key];
        if(typeof val === "object")
        {
            result += "<li>" + key;
            let ret = getList(depth + 1, val);
            if (ret == "ERROR")
            {
                return "ERROR";
            }
            result += ret + "</li>";
        }
        else
        {
            result += "<li>" + key + ": " + val + "</li>"
        }
    }
    result += "</ul>";
    return result;
}

function parseJson(resp, status, xhr)
{
    let json = JSON.parse(resp);
    let lst = getList(0, json);
    if (lst == "ERROR")
    {
        lst = "Limit of depth";
    }
    $("#id2").html(lst);
}

function second()
{
    $("#id2").load("https://inxaoc.github.io/example/ajax.json?param1=111", parseJson);
}