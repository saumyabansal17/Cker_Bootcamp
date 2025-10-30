var students=JSON.parse(localStorage.getItem("students")) || [];

function display(){
    localStorage.clear();
    var table=document.querySelector("#Table tbody");
    table.innerHTML="";
    for (var i = 0; i < students.length; i++) {
    var s = students[i];
    var row = document.createElement("tr");

    row.innerHTML =
      "<td>" + s.name + "</td>" +
      "<td>" + s.marks[0] + "</td>" +
      "<td>" + s.marks[1] + "</td>" +
      "<td>" + s.marks[2] + "</td>" +
      "<td>" + s.marks[3] + "</td>" +
      "<td>" + s.marks[4] + "</td>" +
      "<td>" + s.total + "</td>" +
      "<td>" + s.avg + "</td>";

    table.appendChild(row);
    }
}
function addStudent(){
    var name=prompt("Enter Student name");
    if(name==="" || name===null){
        alert("Name can not be null");
        return false;
    }
    var marks=[];

    for(var i=0;i<5;i++){
        var mk=prompt("Enter marks in sub"+[i+1]+" (out of 100)");
        if(mk<0 || mk>100 || mk==="" || isNaN(mk) || mk===null){
            alert("Enter valid marks");
            return false;
        }
        mk=Number(mk);
        marks.push(mk);
    }
    
    var total=marks.reduce(function(sum,m){return sum+m;},0);
    var avg=total/5;


    var student={
        name:name,
        marks:marks,
        total:total,
        avg:avg
    }

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    
    display();
    return true;  
}