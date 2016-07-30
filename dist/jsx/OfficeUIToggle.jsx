/// <reference path="../typings/tsd.d.ts" />
const OfficeUIToggle = (props) => {
    var inputId = props.id + "_input";
    return (<div id={props.id} className="ms-Toggle">
            <span className="ms-Toggle-description">{props.children}</span>
            <input type="checkbox" id={inputId} className="ms-Toggle-input"/>
            <label htmlFor={inputId} className="ms-Toggle-field">
                <span className="ms-Label ms-Label--off">{props.offLabel}</span>
                <span className="ms-Label ms-Label--on">{props.onLabel}</span>
            </label>
        </div>);
};
