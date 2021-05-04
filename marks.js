var data = {
    mech: {
        sem1:
            [
                {
                    name: "Engineering Mathematics-1",
                    scode: "18BSEM101",
                    creds: 3,
                    see: true
                },
                {
                    name: "Engineering Chemistry-Theory",
                    scode: "18BSCH110",
                    creds: 3,
                    see: true
                },
                {
                    name: "Engineering Chemistry-Practical",
                    scode: "18BSCH111",
                    creds: 1.5,
                    see: true
                },
                {
                    name: "Engineering Graphics & Design",
                    scode: "18ESME112",
                    creds: 4,
                    see: true
                },
                {
                    name: "Engineering Mechanics",
                    scode: "18ESCV113",
                    creds: 3,
                    see: true
                },
                {
                    name: "Programming for Problem Solving-Theory",
                    scode: "18ESME114",
                    creds: 3,
                    see: true
                },
                {
                    name: "Programming for Problem Solving-Practical",
                    scode: "18ESME115",
                    creds: 1.5,
                    see: true
                },
                {
                    name: "Kannada",
                    scode: "18MCKN116",
                    creds: 1,
                    see: false
                },
                {
                    name: "Induction Program",
                    scode: "18MCIP109",
                    creds: 1,
                    see: false
                }
            ]


    },
    eee: {
        sem1: [

        ]



    }
}
function maketable(ptab, pbranch, psem) {

    count = 0;


    for (i of data[pbranch][psem]) {
        count++;
        rowNode = document.createElement("tr");
        /*s.no*/
        col1 = document.createElement("td");
        node = document.createTextNode(count);
        col1.appendChild(node);
        rowNode.appendChild(col1);

        /*subjectcode*/
        col2 = document.createElement("td");
        scodenode = document.createTextNode(i.scode);
        col2.appendChild(scodenode);
        rowNode.appendChild(col2);
        /*subjectname*/
        col3 = document.createElement("td");
        sname = document.createTextNode(i.name);
        col3.appendChild(sname);
        rowNode.appendChild(col3);
        /*no.of credits*/
        col4 = document.createElement("td");
        scred = document.createTextNode(i.creds);
        col4.appendChild(scred);
        rowNode.appendChild(col4);
        /*cie input*/
        col5 = document.createElement("td");
        col5in = document.createElement("input");
        col5in.type = "number";
        col5in.name = "cie" + count;
        col5in.min="20";
        col5in.max="50";
        col5.appendChild(col5in);
        rowNode.appendChild(col5);

        /*see input*/
        col6 = document.createElement("td");
        if (i.see) {
            col6in = document.createElement("input");
            col6in.type = "number";
            col6in.name = "see" + count;
            col6in.min="20";
            col6in.max="50";
            col6.appendChild(col6in);
        }
        rowNode.appendChild(col6);

        /* cie+sie */
        col7 = document.createElement("td");
        rowNode.appendChild(col7);
        col8 = document.createElement("td");
        rowNode.appendChild(col8);
        col9 = document.createElement("td");
        rowNode.appendChild(col9);
        col10 = document.createElement("td");
        rowNode.appendChild(col10);
        /* */
        /*Append the entire row*/
        ptab.appendChild(rowNode)

    }
}


/* Globally important variables*/
const togele = document.querySelector('.entable');
const branch = document.querySelector('#branch').value;
const sem = document.querySelector('#sem').value;



