const base = {
    button: {
        width: "100%",
        padding: "15px",
        boxShadow: "5px 5px 5px 0px rgb(0, 0, 0, 0.4)",
        textAlign: "center",
        border: "unset",
        borderRadius: "10px",
        fontSize: "20px",

        "&:hover": {
            width: "101%",
            cursor: "pointer",
            boxShadow: "5px 5px 5px 0px black",
        },
    },
};

const styles = {
    button: {
        primary: {
            ...base.button,
            color: "white",
            backgroundColor: "#a52a2a94",
        },
        cancel: {
            ...base.button,
            color: "#3e38384a",
            backgroundColor: "white",
        },
    },
};

export default styles;
