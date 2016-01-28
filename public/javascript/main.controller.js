var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function(){
        var navbar = this;
        console.log("Navbar controller loaded");

        navbar.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function(){
        var mainControl = this;
        console.log("Main controller loaded!");

        mainControl.textField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        mainControl.data = [
            {text: "fish"},
            {text: "kittens"},
            {text: "snake"},
            {text: "badger"},
            {text: "puppies"}
        ];

        mainControl.addData = function(){
            if(mainControl.textField.length >= 1) {
                mainControl.data.push({text: mainControl.textField});
                mainControl.textField = "";
            }
        };

        mainControl.removeData = function(index){
            mainControl.data.splice(index, 1);
        };

        mainControl.cat = function(str1, str2){
            return str1 + str2;
        };

        mainControl.itemsInList = function(){
            return mainControl.data.length;
        };
    });
