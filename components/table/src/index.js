/**
 * @omiu/table v0.0.1 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

(function (omi) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    "use strict";

var css = ":host {\n  display: block; }\n\n.o-table {\n  background: white;\n  margin: auto;\n  padding: 5px;\n  width: 100%;\n  animation: float 5s infinite;\n  border-spacing: 0;\n  border-collapse: collapse;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 400; }\n\n.o-table-checkbox th:first-child,\n.o-table-checkbox td:first-child {\n  padding: 2px 40px 2px 16px; }\n\nth {\n  border-bottom: 1px solid #E0E0E0;\n  text-align: left;\n  vertical-align: middle;\n  padding: 14px 40px 14px 16px;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.75rem;\n  line-height: 1.3125rem;\n  font-weight: 500; }\n\n.o-table-border td,\n.o-table-border th {\n  border-right: 1px solid #ebeef5; }\n\n.o-table-border td:first-child,\n.o-table-border th:first-child {\n  border-left: 1px solid #ebeef5; }\n\n.o-table-border th {\n  border-top: 1px solid #ebeef5; }\n\ntr {\n  border-bottom: 1px solid #E0E0E0; }\n\ntr:hover td {\n  background: #f5f5f5; }\n\ntd {\n  text-align: left;\n  vertical-align: middle;\n  font-size: 0.875rem;\n  padding: 14px 40px 14px 16px; }\n\na {\n  text-decoration: none; }\n";

    var Table = /** @class */ (function (_super) {
        __extends(Table, _super);
        function Table() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // static propTypes = {
            //   dataSource: Object,
            //   columns: Object
            // }
            _this.removeItem = function (item) {
                _this.props.dataSource.splice(_this.props.dataSource.indexOf(item), 1);
                _this.update();
            };
            _this._changeHandlerTh = function (e, item) {
                _this.fire('changeall', { item: item, checked: e.detail });
                _this.props.dataSource.forEach(function (item) {
                    item.checked = e.detail;
                });
                _this.update();
            };
            _this._changeHandlerTd = function (e, item) {
                _this.fire('change', { item: item, checked: e.detail });
                item.checked = e.detail;
                _this.update();
            };
            return _this;
        }
        Table.prototype.beforeRender = function () {
            if (this.dataSource) {
                this.props.dataSource = this.dataSource;
            }
            if (this.columns) {
                this.props.columns = this.columns;
            }
            if (this.hasOwnProperty('checkbox')) {
                this.props.checkbox = this.checkbox;
            }
            if (this.hasOwnProperty('border')) {
                this.props.border = this.border;
            }
        };
        Table.prototype._getCheckedState = function () {
            var c = 0, uc = 0;
            for (var i = 0, len = this.props.dataSource.length; i < len; i++) {
                if (this.props.dataSource[i].checked) {
                    c++;
                }
                else {
                    uc++;
                }
                if (c > 0 && uc > 0) {
                    return { 'indeterminate': true };
                }
            }
            if (c === 0)
                return { 'unchecked': true };
            return { 'checked': true };
        };
        Table.prototype.render = function (props) {
            var _this = this;
            if (!props.columns)
                return;
            if (!props.dataSource)
                return;
            return (omi.h("table", __assign({}, omi.extractClass(props, 'o-table', {
                'o-table-checkbox': props.checkbox,
                'o-table-border': props.border
            })),
                omi.h("thead", null,
                    omi.h("tr", null, props.columns.map(function (item, index) {
                        var obj = {};
                        var width = item.width;
                        if (width !== undefined) {
                            obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                        }
                        return omi.h("th", __assign({}, obj, { class: "text-left" }),
                            index === 0 && props.checkbox && omi.h("o-checkbox", __assign({}, _this._getCheckedState(), { onChange: function (_) { return _this._changeHandlerTh(_, item); } })),
                            item.title);
                    }))),
                omi.h("tbody", { class: "table-hover" }, props.dataSource.map(function (item) { return (omi.h("tr", null, props.columns.map(function (subItem, subIndex) {
                    var obj = {};
                    var width = subItem.width;
                    if (width !== undefined) {
                        obj.style = { width: typeof width === 'number' ? width + 'px' : width };
                    }
                    return omi.h("td", __assign({}, obj, { class: "text-left" }),
                        subIndex === 0 && props.checkbox && omi.h("o-checkbox", { checked: item.checked, onChange: function (_) { return _this._changeHandlerTd(_, item); } }),
                        subItem.render ? subItem.render(item) : item[subItem.key]);
                }))); }))));
        };
        Table.css = css;
        Table = __decorate([
            omi.tag('o-table')
        ], Table);
        return Table;
    }(omi.WeElement));

    return Table;

}(omi));
//# sourceMappingURL=index.js.map
