function createRow(row_num, cols)
{
    let row = document.createElement("tr");
    row.id = "row_" + String(row_num);

    for (let i = 0; i < cols; i++)
    {
        let col = document.createElement("td");
        col.id = ["col", String(row_num), String(i + 1)].join("_");
        //col.style.border = "1px solid #000";
        col.style = "border: 1px solid #000; width: 60px; height = 30px;"
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