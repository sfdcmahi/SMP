({
    updateBackgroundClass: function () {

        var containerClassName = "cSMPCustomTheme"
        var containerSelector = "." + containerClassName
        var layoutElem = document.querySelector(containerSelector)
        var path = window.location.pathname
        var sitePathSuffix = '/s/'

        var HomeRegex = /\/s\/$/

        if (layoutElem) {
            //if(path.indexOf(sitePathSuffix,path.length-sitePathSuffix)){
            if (!HomeRegex.test(path)) {
                console.log('theme others')
                this.setPwcLogo(1)
                layoutElem.className = containerClassName
            } else {
                console.log('theme home')
                this.setPwcLogo()
                layoutElem.className = containerClassName + " smpHome"
            }
        }
    },
    setPwcLogo: function (flg) {
        var elem = document.querySelector(".pwcWhiteLogo img")
        if (flg === 1) {
            elem.src = "https://us-advintl.sdconnect.pwcinternal.com/_layouts/FBALogin/FBALogin.gif"
        } else {
            elem.src = $A.get('$Resource.pwcWhiteLogo')
        }

    }
})