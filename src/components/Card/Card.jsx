import { TextLimiter } from "../TextLimiter/TextLimiter";
import { CardBody, CardContainer, CardFooter } from "./CardStyle";

/* eslint-disable react/prop-types */
export function Card(props){
    return (
        <CardContainer>

            <CardBody>
                <div>
                    <h2>{props.title}</h2>
                    <img src={props.banner} alt="banner" />  
                </div>
                <TextLimiter text={props.text} limit={150} />
                
            </CardBody>
            
            <CardFooter>

                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{props.likes}</span>
                </div>

                <div>
                    <i className="bi bi-chat-left-text"></i>
                    <span>{props.comments}</span>
                </div>
                 
            </CardFooter>

        </CardContainer>
    )
}