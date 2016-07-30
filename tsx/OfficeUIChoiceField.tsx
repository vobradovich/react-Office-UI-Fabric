/// <reference path="../typings/tsd.d.ts" />

const OfficeUIChoiceField = (props) => {
    var inputId = props.id + "_input";
    return (
        <div className="ms-ChoiceField">
            <input type={props.type} id={inputId} className="ms-ChoiceField-input" />
            <label htmlFor={inputId} className="ms-ChoiceField-field">
                <span {...props} className="ms-Label"></span>
            </label>
        </div>
    );    
};