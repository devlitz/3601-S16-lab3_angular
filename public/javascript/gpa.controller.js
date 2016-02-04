//====================== GPA CONTROLLER ============================
angular.module('gpaCalc').controller('gpaCtrl', function(){
    var form = this;
    console.log("gpa controller loaded");

    form.data = [
        {name: "test", grade:"A", credit:12}
    ];


});
