({
    doInit: function (cmp, event, helper) {
        //helper.loadSlidesBundle(cmp)
    },
    afterSwiperLoaded: function (cmp, event, helper) {
        debugger
        helper.loadSlidesBundle(cmp, helper.initSwiper)
        //helper.initSwiper()
    },
    slidesChanged: function (cmp) {
        if (cmp.get("v.isSlidesLoaded")) {
            //reInit Swiper.js
            helper.initSwiper()
        }

    },
    doneRendering: function (cmp, event, helper) {
        helper.loadSlidesBundle(cmp)
    },
    titleChanged: function (cmp, event, helper) {

        var TITLE = cmp.get("v._title")

    },
    doneRendering2: function (cmp, event, helper) {
        var self = this
        debugger
        if (!cmp.get("v.isDoneRendering")) {
            cmp.set("v.isDoneRendering", true);

            if (helper.getDefaultTitle() === 'Home') {
                cmp.set("v._title", 'Home')
            } else {
                cmp.set("v._title", 'Others')
            }
        }
    },
    doneTest: function (component) {
        debugger;
        var target = component.elements
        target = target[0].className

        if (document.querySelectorAll(".swiper-slide").length) {
            helper.initSwiper()
        }
    }


})
