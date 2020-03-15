function ProjectIntro(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <ProjectIntro name="Sara" />;
    ReactDOM.render(
    element,
    document.getElementById('portfolioGallery')
);