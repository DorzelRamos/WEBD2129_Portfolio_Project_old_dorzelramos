$(function () {
    gsap.registerPlugin(GSDevTools, DrawSVGPlugin);
    let mobileNav = $("#mobile-nav");
    let mainContent = $("#main-content");
    let openMobNav = $("#openMobNav");
    let closeMobNav = $("#closeMobNav");
    // console.log(mobileNav);
    mobileNav.css("visibility", "hidden");
    openMobNav.click(OpenningMobNav);
    closeMobNav.click(ClosingMobNav);
    function OpenningMobNav() {
        mobileNav.css("visibility", "visible"); 
        mainContent.css("visibility", "hidden");
    }
    function ClosingMobNav() {
        mobileNav.css("visibility", "hidden"); 
        mainContent.css("visibility", "visible");
    }

});