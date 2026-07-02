const arr = [
    {
        name:"StudentName: Om",
        marks:"Marks: 95%",
        class:"TY - CSE",
        address:"District: Pune"
    },
    {
        name:"StudentName: Rahul",
        marks:"Marks: 88%",
        class:"SY - IT",
        address:"District: Mumbai"
    },
    {
        name:"StudentName: Sneha",
        marks:"Marks: 91%",
        class:"BE - CSE",
        address:"District: Nagpur"
    },
    {
        name:"StudentName: kunal",
        marks: "Marks: 92%",
        class:"TY - CSE",
        address:"District: Wardha"
    },
    {
        name:"StudentName: Saumya",
        marks:"Marks: 92%",
        class:"TY - META",
        address:"District: Yavtmal"
    },
    {
        name:"StudentName: Ved",
        marks:"Marks: 90%",
        class:"TY - CSE",
        address:"District: Akola"
    },
    {
        name:"StudentName: Kedar",
        marks:"Marks: 93%",
        class:"TY - CSE",
        address:"District: Akola"
    },
    {
        name:"StudentName: Niosh",
        marks:"Marks: 94%",
        class:"TY - CSE",
        address:"District: Nagpur"
    },
    {
        name:"StudentName: Siddesh",
        marks:"Marks: 99%",
        class:"TY - META",
        address:"District: Nagpur"
    },
    {
        name:"StudentName: Rounak",
        marks:"Marks: 96%",
        class:"TY - MANU",
        address:"District: Nagpur"
    },
    {
        name:"StudentName: Viraj",
        marks:"Marks: 93%",
        class:"TY - MANU",
        address:"District: Kolhapur"
    },
    {
        name:"StudentName: Shripad",
        marks:"Marks: 93%",
        class:"TY - Instru",
        address:"District: SambhajiNagar"
    },
    {
        name:"StudentName: Pranav",
        marks:"Marks: 98%",
        class:"TY - ENTC",
        address:"District: Karad"
    },
    {
        name:"StudentName: Ajinkya",
        marks:"Marks: 93%",
        class:"TY - CSE",
        address:"District: Nashik"
    }
];

const cardcontainer = document.getElementById("cardcontainer");
const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("searchbtn");

function searchStudents() {
    const searchtext = searchBox.value.toLowerCase();
    const filteredStudents = arr.filter(function (student) {
        return (
            student.name.toLowerCase().includes(searchtext) ||
            student.class.toLowerCase().includes(searchtext) ||
            student.address.toLowerCase().includes(searchtext) ||
            student.marks.toLowerCase().includes(searchtext)
        );
    });
    DisplayStudents(filteredStudents);
}

searchBtn.addEventListener("click", searchStudents);
searchBox.addEventListener("input", searchStudents);

function DisplayStudents(studentarr){
    const cards = studentarr.map(function(students){
        return `
          <div class="card">
            <h4>${students.name}</h4>
            <p>${students.marks}</p>
            <p>${students.class}</p>
            <p>${students.address}</p>
        </div>
        `;
    });
    const finalHTML = cards.join("");
    cardcontainer.innerHTML = finalHTML;
}



DisplayStudents(arr);