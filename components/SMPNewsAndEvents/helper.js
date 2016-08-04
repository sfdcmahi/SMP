({
    initSwiper: function () {
        //初始化插件
        var swiper = new Swiper('.cSMPNewsAndEvents .swiper-container', {
            pagination: '.cSMPNewsAndEvents .swiper-pagination',
            paginationClickable: true
        });
    },
    getNews: function (component, callback) {
        var action = component.get("c.getNewsAndEvents");
        action.setCallback(this, function (response) {
            debugger
            var state = response.getState();
            if (component.isValid() && state == "SUCCESS") {
                component.set("v.news", response.getReturnValue());
                setTimeout(callback, 1);
            }
        })
        $A.enqueueAction(action);
    }
})