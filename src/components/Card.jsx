import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

function Card({ image, category, date, title, content, link }){
    return (
        <article>
            <CardHeader image={image} category={category}></CardHeader>
            <CardBody date={date} title={title} content={content} link={link}></CardBody>
        </article>
    );
}

export default Card;