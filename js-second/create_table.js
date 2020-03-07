function saveInput(btnID)
{
    let txt = document.getElementById("txt" + btnID.split("btn")[1]);
    let div = document.getElementById("div" + btnID.split("btn")[1]);
    let col = document.getElementById("col" + btnID.split("btn")[1]);
    col.innerText = txt.value;
    div.style.display = "none";
}

function createRow(row_num, cols)
{
    let row = document.createElement("tr");
    row.id = "row_" + String(row_num);

    for (let i = 0; i < cols; i++)
    {
        //alert(1);
        let colID = ["col", String(row_num), String(i + 1)].join("_");
        let txtID = ["txt", String(row_num), String(i + 1)].join("_");
        let divID = ["div", String(row_num), String(i + 1)].join("_");
        let btnID = ["btn", String(row_num), String(i + 1)].join("_");
        let col = document.createElement("td");
        let div = document.createElement("div");
        //alert(2);
        let txt = document.createElement("textarea");
        txt.style.resize = "none";
        txt.id = txtID;
        //alert(3);
        let btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = "ok";
        btn.id = btnID;
        btn.addEventListener("click", function(event) {
            saveInput(this.id);
        });
    
        //alert(4);
        div.appendChild(txt);
        div.innerHTML += "<br/>";
        div.id = divID;
        div.appendChild(btn);
        //alert(5);
        col.appendChild(div);
        col.id = colID;
        col.style = "border: 1px solid #000; width: 60px; height = 30px;"
        //alert(6);

        row.appendChild(col);
    }

    return row;
}

function createTable(rows, cols)
{
    let table = document.createElement("table");
    table.id = "main_table";
    table.style.border = "1px solid #000";
    table.style.height = String(30 * (cols + 1)) + "px";
    for (let i = 0; i < rows; i++)
    {
        let row = createRow(i + 1, cols);
        table.appendChild(row);
    }
    
    return table;
}

let script = document.getElementById("creation_script");
document.body.removeChild(script);

let creation_div = document.getElementById("create_div");
creation_div.style = "display: none;";

let rows = Number(document.getElementById("i_rows").value);
let cols = Number(document.getElementById("i_cols").value);

let table = createTable(rows, cols);
document.getElementById("main_form").appendChild(table);