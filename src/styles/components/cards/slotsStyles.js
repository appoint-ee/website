
const style = {
    boxes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '50px',
    },
    box: {
        width: '25%',
        border: '1px #3e38384a solid',
        borderRadius: '10px',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
        textShadow: '2px 2px 15px black',
        boxShadow: '5px 5px 20px 0px black',

        '&:hover': {
            width: '26%',
            cursor: 'pointer',
            boxShadow: '7px 8px 12px 3px black',
        },
        '&.selected': {
            color: 'white',
            backgroundColor: '#a52a2a94',
        },
        '&.booked': {
            color: '#ffffff80',
            background: '#80808073',
        },
    },
};

export default style;
