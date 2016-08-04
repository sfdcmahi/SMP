({
    setInnerPageTheme: function (comp) {
        document.querySelector('.header').style.backgroundColor = "white"
    },
    getDefaultTitle: function (comp, event, helper) {
        //返回当前操作页面的标题
        var root = $A.getRoot()
        return root._defaultTitle
    },
    headhensiveInit: function () {
        new SMP_Headhesive('.header', {
            // Scroll offset. Accepts Number or "String" (for class/ID)
            offset: 500, // OR — offset: '.classToActivateAt',

            // If using a DOM element, we can choose which side to use as offset (top|bottom)
            offsetSide: 'top',

            // Custom classes
            classes: {

                // Cloned elem class
                clone: 'banner--clone',

                // Stick class
                stick: 'banner--stick',

                // Unstick class
                unstick: 'banner--unstick'
            },

            // Throttle scroll event to fire every 250ms to improve performace
            throttle: 250,

            // Callbacks
            onInit: function () {
                console.log('headhesive init')
                //maybe i need to move fake header into a container

            },
            onStick: function () {
                console.log('headhesive onstick')
            },
            onUnstick: function () {
                console.log('headhesive onunstick')
            },
            onDestroy: function () {
                console.log('headhesive ondestory')
            },
        });
    }
})