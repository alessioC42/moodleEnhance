console.log("injected!");
window.onload = function () {
        if (window.location.href == "https://start.schulportal.hessen.de/vertretungsplan.php") {
            setTimeout(()=>{openAllEntrys();}, 500);
            setTimeout(()=>{hilightAllItems("Q1/2", "Q");}, 1000);
    }
}

function openAllEntrys() {
    var fullplanbutton = document.getElementsByClassName("btn btn-default btn-ganzerplan")[0];
    fullplanbutton.click();
}

function hilightAllItems(jahrgang, abc) {
    tables = document.getElementsByClassName("table table-hover table-condensed table-striped");

    for (let i = 1; i<3;i++){
        let table = tables[i];

        var rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            let classname = rows[i].getElementsByTagName("td")[1].innerHTML;
            console.log("gotthisfar")
            if ((classname.startsWith(jahrgang)) && classname.includes(abc)) {
                rows[i].style.backgroundColor = "grey";
            }
          } 
    }
}