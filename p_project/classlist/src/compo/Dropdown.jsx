const Dropdown = (props) => {
    return <article>{props.visibility && props.children}</article>;
};

export default Dropdown;