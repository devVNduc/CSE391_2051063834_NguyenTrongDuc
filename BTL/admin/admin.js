var list = document.querySelector("#list");

var listTv = [
    {
        id: 01,
        fullname: "Avengers: End game",
        date: "01/01/2019",
        type: "action",
        country: "America",
        director: "Anthony Russo,Joe Russo",
        resolution: "2k",
        link: "https://vi.wikipedia.org/wiki/Avengers:_H%E1%BB%93i_k%E1%BA%BFt",
    },
     {
        id: 02,
        fullname: "The Mummy",
        date: "01/01/2019",
        type: "action",
        country: "America",
        director: "Alex Kurtzman",
        resolution: "1080p",
        link: "https://en.wikipedia.org/wiki/The_Mummy_(1999_film)",
    },
     {
        id: 03,
        fullname: "Annabelle",
        date: "01/01/2017",
        type: "horror",
        country: "America",
        director: "Gary Dauberman",
        resolution: "2k",
        link: "https://vi.wikipedia.org/wiki/Annabelle:_%C3%81c_qu%E1%BB%B7_tr%E1%BB%9F_v%E1%BB%81",
    },
     {
        id: 04,
        fullname: "Mr.bean",
        date: "01/01/1997",
        type: "funny",
        country: "America",
        director: "Rowan Atkinson,Richard Curtis",
        resolution: "1080p",
        link: "https://vi.wikipedia.org/wiki/Mr._Bean",
    },
    
];

function render() {
    let htmls = listTv.map((tv,i) => {
        return `
        <tr>
                <td>${tv.id}</td> 
                <td>${tv.fullname}</td>
                <td>${tv.date}</td>
                <td>${tv.type}</td>
                <td>${tv.country}</td>
                <td>${tv.director}</td>
                <td>${tv.resolution}</td>
                <td><a target="_blank" href="${tv.link}">link</a></td>  
                <td>
                    <p class="icon" >
                        <a href="#" onclick="editInfo(this.id)" id="${tv.id}"> 
                        <i  class="fas fa-pencil-alt"></i></a>
                        <a onclick="deleteInfo(this.id)" id="${tv.id}" href="#">
                        <i class="fas fa-trash-alt"></i></a>
                    </p>
                </td>
            </tr>
        `;
    });

    list.innerHTML = htmls.join("");
}

//
var formAdd = document.querySelector("#formAdd");
var toggle = document.querySelector("#toggle");
var isToggle = false;
toggle.addEventListener("click", () => {
    isToggle = !isToggle;
    if (isToggle) {
        formAdd.classList.remove("none");
        formAdd.classList.add("block");
    } else {
        formAdd.classList.remove("block");
        formAdd.classList.add("none");
    }
});
//thêm
inputFullName = document.querySelector(".fullName");
inputDate = document.querySelector(".releaseDate");
inputType = document.querySelector(".type");
inputCountry = document.querySelector(".country");
inputDirector = document.querySelector(".director");
inputResolution = document.querySelector(".resolution");
inputLink = document.querySelector(".linkFilm");
console.log(inputDate);
let add = document.getElementById("add");
// đk của name
let nameOfUser = document.getElementById("name");
let nameOfUserRegex =  /^\d+$/; //số

let statusOfName = document.getElementById("statusOfName");

nameOfUser.addEventListener("focus", function () {
    this.style.border = "1px solid";
});
nameOfUser.addEventListener("focusout", removeTextName);
function removeTextName() {
    if (nameOfUserRegex.test(nameOfUser.value) || nameOfUser.value =="") {
        statusOfName.textContent = "Full name is not valid";
        statusOfName.style.color = "red";
        statusOfName.style.fontSize = "15px";
       
    } else {
        statusOfName.textContent = "Full name is valid";
        statusOfName.style.color = "blue";
        statusOfName.style.fontSize = "15px";
    }
}
function checkValue() {

    if (nameOfUserRegex.test(nameOfUser.value)) {
        alert("Full name is wrong")
        return false;
    }
    if (inputFullName.value =="") {
        
        return false;
    }
    if (inputCountry.value=="") {
        
        return false
    } 
    if (inputDate.value == "") {
        return false;
    }

    if (inputLink.value == "") {
        return false;
    }
    
    if (inputType.value == "") {
        return false;
    }
    if (inputResolution.value == "") {
        return false;
    }
    return true;
}

add.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkValue()) {
        let newTv = {
            id: listTv.length + 1,
            fullname: inputFullName.value,
            date: inputDate.value,
            type: inputType.value,
            country: inputCountry.value,
            director: inputDirector.value,
            resolution: inputResolution.value,
            link: inputLink.value,
        };

        listTv.push(newTv);

        render();
    } else {
        alert("You need to enter all the information");
    }
});

// xóa
function deleteInfo(id) {
    listTv = listTv.filter((tv) => tv.id != id);

    render();
}
// sửa

function editInfo(id) {
    let sv = listTv.filter((tv) => tv.id == id)[0];

    idChanging = id; 
    inputFullName.value = sv.fullname;
    inputDate.value = sv.date;
    inputType.value = sv.type;
    inputCountry.value = sv.country;
    inputDirector.value = sv.director;
    inputResolution.value = sv.resolution;
    inputLink.value = sv.link;
    isToggle = true;
    if(isToggle) {
        formAdd.classList.remove("none");
        formAdd.classList.add("block");
    }
    const editBtn = document.getElementById("edit");
    editBtn.disabled = false;
}
//changing() button của sửa
let idChanging;
function changing() {
    if (checkValue()) {
        let newTv = {
            id: idChanging,
            fullname: inputFullName.value,
            date: inputDate.value,
            type: inputType.value,
            country: inputCountry.value,
            director: inputDirector.value,
            resolution: inputResolution.value,
            link: inputLink.value,
        };
        for (let i = 0; i < listTv.length; i++) {
            if (listTv[i].id == idChanging) {
                listTv[i] = newTv;
            }
        }
        render();
    } else {
        alert("You need to enter all the information");
    }
    

   
}

render();