import './ReactDemo.css';
import {ReactIcon} from './ReactIcon.tsx';
import {MyopIcon} from './MyopIcon.tsx';

interface IPropsType {
    onLikeClicked?: () => void;
    onCoolClicked?: () => void;
}

export const ReactDemo = (props: IPropsType) => {

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
                    <h2 className="title">Nice Component!</h2>
                    <p className="subtitle">Made with Myop</p>
                </div>

                <div className="buttons-container">
                    <button className="btn btn-outline"
                            onClick={props.onLikeClicked ? props.onLikeClicked : localFunction}>
                        Like it!
                    </button>

                    <button className="btn btn-primary"
                            onClick={props.onCoolClicked ? props.onCoolClicked : localFunction}>
                        Cool
                    </button>
                </div>
            </div>
        </div>
    );
};
