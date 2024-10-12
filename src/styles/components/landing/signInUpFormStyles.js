const style = {
    overlay: {
        position: "absolute",
        overflow: "hidden",
        backgroundColor: "rgb(128 128 128 / 40%)",

        transitionProperty: "width, height, top, left",
        transitionDuration: "0.5s",
        transitionTimingFunction: "linear",

        "&.initial": {
            top: "50%",
            left: "50%",
            width: "0px",
            height: "0px",
        },
        "&.open": {
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
        },
    },
    container: {
        backgroundColor: "white",
        borderRadius: "20px",
        maxWidth: "600px",
        padding: "40px",

        display: "flex",
        flexDirection: "column",
        gap: "40px", 
    },
    header: {
        display: "flex",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        gap: "20px",
    },
    title: {
        width: "100%",
        borderBottom: "1px solid #90A4AE",
        fontSize: "36px",
        color: "#90A4AE",
        textAlign: "center",
        cursor: "pointer",
        paddingBottom: "5px",

        "&.active": {
            textShadow: "0px 2px 4px rgb(0, 0, 0, 0.25)",
            borderBottom: "2px solid #90A4AE",
            fontWeight: "bold",
        },
    },
    form: {
        padding: "0px 100px 0px 100px",
    },
    google: {
        border: "1px solid #DADCE0",
        borderRadius: "50px",
        display: "flex",
        padding: "10px",
        cursor: "pointer",

        "&:hover": {
            boxShadow: "5px 5px 5px 0px rgb(0, 0, 0, 0.4)",
        },

        "& img": {
            width: "24px",
            height: "24px",
        },
        " div": {
            width: "100%",
            textAlign: "center",
        },
    },
    or: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        opacity: "0.3",
    },
    line: {
        width: "100%",
        height: "1px",
        backgroundColor: "#90A4AE",
    },
    link: {
        textAlign: "center",
        textDecoration: "underline",
    },
    back: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        cursor: "pointer",
    },
    widget: {
        display: "flex",
        justifyContent: "center",
        gap: "5px",
    },
    circle: {
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1px solid #D9D9D9",

        "&.active": {
            backgroundColor: "#D9D9D9",
        },
    },
};

export default style;
