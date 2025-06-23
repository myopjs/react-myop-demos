import { MyopIcon } from "../Icons/MyopIcon.tsx";
import { ReactIcon } from "../Icons/ReactIcon.tsx";
import { AnimalIcon } from "../Icons/AnimalIcon.tsx";

interface IPropsType {
    onMaybeClicked?: () => void;
    onYesClicked?: () => void;
}

export const DemoComponent2 = (props: IPropsType) => {

    const localFunction = () => {
        alert('local function, prop not received');
    };

    return (
        <div className="component-container">
            <div className="component-inner-container">

                <div className="content-wrapper">

                    <AnimalIcon />

                    <div className="content-text">
                        <h2 className="title">
                            Hey! <br />
                            I’m a Nice React Component.
                        </h2>
                        <p className="subtitle">
                            Push me to production with Myop
                        </p>
                    </div>

                    <div className="buttons-container">
                        <button className="btn btn-outline"
                            myoop-id="button1"
                            onClick={props.onMaybeClicked ? props.onMaybeClicked : localFunction}>
                            ,: maybe
                        </button>

                        <button className="btn btn-primary"
                            myoop-id="button2"
                            onClick={props.onYesClicked ? props.onYesClicked : localFunction}>
                            (: yes
                        </button>
                    </div>
                </div>

                <div className="icons-container">
                    <span className="icon react-icon">
                        <ReactIcon />
                    </span>

                    <span className="icon myop-icon">
                        <MyopIcon />
                    </span>
                </div>
            </div>
        </div>
    );
};