function myFunction() {

    /*-------------Head section of the table -------------*/
    if (togele.innerHTML != "") {
        togele.innerHTML = ""
    }


    tabhead = ["Sl. No",
        "Course Code",
        "Subjects",
        "No. of Credits",
        "CIE",
        "SEE",
        "Total(CIE+SEE)",
        "Grade",
        "Grade Point",
        "Credit Point"]
    tab = document.createElement("table");
    tab.class = "center animate";
    tab.id = "ctable";
    rowele = document.createElement('tr');
    for (j of tabhead) {

        var dele1 = document.createElement('th');
        dele1.innerHTML = j;
        rowele.appendChild(dele1)

    }
    tab.appendChild(rowele)

    maketable(tab, branch, sem)  // creating the main part of the table

    /*-------------Total section of the table -------------*/
    rowtot = document.createElement('tr');
    var dele1 = document.createElement('td');
    rowtot.appendChild(dele1)
    var dele1 = document.createElement('td');
    rowtot.appendChild(dele1)
    var dele1 = document.createElement('td');
    dele1.innerHTML = "Total"
    rowtot.appendChild(dele1)
    for (k = 0; k < 7; k++) {

        var dele1 = document.createElement('td');

        rowtot.appendChild(dele1)

    }
    tab.appendChild(rowtot)
    togele.appendChild(tab)
    togbut = document.querySelector('.calc');
    if (togele.innerHTML != "") {
        togbut.classList.remove("state")
    }

}
function getOption() {
    ciesum = 0;
    seesum = 0;
    cpsum = 0;
    tab = document.querySelector('#ctable');

    for (i = 1; i < (tab.childNodes.length - 1); i++) {
        ciesum += parseFloat(tab.childNodes[i].childNodes[4].firstChild.value);
        if (!data[branch][sem][i - 1].see) {
            tab.childNodes[i].childNodes[5].innerHTML = parseFloat(tab.childNodes[i].childNodes[4].firstChild.value);
            tab.childNodes[i].childNodes[6].innerHTML = 2 * parseFloat(tab.childNodes[i].childNodes[4].firstChild.value);
            seesum += parseFloat(tab.childNodes[i].childNodes[4].firstChild.value);

        } else {
            tab.childNodes[i].childNodes[6].innerHTML = parseFloat(tab.childNodes[i].childNodes[5].firstChild.value) + parseFloat(tab.childNodes[i].childNodes[4].firstChild.value);
            seesum += parseFloat(tab.childNodes[i].childNodes[5].firstChild.value);
        }
        //writing grade
        if (tab.childNodes[i].childNodes[6].innerHTML >= 90) {
            tab.childNodes[i].childNodes[7].innerHTML = "S";
            tab.childNodes[i].childNodes[8].innerHTML = parseInt(10)
            tab.childNodes[i].childNodes[9].innerHTML = parseFloat(tab.childNodes[i].childNodes[3].innerHTML) * 10;
        }
        else if (tab.childNodes[i].childNodes[6].innerHTML >= 75) {
            tab.childNodes[i].childNodes[7].innerHTML = "A";
            tab.childNodes[i].childNodes[8].innerHTML = parseInt(9);
            tab.childNodes[i].childNodes[9].innerHTML = parseFloat(tab.childNodes[i].childNodes[3].innerHTML) * 9;

        }
        else if (tab.childNodes[i].childNodes[6].innerHTML >= 60) {
            tab.childNodes[i].childNodes[7].innerHTML = "B";
            tab.childNodes[i].childNodes[8].innerHTML = parseInt(8)
            tab.childNodes[i].childNodes[9].innerHTML = parseFloat(tab.childNodes[i].childNodes[3].innerHTML) * 8;

        }
        else if (tab.childNodes[i].childNodes[6].innerHTML >= 50) {
            tab.childNodes[i].childNodes[7].innerHTML = "C";
            tab.childNodes[i].childNodes[8].innerHTML = parseInt(7)
            tab.childNodes[i].childNodes[9].innerHTML = parseFloat(tab.childNodes[i].childNodes[3].innerHTML) * 7;
        }
        else if (tab.childNodes[i].childNodes[6].innerHTML >= 45) {
            tab.childNodes[i].childNodes[7].innerHTML = "D";
            tab.childNodes[i].childNodes[8].innerHTML = parseInt(6)
            tab.childNodes[i].childNodes[9].innerHTML = parseFloat(tab.childNodes[i].childNodes[3].innerHTML) * 6;
        }
        else if (tab.childNodes[i].childNodes[6].innerHTML >= 40) {
            tab.childNodes[i].childNodes[7].innerHTML = "E";
            tab.childNodes[i].childNodes[8].innerHTML = parseInt(5)
            tab.childNodes[i].childNodes[9].innerHTML = parseFloat(tab.childNodes[i].childNodes[3].innerHTML) * 5;
        }
        else if (tab.childNodes[i].childNodes[6].innerHTML > 0) {
            tab.childNodes[i].childNodes[7].innerHTML = "F";
            tab.childNodes[i].childNodes[8].innerHTML = parseInt(0)
            tab.childNodes[i].childNodes[9].innerHTML = parseFloat(tab.childNodes[i].childNodes[3].innerHTML) * 0;
        }
        cpsum += parseFloat(tab.childNodes[i].childNodes[9].innerHTML)

    }

    tab.lastChild.childNodes[4].innerHTML = ciesum;
    tab.lastChild.childNodes[5].innerHTML = seesum;
    tab.lastChild.childNodes[6].innerHTML = seesum + ciesum;
    tab.lastChild.childNodes[9].innerHTML = cpsum;
    document.getElementById("per").innerHTML = parseFloat(((seesum + ciesum) / ((tab.childNodes.length - 2) * 100)) * 100).toFixed(3)




}
