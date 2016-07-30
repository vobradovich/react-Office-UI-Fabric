// import { OfficeUIButton } from "./OfficeUIButton";
// import { OfficeUIChoiceField } from "./OfficeUIChoiceField";
// import { OfficeUIToggle } from "./OfficeUIToggle";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/// <reference path="../typings/tsd.d.ts" />
var BUTTON_TYPES = [
    "command",
    "compound",
    "hero",
    "primary",
];
var OfficeUIButton = (function (_super) {
    __extends(OfficeUIButton, _super);
    function OfficeUIButton() {
        _super.apply(this, arguments);
    }
    OfficeUIButton.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, type = _a.type;
        var classList = classNames((_b = {
                "ms-Button": true,
                "is-disabled": disabled
            },
            _b["ms-Button--" + type] = type,
            _b
        ));
        return (React.createElement("button", __assign({}, this.props, {type: "button", className: classList})));
        var _b;
    };
    OfficeUIButton.propTypes = {
        type: React.PropTypes.oneOf(BUTTON_TYPES),
        disabled: React.PropTypes.bool
    };
    return OfficeUIButton;
}(React.Component));
var OfficeUIButtonIcon = function (props) { return (React.createElement("span", __assign({}, props, {className: "ms-Button-icon"}))); };
var OfficeUIButtonLabel = function (props) { return (React.createElement("span", __assign({}, props, {className: "ms-Button-label"}))); };
var OfficeUIButtonDescription = function (props) { return (React.createElement("span", __assign({}, props, {className: "ms-Button-description"}))); };
/// <reference path="../typings/tsd.d.ts" />
var OfficeUICallout = function (props) {
    var type = props.type, title = props.title, content = props.content;
    var classList = classNames((_a = {
            "ms-Callout": true
        },
        _a["ms-Callout--" + type] = type,
        _a
    ));
    return (React.createElement("div", {className: classList}, 
        React.createElement("div", {className: "ms-Callout-main"}, 
            React.createElement("div", {className: "ms-Callout-header"}, 
                React.createElement("p", {className: "ms-Callout-title"}, title)
            ), 
            React.createElement("button", {className: "ms-Callout-close"}, 
                React.createElement("i", {className: "ms-Icon ms-Icon--x"})
            ), 
            React.createElement("div", {className: "ms-Callout-inner"}, 
                React.createElement("div", {className: "ms-Callout-content"}, 
                    React.createElement("p", {className: "ms-Callout-subText"}, content)
                ), 
                React.createElement("div", {className: "ms-Callout-actions"}, props.children)))
    ));
    var _a;
};
/// <reference path="../typings/tsd.d.ts" />
var OfficeUIChoiceField = function (props) {
    var inputId = props.id + "_input";
    return (React.createElement("div", {className: "ms-ChoiceField"}, 
        React.createElement("input", {type: props.type, id: inputId, className: "ms-ChoiceField-input"}), 
        React.createElement("label", {htmlFor: inputId, className: "ms-ChoiceField-field"}, 
            React.createElement("span", __assign({}, props, {className: "ms-Label"}))
        )));
};
/// <reference path="../typings/tsd.d.ts" />
var OfficeUISpinner = function (props) {
    var parentSize = 20;
    var offsetSize = 0.2;
    var numCircles = 8;
    var offset = parentSize * offsetSize;
    var angle = 0;
    var step = (2 * Math.PI) / numCircles;
    var radius = (parentSize - offset) * 0.5;
    var i = numCircles;
    var circles = [];
    while (i--) {
        var circleStyles = {
            width: parentSize * offsetSize + "px",
            height: parentSize * offsetSize + "px",
            left: Math.round(parentSize * 0.5 + radius * Math.cos(angle) - parentSize * offsetSize * 0.5) - offset * 0.5,
            top: Math.round(parentSize * 0.5 + radius * Math.sin(angle) - parentSize * offsetSize * 0.5) - offset * 0.5,
        };
        angle += step;
        circles.push(circleStyles);
    }
    return (React.createElement("div", __assign({}, props, {className: "ms-Spinner"}), circles.map(function (c, i) { return React.createElement("div", {key: i, className: "ms-Spinner-circle", style: c}); })));
};
/// <reference path="../typings/tsd.d.ts" />
var OfficeUITable = function (props) { return (React.createElement("table", __assign({}, props, {className: "ms-Table"}))); };
/// <reference path="../typings/tsd.d.ts" />
var OfficeUITextField = function (props) {
    var inputId = props.id + "_input";
    var type = props.type, description = props.description;
    var classList = classNames((_a = {
            "ms-TextField": true
        },
        _a["ms-TextField--" + type] = type,
        _a
    ));
    var input = type === "multiline" ? (React.createElement("textarea", {className: "ms-TextField-field"})) : (React.createElement("input", {type: "text", id: inputId, className: "ms-TextField-field"}));
    return (React.createElement("div", {id: props.id, className: classList}, 
        React.createElement("label", __assign({}, props, {htmlFor: inputId, className: "ms-Label"})), 
        input, 
        React.createElement("span", {className: "ms-TextField-description"}, description)));
    var _a;
};
/// <reference path="../typings/tsd.d.ts" />
var OfficeUIToggle = function (props) {
    var inputId = props.id + "_input";
    return (React.createElement("div", {id: props.id, className: "ms-Toggle"}, 
        React.createElement("span", {className: "ms-Toggle-description"}, props.children), 
        React.createElement("input", {type: "checkbox", id: inputId, className: "ms-Toggle-input"}), 
        React.createElement("label", {htmlFor: inputId, className: "ms-Toggle-field"}, 
            React.createElement("span", {className: "ms-Label ms-Label--off"}, props.offLabel), 
            React.createElement("span", {className: "ms-Label ms-Label--on"}, props.onLabel))));
};

//# sourceMappingURL=react-office-ui.js.map
