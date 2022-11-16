console.log("this is first JS assignment");

let employees = [];
// var fname = document.getElementById('fName').value;
// var lname = document.getElementById('lName').value;
// var age = document.getElementById('age').value;
// var email = document.getElementById('email').value;
// var phone = document.getElementById('phone').value;

// if(employees.length == 0){
//     document.getElementById('submitbtn').style.display="block";
//     document.getElementById('updatebtn').style.display="none";


// }

function addEmployee(){
    // event.preventDefault();

    document.getElementById('table').style.display = 'block'

    var fname = document.getElementById('fName').value;
    var lname = document.getElementById('lName').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // console.log(fname, lname, age, email, phone);

    if(fname.length && lname.length && age.length && email.length && phone.length > 3){

        employees.push({fname, lname, age, email, phone})
        // console.log(employees);

        // document.getElementById("alert").style.display = none;

    } else {
        // console.log("FILL FORM PROPERLY");
        document.getElementById("alert").innerHTML = `<h3>Please fill form carefully</h3>`;

        setTimeout(()=>{
        document.getElementById("alert").style.display = "none";
        },4000)
        }

    // if(employees.length)

        document.getElementById('tdForm').innerHTML = employees.map((data, index)=>{
            let tdForm1 = `
            <tr id="${data.index}">
            <td>${data.fname}</td>
            <td>${data.lname}</td>
            <td>${data.age}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td id="${index}" onClick="formEdit(this.id)"><button class="tablebutton">Edit</button></td>
            <td id="${index}" onClick="formDelete(this.id)"><button class="tablebutton">Delete</button></td>
            </tr>`
            // console.log(index);
            return tdForm1;
        }).join('')

        document.getElementById('fName').value = '';
        document.getElementById('lName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';

        // function reset(){
        //     let reset = document.getElementById('reset');
        //     console.log(reset);
        // }   
}

let clickedId ;
function formEdit(id){
    clickedId = id;
    console.log(clickedId);

    // document.getElementById("changebtn").setAttribute('value','Update');
    
    // console.log("form editing");
    // console.log(employees);
    // console.log(employees[id]);
    document.getElementById('fName').value = employees[id].fname;
    document.getElementById('lName').value = employees[id].lname;
    document.getElementById('age').value = employees[id].age;
    document.getElementById('email').value = employees[id].email;
    document.getElementById('phone').value = employees[id].phone;



    // console.log(employees);
    // updateForm()

    document.getElementById('submitbtn').style.display="none";
    document.getElementById('updatebtn').style.display="block";

    return clickedId;
}

function updateForm(){

    console.log(clickedId);

    employees[clickedId].fname = document.getElementById('fName').value;
    employees[clickedId].lname = document.getElementById('lName').value;
    employees[clickedId].age = document.getElementById('age').value;
    employees[clickedId].email = document.getElementById('email').value;
    employees[clickedId].phone = document.getElementById('phone').value;

    document.getElementById('tdForm').innerHTML = employees.map((data, index)=>{
        let tdForm1 = `
        <tr id="${data.index}">
        <td>${data.fname}</td>
        <td>${data.lname}</td>
        <td>${data.age}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td id="${index}" onClick="formEdit(this.id)"><button class="tablebutton">Edit</button></td>
            <td id="${index}" onClick="formDelete(this.id)"><button class="tablebutton">Delete</button></td>
        </tr>`
        // console.log(index);
        return tdForm1;
    }).join('')

    document.getElementById('tdForm')

    // console.log(employees[clickedId].fname);
    // console.log(employees[clickedId].lname);
    // console.log(employees[clickedId].age);
    // console.log(employees[clickedId].email);
    // console.log(employees[clickedId].phone);
    console.log("form is updating");

    // document.querySelector('form').reset();

    // console.log(employees);


    document.getElementById('fName').value = '';
    document.getElementById('lName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';


    document.getElementById('submitbtn').style.display="block";
    document.getElementById('updatebtn').style.display="none";
   


}

function formDelete(id){
    console.log(id);
        // console.log(employees.length);
        employees.splice(id,1);
        // console.log(employees.length);

        document.getElementById('tdForm').innerHTML = 
        employees.map((data, index)=>{
            let tdForm4 = `
            <tr id="${data.index}">
            <td>${data.fname}</td>
            <td>${data.lname}</td>
            <td>${data.age}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td id="${index}" onClick="formEdit(this.id)"><button class="tablebutton">Edit</button></td>
            <td id="${index}" onClick="formDelete(this.id)"><button class="tablebutton">Delete</button></td>
            </tr>`
            // console.log(index);
            return tdForm4;
        }).join('')


        if (employees.length == 0) {
            document.getElementById('table').style.display= 'none';
        }
}


function fillForm(){
    document.getElementById('fName').value = "Umaid";
    document.getElementById('lName').value = "Saeed";
    document.getElementById('age').value = 26;
    document.getElementById('email').value = "786@gmail.com";
    document.getElementById('phone').value = 03211234567;
}