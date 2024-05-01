const base = {
    button: {
        width: '40%',
        padding: '15px',
        boxShadow: '5px 5px 20px 0px black',
        textAlign: 'center',
        borderRadius: '10px',
        fontSize: '20px',

        '&:hover': {
            width: '41%',
            cursor: 'pointer',
            boxShadow: '7px 8px 12px 3px black',
        },
    },
};

const styles = {
    button: {
        primary: {
            ...base.button,
            color: 'white',
            border: '1px #3e38384a solid',
            backgroundColor: '#a52a2a94',
        },
        cancel: {
            ...base.button,
            color: '#3e38384a',
            border: '1px #3e38384a solid',
            backgroundColor: 'white',
        },
    },
};

export default styles;
