//====================== GPA CONTROLLER ============================
angular.module('gpaCalc').controller('gpaCtrl', function(){
    var form = this;
    console.log("gpa controller loaded");

    form.data = [];

    form.addData = function(){
        if((form.nameField.length >= 1) && (form.gradeField.length = 1) && (form.creditField.length = 1) && checkGrade(form.gradeField.toUpperCase()) && checkInt(parseInt(form.creditField))) {
            form.data.push({name: form.nameField, grade: form.gradeField.toUpperCase(), credit: parseInt(form.creditField)});
            form.nameField = "";
            form.gradeField = "";
            form.creditField = "";
        }
        else {
            alert("Make sure your grade is only one letter, and you only have a one digit credit");
        }
    };

    form.removeData = function(index){
        form.data.splice(index, 1);
    };

    function checkInt(value) {
        return !isNaN(value) &&
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10));
    }

    function checkGrade(grade) {
        if ((grade == "A") | (grade == "B") | (grade == "C") | (grade == "D") | (grade == "F")) {
            return true;
        }
        else {
            return false;
        }
    }

    form.gpaCalc = function(){
        if(form.data.length >= 1) {
            
        }
        else {
            ""
        }
    };


});
