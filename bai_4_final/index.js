class Member {
    constructor(arrInfo) {
        this.id = arrInfo[0];
        this.name = arrInfo[1];
        this.date = arrInfo[2];
        this.address = arrInfo[3];
        this.salary = arrInfo[4];
        this.position = arrInfo[5];
    }
    setMember(newInfo) {
        this.name = newInfo[0];
        this.date = newInfo[1];
        this.address = newInfo[2];
        this.salary = newInfo[3];
        this.position = newInfo[4];
    }
}
let arrMember = [
    {
        id: 1,
        name: "Le Van Chinh",
        date: "24/02/2003",
        address: "Quang Binh",
        salary: "60.000.000",
        position: "Project Manager"
    },
    {
        id: 2,
        name: "Pham Viet Hiep",
        date: "14/06/1998",
        address: "Da Nang",
        salary: "50.000.000",
        position: "Tester"
    },
    {
        id: 3,
        name: "Hoang Huynh Duc",
        date: "04/05/2000",
        address: "Quang Nam",
        salary: "45.000.000",
        position: "Tester"
    }
]
let tbody = document.getElementById("listMember").getElementsByTagName("tbody")[0];
let idMemberEdit;
window.onload = function() {
    deleteMember();
}
//Click to show form add new member
function addMoreMember() {
    document.getElementById("formEdit").classList.add("hidden");
    let formAdd = document.getElementById("formAdd");
    formAdd.classList.remove("hidden");
}
//Handle add member to table
function addMember() {
    let inputForm = document.getElementById("formAdd").getElementsByTagName("input");
    let infoUser = []
    infoUser[0] = arrMember.length + 1;
    for (let i = 0; i < inputForm.length; i++) {
        infoUser.push(inputForm[i].value);
    }
    let newMember = new Member(infoUser);
    arrMember.push(newMember);
    renderListMembers(arrMember);

    for (let i = 0; i < inputForm.length; i++) {
        inputForm[i].value = "";
    }
    document.getElementById("formAdd").classList.add("hidden");
}

//Refactor code
//Render list member in array
function renderListMembers(arrMember) {
    tbody.innerHTML = arrMember.map(member => {
            return `
        <tr>
            <td class="UserId">${member.id}</td>
            <td>${member.name}</td>
            <td>${member.date}</td>
            <td>${member.address}</td>
            <td>${member.salary}</td>
            <td>${member.position}</td>
            <td class="deleteBtn">&#10006</td>
        </tr>
        `
        }
    ).join('');
    deleteMember()
}

//Feature editing
function editingMember() {
    document.getElementById("formAdd").classList.add("hidden");
    let formEdit = document.getElementById("formEdit");
    formEdit.classList.remove("hidden");
    let idUserInput = +prompt("Input ID of member you want to edit: ");
    idMemberEdit = idUserInput;
    let inputFormEdit = formEdit.getElementsByTagName("input");
    for (let j = 0; j < inputFormEdit.length; j++) {
        inputFormEdit[j].value = Object.values(arrMember[idUserInput - 1])[j + 1];
    }
}
//Handle editing when click edit Btn
function editInfoMember() {
    let idUserInput = idMemberEdit;
    let idMember = document.getElementsByClassName("UserId");
    for (let i = 0; i < idMember.length; i++) {
        if (idUserInput == idMember[i].textContent) {
            let inputFormEdit = document.getElementById("formEdit").getElementsByTagName("input");
            let infoUserEdited = []
            infoUserEdited[0] = idUserInput;
            for (let i = 0; i < inputFormEdit.length; i++) {
                infoUserEdited.push(inputFormEdit[i].value);
            }
            let newMember = new Member(infoUserEdited);
            arrMember[idUserInput - 1] = newMember;
            renderListMembers(arrMember);
        }
    }
    document.getElementById("formEdit").classList.add("hidden");
}


//Handle when click X to delete member
function deleteMember() {
    let arrDeleteBtn = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < arrDeleteBtn.length; i++) {
        arrDeleteBtn[i].addEventListener("click", function(e){
            document.getElementsByTagName("tr")[i+1].remove();
        });
    }

}