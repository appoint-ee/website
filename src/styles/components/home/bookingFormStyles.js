
const style = {
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#a52a2a94",
        borderBottom: "1px solid rgba(62, 56, 56, 0.29)",
        boxShadow: "#00000096 0px 4px 10px 1px",
    },
    title: {
        fontSize: "36px",
        margin: "20px 0px 20px 0px",
        color: "rgb(255 255 255 / 64%)",
    },
    body: {
        height: "100%",
    },
    detail:{
        padding: "20px",
        width: "calc(50% - 40px)",
        margin: "40px 0px 40px 25%",
        borderBottom: "1px solid #8d8d8d59",
        borderRadius: "29px",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        "& img": {
            width: "35%",
            borderRadius: "50px",
        },
        "& ul": {
            listStyleType: "none",
        },
        "& li": {
            marginTop: "5px",
            fontSize: "15px",
            fontWeight: "600",
            color: "#00000096",
        },
    },
    form: {
        padding: "0px 20px 0px 20px",
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
        borderTop: "1px solid rgba(62, 56, 56, 0.29)",
        boxShadow: "rgba(0, 0, 0, 0.59) 0px 0px 10px 1px",
    },
};

export default style;
