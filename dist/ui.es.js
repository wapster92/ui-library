import { openBlock, createElementBlock, createElementVNode, defineComponent, createVNode, unref, withCtx, pushScopeId, popScopeId, createTextVNode, createBlock, renderSlot, Fragment, renderList, toDisplayString, resolveDynamicComponent, normalizeProps, guardReactiveProps, computed, useSlots, inject, reactive, normalizeClass, createCommentVNode, ref, onMounted, watch, withDirectives, vShow } from 'vue';
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElAvatar, ElButton, ElIcon, ElMenu, ElMenuItemGroup, ElSubMenu, ElMenuItem, ElConfigProvider, ElContainer, ElAside, ElHeader, ElMain, ElTable, ElTableColumn, ElInput, ElPopover, ElTag, ElDatePicker } from 'element-plus';
import { defineStore } from 'pinia';
import { Fold, Expand, Plus, Search } from '@element-plus/icons-vue';
import { useRoute, useRouter } from 'vue-router';
import { DateTime } from 'luxon';

var base = '';

var container = '';

var aside = '';

var footer = '';

var header = '';

var main = '';

var configProvider = '';

const state = false;
const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      isState: state
    };
  },
  actions: {
    changeState() {
      this.isState = !this.isState;
    }
  }
});

var button = '';

var icon = '';

var avatar = '';

var dropdown = '';

var popper = '';

var dropdownItem = '';

var dropdownMenu = '';

const _hoisted_1$d = {
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /*#__PURE__*/createElementVNode("path", { d: "M13.833.5H2.167A1.66 1.66 0 0 0 .5 2.167V5.5h1.667V2.167h11.666v11.666H2.167V10.5H.5v3.333A1.666 1.666 0 0 0 2.167 15.5h11.666a1.666 1.666 0 0 0 1.667-1.667V2.167C15.5 1.242 14.75.5 13.833.5ZM6.4 10.983l1.183 1.184L11.75 8 7.583 3.833 6.4 5.008l2.158 2.159H.5v1.666h8.058L6.4 10.983Z" }, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$b
];

function render$3(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$6))
}
var Exit = { render: render$3 };

var UUserPanel_vue_vue_type_style_index_0_scoped_true_lang = '';

