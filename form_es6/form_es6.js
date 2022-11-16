console.log("This is form assignment using class");




// let 


class employee {
    fname;
    lname;
    age;
    email;
    phone;

        constructor(fname,lname,age,email,phone){
            this.fname = fname;
            this.lname = lname;
            this.age = age;
            this.email = email;
            this.phone = phone;

        }

        addEmployee (fname,lname,age,email,phone) {
            // e.preventeDefault();
            console.log(fname,lname,age,email,phone);
            
        }
  
    
}


let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let age = document.getElementById("age").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
// console.log(fname, lname, age, email, phone);

const employee1 = new employee();
employee1.addEmployee(fname,lname,age,email,phone);