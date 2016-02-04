//====================== GPA CONTROLLER ============================
angular.module('gpaCalc').controller('gpaCtrl', function(){
    var form = this;
    console.log("gpa controller loaded");

    form.data = [
    ];

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
            gpa = 0;
            credits = 0;
            for (i = 0; i < form.data.length;i++) {
                gpa += (gradeNum(form.data[i].grade) * form.data[i].credit);
                credits += form.data[i].credit
            }
            return colorChange(gpa / credits);
        }

        else {
            return "";
        }
    };

    function gradeNum(grade) {
        if (grade == "A") {
            return 4;
        }
        else if (grade == "B") {
            return 3;
        }
        else if (grade == "C") {
            return 2;
        }
        else if (grade == "D") {
            return 1;
        }
        else if (grade == "F") {
            return 0;
        }
    }

    function colorChange(gpa) {
        if (gpa <= 2) {
            return gpa.toString().fontcolor("red")
        }
        else if (gpa > 2 && gpa <=3) {
            return gpa.toString().fontcolor("yellow")
        }
        else if (gpa > 3) {
            return gpa.toString().fontcolor("green")
        }
    }

});
