/* eslint-disable react/prop-types */
export function Card({article}){
    return (
        <section>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
            <img src={article.image} alt="articleimage" />
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{article.likes}</span>
            <i className="bi bi-chat-left-text"></i>
            <span>{article.comments}</span>
        </section>
    )
}