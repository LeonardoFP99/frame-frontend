import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { articles } from "../../Data";

export default function Home(){
    return (
        <section>
            <Navbar />
            {articles.map((item, index) => {
                return <Card key={index} article={item}/>;
            })}     
        </section>
    );
}
