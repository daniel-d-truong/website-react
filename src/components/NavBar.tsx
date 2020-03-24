import React, { useEffect, useState } from 'react';
import {createUseStyles} from 'react-jss';

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

// Creates styles using JSS.
const useStyles = createUseStyles({
    sidebar: {
        padding: {
            top: '2.5em',
            right: '2.5em',
            bottom: '0.5em',
            left: '2.5em'
        }, 
        background: '#dff6f0',
        cursor: 'default',
        height: '100vh',
        left: '0',
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'fixed',
        textAlign: 'right',
        top: '0',
        width: '18em',
        zIndex: '10000'
    }, 
    inner: {
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
        padding: '0',
        '& li': {
            transform: 'translateY(0)',
            transition: 'opacity 0.15s ease, transform 0.75s ease',
            margin: {
                top: '1.5em',
                right: '0',
                bottom: '0',
                left: '0'
            },
            '& a': {
                color: '#333333',
                fontSize: '24px',
                textDecoration: 'none'
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

// Functional component.
const NavBar: React.FC = () => {
    const classes = useStyles();
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
    }, [])

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