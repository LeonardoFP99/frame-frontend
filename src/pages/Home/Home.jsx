import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { HomeBody } from "./HomeStyle";
import { getAllPosts } from "../../services/articleServices";

export default function Home(){

    const [articles, setArticles] = useState([]);

    async function findAllPosts(){
        const response = await getAllPosts();
        setArticles(response.data.results);
    }

    useEffect(() => {
        findAllPosts();
    }, []);

    return (
        <section>
            <Navbar />

            <HomeBody>
                {articles.map((item) => {
                    return <Card 
                        key={item.id} 
                        title={item.title}  
                        text={item.text}
                        banner={item.banner}
                        likes={item.likes.length}
                        comments={item.comments.length}
                    />;
                })}
            </HomeBody>
      
        </section>
    );
}
