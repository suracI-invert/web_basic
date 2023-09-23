sel = null;

function avoid(r) {
    if (sel != null) {
        sel.className = "portalModTd";
    }
    sel = r;
    sel.className = "portalModTdSelected";
    document.getElementById("content").innerHTML = sel.innerHTML;
}      

function tdMouseOver(r) {
    if (r != sel) {
        r.className = "portalModTdHover";
    }
}

function tdMouseOut(r) {
    if (r != sel) {
        r.className = "portalModTd";
    }
}