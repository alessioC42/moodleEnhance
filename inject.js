window.onload = function () {
    const PATH = window.location.pathname;
    if (PATH != "/my/") {
        var headline = document.getElementsByClassName("d-md-inline")[0];
        var navbar = document.getElementById("page-navbar");

        var li = document.createElement("li");
        li.appendChild(navbar);
        var c = document.getElementsByClassName("d-md-inline d-none ml-auto")[0];
        document.getElementsByClassName("navbar-nav mr-auto navbar-nav ml-3 ml-md-0")[0].insertBefore(li, c);

        headline.style.color = "white";
        headline.innerHTML = "<h3><b>"+document.getElementsByClassName("page-header-headings")[0].getElementsByTagName("h1")[0].innerHTML+"</b></h3>";
    }
    document.getElementById("page-header").remove();
    document.getElementById("page").style.marginTop = 0;
    document.getElementsByClassName("middle-row")[0].remove();
    var list_group = document.getElementsByClassName("list-group")[0];
    list_group.style.marginTop = "50px";

    list_group_items = list_group.getElementsByTagName("li");
    toremove = [];
    for (let i = 0; i < list_group_items.length; i++) {
        if (list_group_items[i].getElementsByClassName("fa-folder-o").length >= 1) {
            toremove.push(list_group_items[i]);
        }   else if (list_group_items[i].getElementsByClassName("fa-toggle-on").length >= 1) {
            toremove.push(list_group_items[i]);
        }   else if (list_group_items[i].getElementsByClassName("fa-toggle-off").length >= 1) {
            toremove.push(list_group_items[i]);
        }   else if (list_group_items[i].getElementsByClassName("fa-database").length >= 1) {
            toremove.push(list_group_items[i]);
        }
    }
    for (let i = 0; i < toremove.length; i++) {
        toremove[i].remove()
    }
}
