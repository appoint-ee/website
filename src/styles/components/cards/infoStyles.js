
const style = {
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: '20%',
    },
    detail: {
        listStyleType: 'none',
        '& li': {
            marginTop: '5px',
            fontSize: '15px',
            fontWeight: '600',
            color: '#00000096',
            textShadow: '2px 2px 15px black',
        },
    },
    description: {
        marginTop: '50px',
        textAlign: 'center',

        '& p': {
            color: 'white',
            fontSize: '24px',
            textShadow: '3px 3px 10px black',
        },
    },
};

export default style;
