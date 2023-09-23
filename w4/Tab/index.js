sel = null; //menu duoc chon

function mouseOver(r) {
    if (r != sel) r.className = "thucdon-dechuot";			
}

function mouseOut(r) {
    if (r != sel) r.className = "thucdon-binhthuong";			
}

function clicked(r) {
    if (sel != null)  
    sel.className = "thucdon-binhthuong";
    
    sel = r;
    sel.className = "thucdon-duocchon";

    frm = document.getElementById("frame");
    if (sel.id == "m1") {
        frm.src = "https://vnexpress.net";
    } else if (sel.id == "m2") {
        frm.src = "https://dantri.com.vn/";
    } else if (sel.id == "m3") {
        frm.src = "https://www.voanews.com/";
    } else if (sel.id == "m4") {
        frm.src = "https://zingnews.vn/";
    }
}
