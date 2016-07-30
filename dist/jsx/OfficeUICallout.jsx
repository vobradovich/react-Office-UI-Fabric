/// <reference path="../typings/tsd.d.ts" />
const OfficeUICallout = (props) => {
    const { type, title, content } = props;
    var classList = classNames({
        "ms-Callout": true,
        [`ms-Callout--${type}`]: type
    });
    return (<div className={classList}>
            <div className="ms-Callout-main">
                <div className="ms-Callout-header">
                    <p className="ms-Callout-title">{title}</p>
                </div>
                <button className="ms-Callout-close">
                    <i className="ms-Icon ms-Icon--x"></i>
                </button>
                <div className="ms-Callout-inner">
                    <div className="ms-Callout-content">
                        <p className="ms-Callout-subText">{content}</p>
                    </div>
                    <div className="ms-Callout-actions">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>);
};
