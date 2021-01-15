import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Project(props) {
    return (
        <div>
            <Card style={{width:"50%"}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button href={props.repo} className>See GitHub repo:</Button>
                <p></p>
                <Button href={props.deployed}>See deployed:</Button>
            </Card.Body>
            <Card.Img variant="bottom" style={{width: "50rem"}} src={props.img} />
            </Card>
            <hr></hr>
        </div>
    )
};

export default Project;