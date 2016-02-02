//====================== FOOTER CONTROLLER ============================
angular.module('stdComponents').controller('footerCtrl', function(){
    var footer = this;
    console.log("Footer controller loaded");

    footer.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
        {text: "Kittens", link: '/kittens'},
        {text: "404 Page", link: '/wefwrtbertbeb'}
    ];
});
