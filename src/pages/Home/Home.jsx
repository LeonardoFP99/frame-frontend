import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { articles } from "../../Data";
import { HomeBody } from "./HomeStyle";

export default function Home(){
    return (
        <section>
            <Navbar />

            <HomeBody>
                {articles.map((item, index) => {
                    return <Card key={index} article={item}/>;
                })}
            </HomeBody>

                 
        </section>
    );
}
