import { CardBody, CardContainer, CardFooter } from "./CardStyle";

/* eslint-disable react/prop-types */
export function Card({article}){
    return (
        <CardContainer>

            <CardBody>
                <div>
                    <h2>{article.title}</h2>
                    <p>{article.text}</p>
                </div>
                <img src={article.image} alt="articleimage" />
            </CardBody>
            
            <CardFooter>

                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{article.likes}</span>
                </div>

                <div>
                    <i className="bi bi-chat-left-text"></i>
                    <span>{article.comments}</span>
                </div>
                 
            </CardFooter>

        </CardContainer>
    )
}