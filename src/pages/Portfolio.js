import Projects from "../Components/Projects";

const h1Style={
    padding: "10px",
}

function Portfolio() {
    return (
        <div>
            <br></br>
            <h1 style={h1Style}>My Projects :</h1>
            <br></br>
            <Projects />
        </div>

    )
}

export default Portfolio;