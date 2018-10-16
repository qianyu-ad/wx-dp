require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(25);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b1297ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b1297ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b1297ac", Component.options)
  } else {
    hotAPI.reload("data-v-1b1297ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            motto: 'Hello World211',
            userInfo: {},

            // active: 0

            current: 'homepage',
            imageURL: 'http://misc.aotu.io/Chen-jj/waterful_5.jpg',
            showPage: 'home'
        };
    },

    components: {
        card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
    },
    methods: {
        goList: function goList() {
            // const url = "../list/main?id=" + this.option
            var url = "../add/main";
            wx.navigateTo({ url: url });
        },
        onChange: function onChange(event) {
            console.log(event);
        },
        goAdd: function goAdd() {
            var url = "../add/main";
            wx.navigateTo({ url: url });
        },


        // 
        getUserInfo: function getUserInfo() {
            var _this = this;

            // 调用登录接口
            wx.login({
                success: function success() {
                    wx.getUserInfo({
                        success: function success(res) {
                            console.log(res.userInfo);
                            _this.userInfo = res.userInfo;
                        }
                    });
                }
            });
        },
        gg: function gg() {
            wx.getSetting({
                success: function success(res) {
                    console.log(res);
                    if (res.authSetting['scope.userInfo']) {
                        wx.getUserInfo({
                            success: function success(res) {
                                console.log(res.userInfo);
                                //用户已经授权过
                            }
                        });
                    }
                }
            });
        }
    },
    created: function created() {
        this.getUserInfo();
    }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cont"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPage == 'home'),
      expression: "showPage=='home'"
    }]
  }, [_c('div', {
    staticClass: "banner"
  }, [_c('div', {
    staticClass: "banner-img",
    style: ({
      'background-image': 'url(http://c1.haibao.cn/img/600_0_100_1/1532675134.8818/00f7cc85e99abe8226d1606d794f540a.jpg)'
    })
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._l((6), function(i, index) {
    return _c('div', {
      key: i,
      staticClass: "card",
      style: ({
        'background-image': 'url(http://seopic.699pic.com/photo/50038/5465.jpg_wh1200.jpg)'
      })
    }, [_c('div', {
      staticClass: "card-mask"
    }, [_vm._v("职场")]), _vm._v(" "), _c('div', {
      staticClass: "card-info"
    }, [_vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "card-info-r"
    }, [_c('i-icon', {
      staticClass: "card-icon",
      attrs: {
        "type": "browse",
        "size": "20",
        "color": "#fff",
        "mpcomid": '0-' + index
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "card-count card-count-mar"
    }, [_vm._v("1113")]), _vm._v(" "), _c('i-icon', {
      staticClass: "card-icon",
      attrs: {
        "type": "like",
        "size": "20",
        "color": "#f40",
        "mpcomid": '1-' + index
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "card-count card-count-mar"
    }, [_vm._v("124")]), _vm._v(" "), _c('i-icon', {
      staticClass: "card-icon",
      attrs: {
        "type": "message",
        "size": "20",
        "color": "#2d8cf0",
        "mpcomid": '2-' + index
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "card-count"
    }, [_vm._v("36")])], 1)])])
  }), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo"
    }
  }, [_vm._v("测试授权")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "tap": _vm.gg
    }
  }, [_vm._v("测试授权2")])], 2)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPage == 'setting'),
      expression: "showPage=='setting'"
    }],
    staticClass: "w100"
  }, [_c('div', {
    staticClass: "user-info"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))])]), _vm._v(" "), _c('div', {
    staticClass: "sw"
  }, [_c('van-cell', {
    attrs: {
      "custom-class": "mart",
      "title": "分享小程序",
      "icon": "share",
      "is-link": "",
      "url": "/pages/share/main",
      "border": false,
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "custom-class": "mart",
      "title": "我的文章",
      "icon": "pending-orders",
      "is-link": "",
      "border": false,
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "custom-class": "",
      "title": "我的收藏",
      "icon": "browsing-history",
      "is-link": "",
      "border": false,
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "custom-class": "",
      "title": "意见反馈",
      "icon": "chat",
      "is-link": "",
      "url": "/pages/feedback/main",
      "border": false,
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "custom-class": "mart",
      "title": "关于我们",
      "icon": "contact",
      "is-link": "",
      "url": "/pages/about/main",
      "border": false,
      "mpcomid": '7'
    }
  })], 1)]), _vm._v(" "), _c('van-tabbar', {
    staticClass: "tabbar",
    attrs: {
      "active": 0,
      "z-index": "100",
      "mpcomid": '11'
    }
  }, [_c('van-tabbar-item', {
    attrs: {
      "icon": "home",
      "eventid": '1',
      "mpcomid": '8'
    },
    on: {
      "tap": function($event) {
        _vm.showPage = 'home'
      }
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('van-tabbar-item', {
    staticClass: "add",
    attrs: {
      "icon": "add2",
      "eventid": '2',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.goAdd
    }
  }), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "contact",
      "eventid": '3',
      "mpcomid": '10'
    },
    on: {
      "tap": function($event) {
        _vm.showPage = 'setting'
      }
    }
  }, [_vm._v("我")])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-info-l"
  }, [_c('img', {
    staticClass: "card-avatar",
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erdaa8d4icn2cfyV8e3N0Eto8uN5WicxKW02BtGhIibETSSibSBdqKRbF01NGngWaImrY0MBMQuCFoEbw/132",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "card-un"
  }, [_vm._v("千雨")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b1297ac", esExports)
  }
}

/***/ })

},[24]);
//# sourceMappingURL=main.js.map