var UUserPanel_vue_vue_type_style_index_1_lang = '';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _withScopeId$1 = (n) => (pushScopeId("data-v-a639cfa2"), n = n(), popScopeId(), n);
const _hoisted_1$c = { class: "user-panel-wrapper" };
const _hoisted_2$a = { class: "avatar-wrapper" };
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("img", { src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" }, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "user-panel-dropdown__name" }, "User Name", -1));
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode("Action 1");
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("Action 2");
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode("Action 3");
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u0412\u044B\u0445\u043E\u0434", -1));
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(unref(ElDropdown), {
          trigger: "click",
          "popper-class": "user-panel-dropdown"
        }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), null, {
              default: withCtx(() => [
                _hoisted_4$1,
                createVNode(unref(ElDropdownItem), null, {
                  default: withCtx(() => [
                    _hoisted_5$1
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), null, {
                  default: withCtx(() => [
                    _hoisted_6$1
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), null, {
                  default: withCtx(() => [
                    _hoisted_7$1
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), {
                  icon: unref(Exit),
                  divided: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_8$1
                  ]),
                  _: 1
                }, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2$a, [
              createVNode(unref(ElAvatar), {
                class: "user-avatar",
                size: 32,
                src: "https://empty"
              }, {
                default: withCtx(() => [
                  _hoisted_3$5
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
var UUserPanel = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-a639cfa2"]]);

var UHeader_vue_vue_type_style_index_0_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-43a9b485"), n = n(), popScopeId(), n);
const _hoisted_1$b = { class: "header" };
const _hoisted_2$9 = { class: "button-wrapper" };
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const menuStore = useMenuStore();
    const changeMenuStatus = () => {
      menuStore.changeState();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createElementVNode("div", _hoisted_2$9, [
          createVNode(unref(ElButton), {
            class: "btn",
            size: "small",
            type: "primary",
            onClick: changeMenuStatus
          }, {
            default: withCtx(() => [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  unref(menuStore).isState ? (openBlock(), createBlock(unref(Fold), { key: 0 })) : (openBlock(), createBlock(unref(Expand), { key: 1 }))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _hoisted_3$4,
        createVNode(UUserPanel)
      ]);
    };
  }
});
var UHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-43a9b485"]]);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var ru$1 = {};

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var ru = {
  name: "ru",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"
    },
    datepicker: {
      now: "\u0421\u0435\u0439\u0447\u0430\u0441",
      today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
      confirm: "OK",
      selectDate: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443",
      selectTime: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F",
      startDate: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430",
      startTime: "\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430",
      endDate: "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
      endTime: "\u0412\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
      prevYear: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0433\u043E\u0434",
      nextYear: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0434",
      prevMonth: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",
      nextMonth: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",
      year: "",
      month1: "\u042F\u043D\u0432\u0430\u0440\u044C",
      month2: "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
      month3: "\u041C\u0430\u0440\u0442",
      month4: "\u0410\u043F\u0440\u0435\u043B\u044C",
      month5: "\u041C\u0430\u0439",
      month6: "\u0418\u044E\u043D\u044C",
      month7: "\u0418\u044E\u043B\u044C",
      month8: "\u0410\u0432\u0433\u0443\u0441\u0442",
      month9: "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
      month10: "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
      month11: "\u041D\u043E\u044F\u0431\u0440\u044C",
      month12: "\u0414\u0435\u043A\u0430\u0431\u0440\u044C",
      week: "\u043D\u0435\u0434\u0435\u043B\u044F",
      weeks: {
        sun: "\u0412\u0441",
        mon: "\u041F\u043D",
        tue: "\u0412\u0442",
        wed: "\u0421\u0440",
        thu: "\u0427\u0442",
        fri: "\u041F\u0442",
        sat: "\u0421\u0431"
      },
      months: {
        jan: "\u042F\u043D\u0432",
        feb: "\u0424\u0435\u0432",
        mar: "\u041C\u0430\u0440",
        apr: "\u0410\u043F\u0440",
        may: "\u041C\u0430\u0439",
        jun: "\u0418\u044E\u043D",
        jul: "\u0418\u044E\u043B",
        aug: "\u0410\u0432\u0433",
        sep: "\u0421\u0435\u043D",
        oct: "\u041E\u043A\u0442",
        nov: "\u041D\u043E\u044F",
        dec: "\u0414\u0435\u043A"
      }
    },
    select: {
      loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
      noMatch: "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
      placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"
    },
    cascader: {
      noMatch: "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
      placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
      noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"
    },
    pagination: {
      goto: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438",
      pagesize: " \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
      total: "\u0412\u0441\u0435\u0433\u043E {total}",
      pageClassifier: ""
    },
    messagebox: {
      title: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
      confirm: "OK",
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      error: "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0432\u0432\u043E\u0434 \u0434\u0430\u043D\u043D\u044B\u0445"
    },
    upload: {
      deleteTip: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 [\u0423\u0434\u0430\u043B\u0438\u0442\u044C] \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F",
      delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      preview: "\u041F\u0440\u0435\u0432\u044C\u044E",
      continue: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"
    },
    table: {
      emptyText: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
      confirmFilter: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
      resetFilter: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
      clearFilter: "\u0412\u0441\u0435",
      sumText: "\u0421\u0443\u043C\u043C\u0430"
    },
    tree: {
      emptyText: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"
    },
    transfer: {
      noMatch: "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
      titles: ["\u0421\u043F\u0438\u0441\u043E\u043A 1", "\u0421\u043F\u0438\u0441\u043E\u043A 2"],
      filterPlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",
      noCheckedFormat: "{total} \u043F\u0443\u043D\u043A\u0442\u043E\u0432",
      hasCheckedFormat: "{checked}/{total} \u0432\u044B\u0431\u0440\u0430\u043D\u043E"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "OK",
      cancelButtonText: "\u041E\u0442\u043C\u0435\u043D\u0430"
    }
  }
};

exports["default"] = ru;

}(ru$1));

var ru = /*@__PURE__*/getDefaultExportFromCjs(ru$1);

var ULogo_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$9 = {};
const _hoisted_1$a = { class: "logo" };
const _hoisted_2$8 = {
  href: "/",
  class: "logo__link"
};

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$a, [
    createElementVNode("a", _hoisted_2$8, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]))
}
var ULogo = /*#__PURE__*/_export_sfc(_sfc_main$9, [['render',_sfc_render],['__scopeId',"data-v-5eadb968"]]);

var menu = '';

var tooltip = '';

var UMenu_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1$9 = { class: "menu" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    menuItems: null
  },
  setup(__props) {
    const props = __props;
    const stateMenu = useMenuStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$9, [
        createVNode(unref(ElMenu), {
          collapse: !unref(stateMenu).isState,
          class: "menu-component"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.menuItems, (menuItem, i) => {
              return openBlock(), createElementBlock(Fragment, { key: i }, [
                menuItem.groupName ? (openBlock(), createBlock(unref(ElMenuItemGroup), { key: 0 }, {
                  title: withCtx(() => [
                    createElementVNode("span", null, toDisplayString(menuItem.groupName), 1)
                  ]),
                  default: withCtx(() => [
                    menuItem?.menuItems ? (openBlock(), createBlock(unref(ElSubMenu), {
                      key: 0,
                      index: `${i}`
                    }, {
                      title: withCtx(() => [
                        createVNode(unref(ElIcon), null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                          ]),
                          _: 2
                        }, 1024),
                        createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(menuItem.menuItems, (subItem, k) => {
                          return openBlock(), createBlock(unref(ElMenuItem), {
                            key: k,
                            index: `${i}-${k}`
                          }, {
                            title: withCtx(() => [
                              createElementVNode("span", null, toDisplayString(subItem.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["index"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["index"])) : (openBlock(), createBlock(unref(ElMenuItem), {
                      key: 1,
                      index: `${i}`
                    }, {
                      title: withCtx(() => [
                        createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode(unref(ElIcon), null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["index"]))
                  ]),
                  _: 2
                }, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  menuItem?.menuItems ? (openBlock(), createBlock(unref(ElSubMenu), {
                    key: 0,
                    index: `${i}`
                  }, {
                    title: withCtx(() => [
                      createVNode(unref(ElIcon), null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                        ]),
                        _: 2
                      }, 1024),
                      createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(menuItem.menuItems, (subItem, k) => {
                        return openBlock(), createBlock(unref(ElMenuItem), {
                          key: k,
                          index: `${i}-${k}`
                        }, {
                          title: withCtx(() => [
                            createElementVNode("span", null, toDisplayString(subItem.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["index"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["index"])) : (openBlock(), createBlock(unref(ElMenuItem), {
                    key: 1,
                    index: `${i}`
                  }, {
                    title: withCtx(() => [
                      createElementVNode("span", null, toDisplayString(menuItem.name), 1)
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(ElIcon), null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(menuItem.iconSvg)))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["index"]))
                ], 64))
              ], 64);
            }), 128))
          ]),
          _: 1
        }, 8, ["collapse"])
      ]);
    };
  }
});
var UMenu = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ce048dc2"]]);

var UMenuPanel_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1$8 = { class: "menu-wrapper" };
const _hoisted_2$7 = { class: "logo-in-menu" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", _hoisted_2$7, [
          createVNode(ULogo, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "logo", {}, void 0, true)
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "menu", {}, () => [
          createVNode(UMenu, normalizeProps(guardReactiveProps(_ctx.$attrs)), null, 16)
        ], true)
      ]);
    };
  }
});
var UMenuPanel = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3a777ef7"]]);

var UApp_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const stateMenu = useMenuStore();
    const widthMenu = computed(() => stateMenu.isState ? "200px" : "64px");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(ElConfigProvider), { locale: unref(ru) }, {
          default: withCtx(() => [
            createVNode(unref(ElContainer), { class: "u-app" }, {
              default: withCtx(() => [
                createVNode(unref(ElAside), {
                  class: "u-aside",
                  width: unref(widthMenu)
                }, {
                  default: withCtx(() => [
                    createVNode(UMenuPanel, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
                      logo: withCtx(() => [
                        renderSlot(_ctx.$slots, "logo", {
                          menuOpen: unref(stateMenu).isState
                        }, void 0, true)
                      ]),
                      menu: withCtx(() => [
                        renderSlot(_ctx.$slots, "menu", {}, void 0, true)
                      ]),
                      _: 3
                    }, 16)
                  ]),
                  _: 3
                }, 8, ["width"]),
                createVNode(unref(ElContainer), null, {
                  default: withCtx(() => [
                    createVNode(unref(ElHeader), {
                      height: "42px",
                      class: "u-header"
                    }, {
                      default: withCtx(() => [
                        createVNode(UHeader, null, {
                          logo: withCtx(() => [
                            renderSlot(_ctx.$slots, "logo", {}, void 0, true)
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    }),
                    createVNode(unref(ElMain), { class: "u-main" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["locale"])
      ]);
    };
  }
});
var UApp = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-1fc0f8ae"]]);

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});

var table = '';

var checkbox = '';

var tag = '';

var scrollbar = '';

var tableColumn = '';

const _hoisted_1$7 = { class: "listing" };

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const tableData = [
      {
        id: "12987122",
        name: "Tom",
        amount1: "234",
        amount2: "3.2",
        amount3: 10
      },
      {
        id: "12987123",
        name: "Tom",
        amount1: "165",
        amount2: "4.43",
        amount3: 12
      },
      {
        id: "12987124",
        name: "Tom",
        amount1: "324",
        amount2: "1.9",
        amount3: 9
      },
      {
        id: "12987125",
        name: "Tom",
        amount1: "621",
        amount2: "2.2",
        amount3: 17
      },
      {
        id: "12987126",
        name: "Tom",
        amount1: "539",
        amount2: "4.1",
        amount3: 15
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(unref(ElTable), {
          data: tableData,
          border: "",
          style: { "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(unref(ElTableColumn), {
              prop: "id",
              label: "ID",
              width: "180"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "name",
              label: "Name"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "amount1",
              sortable: "",
              label: "Amount 1"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "amount2",
              sortable: "",
              label: "Amount 2"
            }),
            createVNode(unref(ElTableColumn), {
              prop: "amount3",
              sortable: "",
              label: "Amount 3"
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

var input = '';

const _hoisted_1$6 = {
  viewBox: "0 0 16 18",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /*#__PURE__*/createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13 2.333h.834c.916 0 1.666.75 1.666 1.667v11.666c0 .917-.75 1.667-1.666 1.667H2.167c-.925 0-1.667-.75-1.667-1.666L.51 4a1.66 1.66 0 0 1 1.658-1.667H3V.667h1.667v1.666h6.667V.667H13v1.666ZM2.167 15.667h11.667V7.332H2.167v8.333Zm11.667-10H2.167V4h11.667v1.667Zm-1.667 4.166H8V14h4.167V9.833Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$6
];

function render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3))
}
var Calendar = { render: render$2 };

const _hoisted_1$5 = {
  viewBox: "0 0 18 14",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /*#__PURE__*/createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M1.5.333h15c.459 0 .834.375.834.834v11.666a.836.836 0 0 1-.834.834h-15a.836.836 0 0 1-.833-.833V1.167c0-.459.375-.834.833-.834ZM2.334 12h3.333V2H2.334v10Zm8.333 0H7.334V2h3.333v10Zm1.667 0h3.333V2h-3.333v10Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$5
];

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$2))
}
var Kanban = { render: render$1 };

const _hoisted_1$4 = {
  viewBox: "0 0 16 14",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /*#__PURE__*/createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M.292 2c0-.692.558-1.25 1.25-1.25s1.25.558 1.25 1.25-.558 1.25-1.25 1.25S.292 2.692.292 2Zm0 5c0-.692.558-1.25 1.25-1.25s1.25.558 1.25 1.25-.558 1.25-1.25 1.25S.292 7.692.292 7Zm1.25 3.75c-.692 0-1.25.567-1.25 1.25s.567 1.25 1.25 1.25A1.26 1.26 0 0 0 2.792 12c0-.683-.558-1.25-1.25-1.25Zm14.167 2.083H4.042v-1.666h11.667v1.666Zm-11.667-5h11.667V6.167H4.042v1.666Zm0-5V1.167h11.667v1.666H4.042Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$4
];

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$1))
}
var List = { render: render };

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = shams;

var hasSymbols$1 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$1 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$1.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var implementation = implementation$1;

var functionBind = Function.prototype.bind || implementation;

var bind$1 = functionBind;

var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError$1();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = hasSymbols$1();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$1,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = functionBind;
var hasOwn$1 = src;
var $concat$1 = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace$1(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace$1(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn$1(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$1('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$1('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$1('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat$1([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$1('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn$1(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind$1 = {exports: {}};

(function (module) {

var bind = functionBind;
var GetIntrinsic = getIntrinsic;

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}
}(callBind$1));

var GetIntrinsic$1 = getIntrinsic;

var callBind = callBind$1.exports;

var $indexOf = callBind(GetIntrinsic$1('String.prototype.indexOf'));

var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic$1(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

var __viteBrowserExternal = {};

var __viteBrowserExternal$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  'default': __viteBrowserExternal
}, Symbol.toStringTag, { value: 'Module' }));

var require$$0 = /*@__PURE__*/getAugmentedNamespace(__viteBrowserExternal$1);

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = require$$0.custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

var objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has$3(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has$3(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has$3(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has$3(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has$3(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray$3(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has$3(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray$3(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp$1(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray$3(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp$1(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has$3(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray$3(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has$3(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has$3(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

var GetIntrinsic = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

var sideChannel = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

var formats$3 = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

var formats$2 = formats$3;

var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray$2(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray$2(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has$2.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray$2(target) && !isArray$2(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray$2(target) && isArray$2(source)) {
        source.forEach(function (item, i) {
            if (has$2.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has$2.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats$2.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

var utils$2 = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

var getSideChannel = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray$1 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats$1['default'];
var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils$1.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats$1.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify$1 = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        obj = utils$1.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray$1(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray$1(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults$1;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats$1['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has$1.call(formats$1.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats$1.formatters[format];

    var filter = defaults$1.filter;
    if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};

var stringify_1 = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray$1(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify$1(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

var utils = utils$2;

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

var parse$1 = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};

var stringify = stringify_1;
var parse = parse$1;
var formats = formats$3;

var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

const readQuery = (str) => {
  return lib.parse(str);
};
const stringifyQuery = (obj) => {
  obj.value = valueToString(obj.value);
  return lib.stringify(obj, { encode: true, arrayFormat: "repeat" });
};
const convertStrFilterToObj = (str) => {
  const [field, type, value] = str.split("||");
  return { field, type, value };
};
const getUrlFilters = (query, fieldDefault, typeDefault) => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }
  if (typeof filter === "string") {
    const { field, type, value } = convertStrFilterToObj(filter);
    if (field === fieldDefault && type === typeDefault) {
      return { field, type, value };
    }
  }
  return null;
};
const addUrlFilter = (query, filterObj) => {
  if (query) {
    const { filter } = readQuery(query);
    console.log(readQuery(query));
    if (Array.isArray(filter)) {
      return "";
    }
    if (typeof filter === "string") {
      const { field } = convertStrFilterToObj(filter);
      if (field === filterObj.field) {
        return stringifyQuery({
          filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
        });
      }
    }
    if (!filter) {
      return stringifyQuery({
        filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
      });
    }
    return "";
  }
  return stringifyQuery({
    filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
  });
};
const changeUrlFilter = (query, filterObj) => {
  if (query) {
    const { filter } = readQuery(query);
    if (Array.isArray(filter)) {
      return "";
    }
    if (typeof filter === "string") {
      const { field } = convertStrFilterToObj(filter);
      if (field === filterObj.field) {
        return stringifyQuery({
          filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
        });
      }
    }
    return "";
  } else {
    return stringifyQuery({
      filter: [`${filterObj.field}||${filterObj.type}||${filterObj.value}`]
    });
  }
};
const removeUrlFilter = (query, filterField) => {
  const { filter } = readQuery(query);
  if (Array.isArray(filter)) {
    return;
  }
  if (typeof filter === "string") {
    const { field } = convertStrFilterToObj(filter);
    if (field === filterField) {
      return stringifyQuery({ filter: [] });
    }
  }
  return "";
};
const valueToString = (value) => {
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value;
};

var FiltersView_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1$3 = { class: "filters-view" };
const _hoisted_2$3 = {
  key: 0,
  class: "add-filter__text"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const slots = useSlots();
    const uRoute = inject("useRoute", useRoute);
    const uRouter = inject("useRouter", useRouter);
    const route = uRoute();
    const router = uRouter();
    const [filterSlot] = slots.filters();
    const childrenInFilterSlot = filterSlot.children;
    const filteringSlots = (slots2) => {
      if (Array.isArray(slots2)) {
        return slots2.filter((slot) => slot?.props?.field && slot?.props?.label && slot?.props?.type);
      }
      return [];
    };
    const defaultFilters = () => {
      const currentSlots = filteringSlots(childrenInFilterSlot);
      if (Array.isArray(currentSlots) && currentSlots.length) {
        return currentSlots.map((filter) => {
          return {
            field: filter.props.field,
            label: filter.props.label,
            type: filter.props.type,
            value: filter.props.value ?? null
          };
        });
      }
      return [];
    };
    const filters = reactive([]);
    const filtersList = reactive(defaultFilters());
    const addFilter = (filterObj) => {
      const query = addUrlFilter(route?.query?.filters, filterObj);
      if (query) {
        router.replace({ query: { filters: query } });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "filters", {}, void 0, true),
        createVNode(unref(ElDropdown), { trigger: "click" }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filtersList), (filter, i) => {
                  return openBlock(), createBlock(unref(ElDropdownItem), {
                    key: i,
                    onClick: ($event) => addFilter(filter)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(filter.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass(["add-filter", { "add-filter--more": unref(filters).length }])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(Plus))
                ]),
                _: 1
              }),
              !unref(filters).length ? (openBlock(), createElementBlock("span", _hoisted_2$3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440")) : createCommentVNode("", true)
            ], 2)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var FiltersView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-82dd130e"]]);

var DynamicListing_vue_vue_type_style_index_0_lang = '';

const _hoisted_1$2 = { class: "listings" };
const _hoisted_2$2 = { class: "listings__header" };
const _hoisted_3 = { class: "listings__views" };
const _hoisted_4 = { class: "views" };
const _hoisted_5 = { class: "views__item" };
const _hoisted_6 = { class: "views__item" };
const _hoisted_7 = { class: "views__item" };
const _hoisted_8 = { class: "listings__filters" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const input = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", _hoisted_2$2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("ul", _hoisted_4, [
              createElementVNode("li", _hoisted_5, [
                createVNode(unref(ElIcon), { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(unref(Calendar))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("li", _hoisted_6, [
                createVNode(unref(ElIcon), { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(unref(Kanban))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("li", _hoisted_7, [
                createVNode(unref(ElIcon), { size: 20 }, {
                  default: withCtx(() => [
                    createVNode(unref(List))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createVNode(unref(ElInput), {
            modelValue: input.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
            class: "w-50 m-2",
            placeholder: "\u041F\u043E\u0438\u0441\u043A",
            "suffix-icon": unref(Search)
          }, null, 8, ["modelValue", "suffix-icon"]),
          createElementVNode("div", _hoisted_8, [
            createVNode(FiltersView, null, {
              filters: withCtx(() => [
                renderSlot(_ctx.$slots, "filters")
              ]),
              _: 3
            })
          ])
        ]),
        renderSlot(_ctx.$slots, "listings")
      ]);
    };
  }
});

var popover = '';

var datePicker = '';

const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("span", { class: "filters-view__label" }, "\u0414\u0430\u0442\u0430: ", -1);
const _hoisted_2$1 = { class: "filters-view__value" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    label: null,
    field: null,
    type: null,
    value: { default: null }
  },
  setup(__props) {
    const props = __props;
    const date = ref(null);
    const uRoute = inject("useRoute", useRoute);
    const uRouter = inject("useRouter", useRouter);
    const route = uRoute();
    const router = uRouter();
    const filterVisible = ref(false);
    const filterPopoverVisible = ref(false);
    onMounted(() => {
      if (route?.query?.filters) {
        getFilter(route.query["filters"]);
      }
    });
    watch(() => route?.query?.filters, (val) => {
      getFilter(val);
    });
    const dateString = computed(() => {
      if (Array.isArray(date.value) && date.value?.length) {
        const [first, last] = date.value;
        return `\u0441 ${DateTime.fromJSDate(first).toLocaleString(DateTime.DATE_MED)} \u043F\u043E ${DateTime.fromJSDate(last).toLocaleString(DateTime.DATE_MED)}`;
      }
      if (!Array.isArray(date.value) && date.value) {
        return DateTime.fromJSDate(date.value).toLocaleString(DateTime.DATE_MED);
      }
      return "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0443";
    });
    const getFilter = (query) => {
      if (query) {
        const filterObj = getUrlFilters(query, props.field, props.type);
        if (filterObj?.field === props.field) {
          filterVisible.value = true;
          if (filterObj?.value !== "null") {
            date.value = datesIsoStringToDate(filterObj.value);
          } else {
            filterPopoverVisible.value = true;
          }
        }
      } else {
        filterVisible.value = false;
      }
    };
    const changeFilter = (e) => {
      const filterObj = {
        field: props.field,
        type: props.type,
        value: datesToIsoStrings(e)
      };
      const query = changeUrlFilter(route.query?.filters, filterObj);
      router.replace({ query: { filters: query } });
    };
    const removeFilter = () => {
      const query = removeUrlFilter(route.query?.filters, props.field);
      router.replace({ query: { filters: query } });
    };
    const datesToIsoStrings = (value) => {
      if (Array.isArray(value)) {
        return value.map((val) => DateTime.fromJSDate(val).toISO());
      }
      return DateTime.fromJSDate(value).toISO();
    };
    const datesIsoStringToDate = (value) => {
      const values = value.split(",");
      if (values.length > 1) {
        return values.map((val) => DateTime.fromISO(val).toJSDate());
      }
      return DateTime.fromISO(value).toJSDate();
    };
    const closeFilter = () => {
      removeFilter();
      filterPopoverVisible.value = false;
    };
    const openFilterPopover = () => {
      filterPopoverVisible.value = true;
    };
    const closeFilterPopover = () => {
      if (filterPopoverVisible.value) {
        filterPopoverVisible.value = false;
      }
    };
    const datePickerVisibleChange = (e) => {
      if (!e) {
        filterPopoverVisible.value = false;
      }
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", null, [
        createVNode(unref(ElPopover), {
          visible: filterPopoverVisible.value,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => filterPopoverVisible.value = $event),
          placement: "bottom",
          width: "auto",
          trigger: "click",
          onHide: closeFilterPopover
        }, {
          reference: withCtx(() => [
            createVNode(unref(ElTag), {
              class: "mx-1 filters-view__tag",
              size: "large",
              closable: "",
              onClick: openFilterPopover,
              onClose: closeFilter
            }, {
              default: withCtx(() => [
                _hoisted_1$1,
                createElementVNode("span", _hoisted_2$1, toDisplayString(unref(dateString)), 1)
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(ElDatePicker), {
              modelValue: date.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => date.value = $event),
              type: "daterange",
              onChange: changeFilter,
              onVisibleChange: datePickerVisibleChange
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["visible"])
      ], 512)), [
        [vShow, filterVisible.value]
      ]);
    };
  }
});

const _hoisted_1 = { class: "filters-view__label" };
const _hoisted_2 = { class: "filters-view__value" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    label: null,
    field: null,
    type: null,
    value: { type: Boolean, default: null },
    trueText: { default: "\u0414\u0430" },
    falseText: { default: "\u041D\u0435\u0442" }
  },
  setup(__props) {
    const props = __props;
    const uRoute = inject("useRoute", useRoute);
    const uRouter = inject("useRouter", useRouter);
    const route = uRoute();
    const router = uRouter();
    const dropdown = ref();
    const filterValue = ref(false);
    const filterVisible = ref(false);
    onMounted(() => {
      if (route?.query?.filters) {
        getFilter(route.query["filters"]);
      }
    });
    watch(() => route?.query?.filters, (val) => {
      getFilter(val);
    });
    const getFilter = (query) => {
      if (query) {
        const filterObj = getUrlFilters(query, props.field, props.type);
        if (filterObj?.field === props.field) {
          filterVisible.value = true;
          if (filterObj?.value !== "null") {
            filterValue.value = stringToBoolean(filterObj.value);
          } else {
            dropdown.value.handleOpen();
          }
        }
      } else {
        filterVisible.value = false;
      }
    };
    const stringToBoolean = (value) => {
      return value === "true";
    };
    const changeFilter = (e) => {
      const filterObj = {
        field: props.field,
        type: props.type,
        value: e
      };
      const query = changeUrlFilter(route?.query?.filters, filterObj);
      router.replace({ query: { filters: query } });
    };
    const removeFilter = () => {
      const query = removeUrlFilter(route?.query?.filters, props.field);
      router.replace({ query: { filters: query } });
    };
    const closeFilter = () => {
      dropdown.value.handleClose();
      removeFilter();
    };
    const openFilterPopover = () => {
      dropdown.value.handleOpen();
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", null, [
        createVNode(unref(ElDropdown), {
          ref_key: "dropdown",
          ref: dropdown,
          trigger: "click"
        }, {
          dropdown: withCtx(() => [
            createVNode(unref(ElDropdownMenu), null, {
              default: withCtx(() => [
                createVNode(unref(ElDropdownItem), {
                  onClick: _cache[0] || (_cache[0] = ($event) => changeFilter(true))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.trueText), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(ElDropdownItem), {
                  onClick: _cache[1] || (_cache[1] = ($event) => changeFilter(false))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.falseText), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(ElTag), {
              class: "mx-1 filters-view__tag",
              size: "large",
              closable: "",
              onClick: openFilterPopover,
              onClose: closeFilter
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_1, toDisplayString(props.label) + ": ", 1),
                createElementVNode("span", _hoisted_2, toDisplayString(filterValue.value ? props.trueText : props.falseText), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 512)
      ], 512)), [
        [vShow, filterVisible.value]
      ]);
    };
  }
});

const UI = {
  install(Vue, options) {
    Vue.component("UApp", UApp);
    Vue.component("TableListing", _sfc_main$4);
    Vue.component("DynamicListing", _sfc_main$2);
    Vue.component("DateFilter", _sfc_main$1);
    Vue.component("BooleanFilter", _sfc_main);
    Vue.component("ApiListings", _sfc_main$5);
    Vue.provide("useRouter", options.useRouter);
    Vue.provide("useRoute", options.useRoute);
  }
};

export { UI as default };
