function setActive(mainid, id1, id2, id3, mainDiv)
{
    let a = document.getElementById(mainid);
    let b = document.getElementById(id1);
    let c = document.getElementById(id2);
    let d = document.getElementById(id3);

    let a1 = document.getElementsByClassName(mainDiv);

    a.classList.add("active");
    // if (b.classList.contains("active")) {
        b.classList.remove("active");
    // }
    // if (c.classList.contains("active")) {
        c.classList.remove("active");
    // }
    // if (d.classList.contains("active")) {
        d.classList.remove("active");
    // }
        a1.scrollIntoView();

}

function slideActive(mainid, id1, id2, id3, id4, mainDiv, div1, div2, div3, div4) {
    let a = document.getElementById(mainid);
    let b = document.getElementById(id1);
    let c = document.getElementById(id2);
    let d = document.getElementById(id3);
    let e = document.getElementById(id4);

    let a1 = document.getElementsByClassName(mainDiv);
    let b1 = document.getElementsByClassName(div1);
    let c1 = document.getElementsByClassName(div2);
    let d1 = document.getElementsByClassName(div3);
    let e1 = document.getElementsByClassName(div4);

    a.classList.add("active-dot");
    $(a1).css('display', 'block');
    if (b.classList.contains("active-dot")) {
        b.classList.remove("active-dot");
        $(b1).css('display', 'none');
    }
    if (c.classList.contains("active-dot")) {
        c.classList.remove("active-dot");
        $(c1).css('display', 'none');
    }
    if (d.classList.contains("active-dot")) {
        d.classList.remove("active-dot");
        $(d1).css('display', 'none');

    }
    if (e.classList.contains("active-dot")) {
        e.classList.remove("active-dot");
        $(e1).css('display', 'none');

    }
}