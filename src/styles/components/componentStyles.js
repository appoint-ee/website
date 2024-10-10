const style = {
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    slidingBody: {
        width: "80%",
        overflow: "hidden",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",

        transitionProperty: "height",
        transitionDuration: "0.5s",
        transitionTimingFunction: "linear",

        "&.initial": {
            height: "0px",
        },
        "&.open": {
            height: "calc(100% - 55px)",
        },
    },
    separator: {
        width: "8%",
    },
};

export default style;
