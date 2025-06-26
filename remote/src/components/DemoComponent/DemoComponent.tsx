import {MyopIcon} from "../Icons/MyopIcon.tsx";
import {ReactIcon} from "../Icons/ReactIcon.tsx";

interface IPropsType {
    onLikeClicked?: () => void;
    onCoolClicked?: () => void;
}

export const DemoComponent = (props: IPropsType) => {

    const localFunction = () => {
        alert('local function, prop not received');
    };

    return (
        <div className="component-container">
            <div className="component-inner-container">
                <div className="icons-container">
                    <span className="icon react-icon">
                        <ReactIcon/>
                    </span>

                    <span className="icon myop-icon">
                        <MyopIcon/>
                    </span>
                </div>

                <div className="content-text">
                    <h2 className="title">Hey! I’m a Nice React Component.</h2>
                    <p className="subtitle">Push me to production with Myop</p>
                </div>

                <div className="buttons-container">
                    <button className="btn btn-outline"
                            myop-id="button1"
                            onClick={props.onLikeClicked ? props.onLikeClicked : localFunction}>
                        Like it!
                    </button>

                    <button className="btn btn-primary"
                            myop-id="button2"
                            onClick={props.onCoolClicked ? props.onCoolClicked : localFunction}>
                        Cool
                    </button>
                </div>
            </div>
        </div>
    );
};
