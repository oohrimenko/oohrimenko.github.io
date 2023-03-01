function init() {
    
    const menu_elements = document.getElementsByClassName("menuBtn");
    for (var i = 0; i < menu_elements.length; i ++) {
        menu_elements[i].addEventListener('click', menuBtnClick);
    }
    
    const area_elements = document.getElementsByClassName("areaBtnAct");
    for (var i = 0; i < area_elements.length; i ++) {
        area_elements[i].style.textDecoration = "underline 0.5px";
        area_elements[i].innerHTML = area[area_elements[i].id].replace(' ', '<br>');
        area_elements[i].addEventListener('click', areaBtnClick);
    }
    
    print_all_papers(papers, 'all');
    
    openTab(window.location.hash.replace('#', ''));
}



function openTab(tabName) {
    closeAllAreas();
    
    var i;
    var x = document.getElementsByClassName("texttab");
    // Reset sections
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    tabClName = highlightMenuBtn(tabName);
    
    // Menu option not found; set to Home by default
    if (tabClName == "") {
        highlightMenuBtn("Home");
        tabClName = "Home";
    }
    
    // Open selected section
    document.getElementById(tabClName).style.display = "block";
    
    
    if (tabClName != "Home") {
        history.replaceState("", "", location.pathname +"#"+ tabName)
    } else {
        history.replaceState("", "", location.pathname)
    }
}


function menuBtnClick(){
    openTab(this.innerHTML);
}



function highlightMenuBtn(name) {
    var x = document.getElementsByClassName("menuBtn");
    tabClName = "";
    
    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.toLowerCase() == name.toLowerCase()) {
            x[i].style.borderBottom= "thick solid #cde6ff";
            tabClName = x[i].innerHTML;
        } else {
            x[i].style.borderBottom= "none";
        }
    }
    return tabClName;
}

function openPubs() {
    openTab("Research");
    window.location.href = "#pubs";
}

function openRI() {
    openTab("Research");
    window.location.href = "#ri";
}

function closeAllAreas() {
    var i;
    var x = document.getElementsByClassName("column");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    var y = document.getElementsByClassName("areaBtnAct");
    for (i = 0; i < y.length; i++) {
        //y[i].style.fontWeight = "normal";
        y[i].style.border = "0px solid";
        y[i].style.borderColor = "#9ec2e6";
        //y[i].style.backgroundColor = "#f0f6fc";
    }
}

function areaBtnClick() {
    openArea(papers, this.id, notes[this.id]);
}


function openArea(papers, areaID, notes = "") {
    areaName = area[areaID];
    var textareaID = areaID + "A";
    
    var opened = false;
    if (document.getElementById(textareaID).style.display == "block") {
        opened = true;
    }
    closeAllAreas();
    
    if (!opened) {
        content = papers_by_area_str(papers, areaName, notes);
        
        document.getElementById(textareaID).innerHTML = "<div class='row'></div> <div style='padding:10px'>" + content + "</div>";
        document.getElementById(textareaID).style.display = "block";
        
        buttonId = areaID;
        document.getElementById(buttonId).style.border = "1.5px solid";
        document.getElementById(buttonId).style.borderColor = "#9ec2e6";
        //document.getElementById(buttonId).style.backgroundColor = "#9ec2e6";
    }
}


function print_all_papers(papers, areaName) {
    document.getElementById(areaName).innerHTML = papers_by_area_str(papers, areaName);
}

function papers_by_area_str(papers, area, notes = "") {
    var htmlContent = new String();
    
    for (var i = 0; i < papers.length; i++) {
        if (area == "all") {
            htmlContent += "<li>" + paper_str(papers[i]) + "</li>";
        }
        else if ("tags" in papers[i]) {
            for (var j = 0; j < (papers[i].tags).length; j++) {
                if (area == papers[i].tags[j]) {
                    htmlContent += "<li>" + paper_str(papers[i]) + "</li>";
                }
            }
        }
    }
    area_str = ""
    if (area != "all") {area_str = "<b>" + area + "</b>: "}
    return area_str + notes + "<ul>" + htmlContent + "</ul>";
}

// Adapted from https://github.com/BorjaBalle/borjaballe.github.io
function paper_str(paper) {
    var content = new String();
    if ("pdfurl" in paper) {
        content += "<a href='" + paper.pdfurl + "' target='_blank' >" + paper.title + "</a><br />";
    } else {
        content += paper.title + "<br />";
    }
    content += paper.authors + "<br />";
    content += "<i>" + paper.where + "</i>" + ", " + paper.year;
    if ("notes" in paper) content += "<br />"+ "<b class='hls'>" + paper.notes + "</b>";
    if ("code" in paper) content += "<br />" + "<a href='"  + paper.code +  "' target='_blank' >" + "Code" + "</a>";
    return content;
}
