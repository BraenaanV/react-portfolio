import Project from "./Project"
import Selection from "../assets/Selected";

function Projects() {
    return (
        <div>
            {Selection.map(x =>
                <Project
                img={x.img}
                title={x.title}
                text={x.text}
                repo={x.repo}
                deployed={x.deployed}/>
                )}
        </div>
    )
}

export default Projects;