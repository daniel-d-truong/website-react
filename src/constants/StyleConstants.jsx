import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    main: {
        marginLeft: "18em"
    }, 
    wrapper: {
        position: "relative",
    },
    fullscreen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh" 
    }
});