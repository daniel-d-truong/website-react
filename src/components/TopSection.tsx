import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    topScreen: {
        height: "100vh"
    },
    inner: {
        textAlign: "center",
        color: "white",
        fontSize: "16px",
        backgroundColor: "rgba(0,0,0,0.4)",
        height: "10em",
        margin: {
            top: "5px"
        },
        "& h1": {
            fontSize: "46px"
        },
        verticalAlign: "middle"
    }
});

const TopSection: React.FC = () => {
    const classes = useStyle();
    return (
        <section className={classes.topScreen + " photo"}>
            <div className={classes.inner}>
                <h1>Daniel Truong</h1>
                <p>Hi! I'm excited to meet you! Learn about me below.</p>
                <div className="text">
                    <span>Who am I?</span>
                </div>
            </div>
        </section>
    )
};

export default TopSection;