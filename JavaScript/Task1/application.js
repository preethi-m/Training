var Employee = function () 
{	var _ID,_Name,_Type,_DOB,_DOJ,_Exp;
	function setId(id) {
		_ID = id;
	}
	function setName(name) {
		_Name = name;
	}
	function setType(type) {
		_Type = type;
	}
	function setDob(dob) {
		_DOB = dob;
	}
	function setDoj(doj) {
		_DOJ = doj;
	}
	function setExp(exp) {
		_Exp = exp;
	}
	function getId() { return _ID;}
	function getName(){return _Name;}
	function getType(){return _Type;}
	function getDob(){return _DOB;}
	function getDoj(){return _DOJ;}
	function getExp(){return _Exp;}
	return {
		"setId" : setId,
		"setName": setName,
		"setDob": setDob,
		"setDoj": setDoj,
		"setType": setType,
		"setExp": setExp,
		"getId": getId,
		"getName": getName,
		"getType":getType,
		"getExp":getExp,
		"getDoj":getDoj,
		"getDob":getDob
	}
}

function loadEmployeeData() {
	// alert("there");
	getEmployees(function (response) {
		// alert("arrived");
		// alert(response);
		window.objects = [];
		var obj = JSON.parse(response);
		// alert(obj[0]['name']);
		 for (var i = 0; i < obj.length; i++) {
			var emp = new Employee();
			emp.setId(obj[i]["id"]);
			emp.setName(obj[i]["name"]);
			emp.setType(obj[i]["type"]);
			emp.setDob(obj[i]["dob"]);
			emp.setExp(obj[i]["experience"]);
			emp.setDoj(obj[i]["doj"]);
			objects.push(emp);
		}
		loadData();
	});
}

function getEmployees(callback) {
	// callback(alert("getEmployees"));
    var request;
    request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    	if(request.readyState == 4 && request.status == 200) {
    		callback(request.responseText);
    		//alert("creates");
    	}
    };
    request.open('GET','employees.json');
    request.send(null);
}


function loadData() {
	var table = document.getElementById("table");
	for(var i = 0; i < objects.length; i++) {
		var tr = table.insertRow(-1);
		var td = tr.insertCell(-1);
		td.innerHTML = objects[i].getId();
		td = tr.insertCell(-1);
		td.innerHTML = objects[i].getName();
		td = tr.insertCell(-1);
		td.innerHTML = objects[i].getType();
		td = tr.insertCell(-1);
		td.innerHTML = objects[i].getDob();
		td = tr.insertCell(-1);
		td.innerHTML = objects[i].getExp();
		td = tr.insertCell(-1);
		td.innerHTML = objects[i].getDoj();
		tr.setAttribute("onclick","getData (" + objects[i].getId() + ")");
	}
}

function getData(employeeId) {
	// alert("got");
	var emp = getSelectedEmp(employeeId);
	var data = document.getElementById("demo");
	for(var i = 0; i < 6; i++) {
		data.innerHTML = "ID: " + emp.getId() + "<br>";
		data.innerHTML += "NAME: "+ emp.getName() + "<br>";
        data.innerHTML += "Type: "+ emp.getType() + "<br>";
        data.innerHTML += "DOB: "+ emp.getDob() + "<br>";
        data.innerHTML += "Experience: " + emp.getExp() + "<br>";
        data.innerHTML += "DOJ: " + emp.getDoj();
	}
		
	// alert(emp.getName());
}


function getSelectedEmp(id){

    for(var e in objects) {
        if (objects[e].getId() == id) {
            // console.log(objects[e]);
            return objects[e];
        }
    }
}