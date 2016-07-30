/// <reference path="../typings/tsd.d.ts" />
const OfficeUITextField = (props) => {
    var inputId = props.id + "_input";
    const { type, description } = props;
    var classList = classNames({
        "ms-TextField": true,
        [`ms-TextField--${type}`]: type
    });
    var input = type === "multiline" ? (<textarea className="ms-TextField-field"></textarea>) : (<input type="text" id={inputId} className="ms-TextField-field"/>);
    return (<div id={props.id} className={classList}>
            <label {...props} htmlFor={inputId} className="ms-Label"/>
            {input}
            <span className="ms-TextField-description">{description}</span>
        </div>);
};
