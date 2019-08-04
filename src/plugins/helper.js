"use strict"
import Vue from 'vue'
const Helper = {
    install(Vue) {
        Vue.prototype.appName = process.env.VUE_APP_NAME
        Vue.prototype.getImage = function (image){
            if(image!=null && image.length>0 && image!=undefined){
                return process.env.VUE_APP_BACKEND_URL + "/images"+ image
            }
            return "/img/unavailable.png"
        }
    }
}

Vue.use(Helper)