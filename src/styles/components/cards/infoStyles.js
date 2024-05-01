import {fontWeight} from "@mui/system";

const style = {
    cardContainer: {
        width: '28%',
    },
    cardPosition: {
        position: "relative",
        marginLeft: "40px",
        marginTop: "40px",
        width: "100%",
    },
    avatar: {
        width: '80px',
        borderRadius: '50px',
        position: 'absolute',
        top: '-40px',
        left: '-40px',
    },
    name: {
        fontSize: '28px',
        fontWeight: '600',
        color: '#00000096',
        textShadow: '2px 2px 15px black',
    },
    separator: {
        width: '100%',
        border: '1px solid #00000096',
    },
    detail: {
        padding: '10px 30px 10px 30px',
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

        '& span': {
            marginTop: '5px',
            fontSize: '20px',
            color: '#00000096',
            textShadow: '2px 2px 15px black',
        },
    },
    description: {
        textAlign: 'center',

        '& p': {
            color: 'white',
            fontSize: '24px',
            textShadow: '3px 3px 10px black',
        },
    },
};

export default style;
