import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { NavBarProps } from '../constants/PropConstants';
// import { useMediaQuery } from 'react-responsive';

const createTransitions: string | any = () => {
    const obj: string | any = {};
    for (let i: number = 1; i < 20; i++) {
        obj[`& li:nth-child(${i})`] = {
            transitionDelay: `${0.25 + i*0.2}s`
        }
    }
    console.log(obj);
    return obj;
};

// Functional component.
const NavBar: React.FC<NavBarProps> = (props) => {

    // Creates styles using JSS.
    const useFullScreenStyle = createUseStyles({
        sidebar: {
            background: '#dff6f0',
            cursor: 'default',
            flex: '0 0 65%',
            height: '100vh',
            left: '0',
            overflowX: 'hidden',
            overflowY: 'auto',
            position: 'fixed',
            textAlign: 'right',
            top: '0',
            width: props.width + 'em',
            zIndex: '10000'
        }, 
        inner: {
            padding: {
                top: '0em',
                right: '0em',
                bottom: '0em',
                left: '0em'
            }, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transform: 'translateY(0)',
            transition: 'opacity 1s case',
            minHeight: '100%',
            opacity: 1,
            width: '100%'
        },
        listSection: {
            ...createTransitions(), 
            listStyle: 'none',
            textAlign: 'center',
            padding: '0',
            '& li': {
                transform: 'translateY(0)',
                transition: 'opacity 0.15s ease-out, transform 0.75s ease',
                margin: {
                    top: '1.5em',
                    right: '0',
                    bottom: '1.5em',
                    left: '0'
                },
                // Link animations and styling.
                '& a': {
                    color: '#333333',
                    fontSize: '24px',
                    textDecoration: 'none',
                    position: 'relative',
                },
                '& a:hover': {
                    color: '#000'
                }, 
                '& a:before': {
                    content: "", 
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#000",
                    visibility: "hidden",
                    transform: "scaleX(0)",
                    transition: "all 0.3s ease-in-out 0s"
                },
                '& a:hover:before': {
                    visibility: "visible",
                    transform: "scaleX(1)"
                }
            }
        }, 
        visible: {
            opacity: 1
        }, 
        invisible: {
            opacity: 0
        }
    });

    const classes = useFullScreenStyle();
    const [loaded, setLoaded] = useState(false);

    const tabNames = [
        'Welcome',
        'Experience',
        'Projects',
        'Education',
        'Contact Me',
        'Resume'
    ];

    const navList = tabNames.map( (tabName, key) => {
        const id = "#".concat(tabName.split(" ")[0]);
        return (<li key={key} className={ loaded ? classes.visible : classes.invisible }><a href={id}>{tabName}</a></li>)
    });

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className={classes.sidebar}>
            <div className={classes.inner}>
                <ul className={classes.listSection}>
                    {navList}
                </ul>
            </div>
        </section>
    )
}

export default NavBar;