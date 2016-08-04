({
    initSwiper: function () {
        //初始化插件
        var swiper = new Swiper('.swiper-banner.swiper-container', {
            pagination: '.swiper-banner .swiper-pagination',
            paginationClickable: true
        });
    },
    loadSlidesBundle: function (component, callback) {
        //仅负责载入后台数据
        var action = component.get("c.getBannerHeadings");
        var self = this;
        action.setCallback(this, function (response) {
            console.log('help.loadSlides', response);
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());

                //异步
                component.set("v.slides", response.getReturnValue());

                //component.set("v.slides",self.changeDefaultImageUrl(response))

                component.set("v.isSlidesLoaded", true);
                setTimeout(callback, 1000);
                //callback()
            } else {
                $A.error('Unable to load Slides');
            }
        });
        $A.enqueueAction(action);

    },
    getDefaultTitle: function () {
        //返回当前操作页面的标题
        var root = $A.getRoot()
        return root._defaultTitle
    },
    changeDefaultImageUrl: function (obj) {
        var URL = "http://placehold.it/1280x526?text=Img Placeholder"
        var arr = obj.returnValue
        arr.forEach(function (value, index) {
            value.bannerImage = URL
        })
        return arr
    },
    switchToInnerTheme: function (component) {
        debugger;
    },

    doneRendering: function (cmp, event, helper) {
        if (!cmp.get("v.isDoneRendering")) {
            cmp.set("v.isDoneRendering", true);
            //do something after component is first rendered
        }
    },
    simpleCallback: function (callback1, callback2) {
        (function (cb) {
            callback1();
            cb()
        })(callback2)
    }

})