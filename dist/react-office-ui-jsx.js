"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { OfficeUIButton } from "./OfficeUIButton";
// import { OfficeUIChoiceField } from "./OfficeUIChoiceField";
// import { OfficeUIToggle } from "./OfficeUIToggle";

/// <reference path="../typings/tsd.d.ts" />
var BUTTON_TYPES = ["command", "compound", "hero", "primary"];

var OfficeUIButton = function (_React$Component) {
    _inherits(OfficeUIButton, _React$Component);

    function OfficeUIButton() {
        _classCallCheck(this, OfficeUIButton);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OfficeUIButton).apply(this, arguments));
    }

    _createClass(OfficeUIButton, [{
        key: "render",
        value: function render() {
            var _props = this.props;
            var disabled = _props.disabled;
            var type = _props.type;

            var classList = classNames(_defineProperty({
                "ms-Button": true,
                "is-disabled": disabled
            }, "ms-Button--" + type, type));
            return React.createElement("button", _extends({}, this.props, { type: "button", className: classList }));
        }
    }]);

    return OfficeUIButton;
}(React.Component);

OfficeUIButton.propTypes = {
    type: React.PropTypes.oneOf(BUTTON_TYPES),
    disabled: React.PropTypes.bool
};
var OfficeUIButtonIcon = function OfficeUIButtonIcon(props) {
    return React.createElement("span", _extends({}, props, { className: "ms-Button-icon" }));
};
var OfficeUIButtonLabel = function OfficeUIButtonLabel(props) {
    return React.createElement("span", _extends({}, props, { className: "ms-Button-label" }));
};
var OfficeUIButtonDescription = function OfficeUIButtonDescription(props) {
    return React.createElement("span", _extends({}, props, { className: "ms-Button-description" }));
};

/// <reference path="../typings/tsd.d.ts" />
var OfficeUICallout = function OfficeUICallout(props) {
    var type = props.type;
    var title = props.title;
    var content = props.content;

    var classList = classNames(_defineProperty({
        "ms-Callout": true
    }, "ms-Callout--" + type, type));
    return React.createElement(
        "div",
        { className: classList },
        React.createElement(
            "div",
            { className: "ms-Callout-main" },
            React.createElement(
                "div",
                { className: "ms-Callout-header" },
                React.createElement(
                    "p",
                    { className: "ms-Callout-title" },
                    title
                )
            ),
            React.createElement(
                "button",
                { className: "ms-Callout-close" },
                React.createElement("i", { className: "ms-Icon ms-Icon--x" })
            ),
            React.createElement(
                "div",
                { className: "ms-Callout-inner" },
                React.createElement(
                    "div",
                    { className: "ms-Callout-content" },
                    React.createElement(
                        "p",
                        { className: "ms-Callout-subText" },
                        content
                    )
                ),
                React.createElement(
                    "div",
                    { className: "ms-Callout-actions" },
                    props.children
                )
            )
        )
    );
};

/// <reference path="../typings/tsd.d.ts" />
var OfficeUIChoiceField = function OfficeUIChoiceField(props) {
    var inputId = props.id + "_input";
    return React.createElement(
        "div",
        { className: "ms-ChoiceField" },
        React.createElement("input", { type: props.type, id: inputId, className: "ms-ChoiceField-input" }),
        React.createElement(
            "label",
            { htmlFor: inputId, className: "ms-ChoiceField-field" },
            React.createElement("span", _extends({}, props, { className: "ms-Label" }))
        )
    );
};

/// <reference path="../typings/tsd.d.ts" />
var OfficeUISpinner = function OfficeUISpinner(props) {
    var parentSize = 20;
    var offsetSize = 0.2;
    var numCircles = 8;
    var offset = parentSize * offsetSize;
    var angle = 0;
    var step = 2 * Math.PI / numCircles;
    var radius = (parentSize - offset) * 0.5;
    var i = numCircles;
    var circles = [];
    while (i--) {
        var circleStyles = {
            width: parentSize * offsetSize + "px",
            height: parentSize * offsetSize + "px",
            left: Math.round(parentSize * 0.5 + radius * Math.cos(angle) - parentSize * offsetSize * 0.5) - offset * 0.5,
            top: Math.round(parentSize * 0.5 + radius * Math.sin(angle) - parentSize * offsetSize * 0.5) - offset * 0.5
        };
        angle += step;
        circles.push(circleStyles);
    }
    return React.createElement(
        "div",
        _extends({}, props, { className: "ms-Spinner" }),
        circles.map(function (c, i) {
            return React.createElement("div", { key: i, className: "ms-Spinner-circle", style: c });
        })
    );
};

/// <reference path="../typings/tsd.d.ts" />
var OfficeUITable = function OfficeUITable(props) {
    return React.createElement("table", _extends({}, props, { className: "ms-Table" }));
};

/// <reference path="../typings/tsd.d.ts" />
var OfficeUITextField = function OfficeUITextField(props) {
    var inputId = props.id + "_input";
    var type = props.type;
    var description = props.description;

    var classList = classNames(_defineProperty({
        "ms-TextField": true
    }, "ms-TextField--" + type, type));
    var input = type === "multiline" ? React.createElement("textarea", { className: "ms-TextField-field" }) : React.createElement("input", { type: "text", id: inputId, className: "ms-TextField-field" });
    return React.createElement(
        "div",
        { id: props.id, className: classList },
        React.createElement("label", _extends({}, props, { htmlFor: inputId, className: "ms-Label" })),
        input,
        React.createElement(
            "span",
            { className: "ms-TextField-description" },
            description
        )
    );
};

/// <reference path="../typings/tsd.d.ts" />
var OfficeUIToggle = function OfficeUIToggle(props) {
    var inputId = props.id + "_input";
    return React.createElement(
        "div",
        { id: props.id, className: "ms-Toggle" },
        React.createElement(
            "span",
            { className: "ms-Toggle-description" },
            props.children
        ),
        React.createElement("input", { type: "checkbox", id: inputId, className: "ms-Toggle-input" }),
        React.createElement(
            "label",
            { htmlFor: inputId, className: "ms-Toggle-field" },
            React.createElement(
                "span",
                { className: "ms-Label ms-Label--off" },
                props.offLabel
            ),
            React.createElement(
                "span",
                { className: "ms-Label ms-Label--on" },
                props.onLabel
            )
        )
    );
};
//# sourceMappingURL=react-office-ui-jsx.js.map
