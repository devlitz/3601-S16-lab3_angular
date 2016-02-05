'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as mainControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.mainControl.data.length > 0).toEqual(true);
        });

        it("should correctly identify how long the list is", function(){
            expect(scope.mainControl.data.length == scope.mainControl.itemsInList()).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.mainControl.data.length;
           scope.mainControl.removeData(1);
           expect(scope.mainControl.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.mainControl.data.length;
            scope.mainControl.textField = "kittens";
            scope.mainControl.addData();
            expect(scope.mainControl.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl as navbar', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.navbar.pages.length > 0).toEqual(true);
    });
});

//=== Testing footerCtrl ===========================================
describe('Testing controller: footerCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('footerCtrl as footer', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
        expect(scope.footer.pages.length > 0).toEqual(true);
    });
});

//=== Testing gpaCtrl ===========================================
describe('Testing controller: gpaCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('gpaCtrl as gpa', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain colors', function(){
        expect(scope.gpa.color.length > 0).toEqual(true);
    });

    it('should start as an empty list', function(){
        expect(scope.gpa.data.length == 0).toEqual(true);
    });

    it('should start remove a list', function(){
        scope.gpa.nameField = "Math";
        scope.gpa.gradeField = "A";
        scope.gpa.creditField = "2";
        scope.gpa.addData();
        scope.gpa.removeData();
        expect(scope.gpa.data.length == 0).toEqual(true);
    });

    it('should add one when there is input', function(){
        scope.gpa.nameField = "Math";
        scope.gpa.gradeField = "A";
        scope.gpa.creditField = "2";
        scope.gpa.addData();
        expect(scope.gpa.data.length == 1).toEqual(true);
    });

    it('should calculate gpa 4 and change color', function(){
        scope.gpa.nameField = "Math";
        scope.gpa.gradeField = "A";
        scope.gpa.creditField = "2";
        scope.gpa.addData();
        expect(scope.gpa.gpaCalc() == 4).toEqual(true);
    });

    it('should calculate gpa 3 and change color', function(){
        scope.gpa.nameField = "Math";
        scope.gpa.gradeField = "B";
        scope.gpa.creditField = "2";
        scope.gpa.addData();
        expect(scope.gpa.gpaCalc() == 3).toEqual(true);
    });

    it('should calculate gpa 2 and change color', function(){
        scope.gpa.nameField = "Math";
        scope.gpa.gradeField = "C";
        scope.gpa.creditField = "2";
        scope.gpa.addData();
        expect(scope.gpa.gpaCalc() == 2).toEqual(true);
    });

    it('should calculate gpa 1 and change color', function(){
        scope.gpa.nameField = "Math";
        scope.gpa.gradeField = "D";
        scope.gpa.creditField = "2";
        scope.gpa.addData();
        expect(scope.gpa.gpaCalc() == 1).toEqual(true);
    });

    it('should calculate gpa 0 and change color', function(){
        scope.gpa.nameField = "Math";
        scope.gpa.gradeField = "F";
        scope.gpa.creditField = "2";
        scope.gpa.addData();
        expect(scope.gpa.gpaCalc() == 0).toEqual(true);
    });
});