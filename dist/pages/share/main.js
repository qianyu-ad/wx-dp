require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(39);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_954da212_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(42);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_954da212_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/share/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-954da212", Component.options)
  } else {
    hotAPI.reload("data-v-954da212", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
            value: '',
            s: ''
        };
    },
    created: function created() {
        wx.showShareMenu({
            withShareTicket: true
        });

        wx.request({
            url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=14_5Pfhg4NY_oyJRpjIdP3rmIyDm_8g7-QIr-ZKCLkx2OHUpmsGGuEdA4XWB2FpmD6R-CFEIwwjNPf7a2IpxPgVucntlLgfcQRqtTPRev0-mWeseHRUXmHQKB7I5XoSYOMgXjtaZPIQyjtTDffbCHIeABAHMN',
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
                console.log(res.data);
            }
        });
    },

    methods: {
        share: function share() {
            console.log(1);
            // Page.onShareAppMessage()
        }
    }
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share-page"
  }, [_c('div', {
    staticClass: "ct"
  }), _vm._v(" "), _c('div', {
    staticClass: "ctrl"
  }, [_c('button', {
    staticClass: "ctrl-btn",
    attrs: {
      "open-type": "share"
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "share",
      "size": "20",
      "mpcomid": '0'
    }
  }), _vm._v("\n            发送给好友\n        ")], 1), _vm._v(" "), _c('button', {
    staticClass: "ctrl-btn download"
  }, [_c('i-icon', {
    attrs: {
      "type": "task",
      "size": "20",
      "mpcomid": '1'
    }
  }), _vm._v("\n            保存图片\n        ")], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-954da212", esExports)
  }
}

/***/ })

},[38]);
//# sourceMappingURL=main.js.map