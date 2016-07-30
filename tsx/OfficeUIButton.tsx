/// <reference path="../typings/tsd.d.ts" />

const BUTTON_TYPES = [
    "command",
    "compound",
    "hero",
    "primary",
]

class OfficeUIButton extends React.Component<any, any> {
    static propTypes = {
        type: React.PropTypes.oneOf(BUTTON_TYPES),
        disabled: React.PropTypes.bool
    }

    render() {
        const {
            disabled,
            type
        } = this.props

        var classList = classNames({
            "ms-Button": true,
            "is-disabled": disabled,
            [`ms-Button--${type}`]: type
        });
        return (
            <button {...this.props} type="button" className={classList}>
            </button>
        );
    }
}

const OfficeUIButtonIcon = (props) => (
    <span {...props} className="ms-Button-icon"></span>
);

const OfficeUIButtonLabel = (props) => (
    <span {...props} className="ms-Button-label"></span>
);

const OfficeUIButtonDescription = (props) => (
    <span {...props} className="ms-Button-description"></span>
);

