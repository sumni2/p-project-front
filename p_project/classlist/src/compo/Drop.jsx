const Drop = (props) => {
    return <article>{props.visibility && props.children}</article>;
};

export default Drop;