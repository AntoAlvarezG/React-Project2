import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import dataArray from "./data";

export default function App () {

    const cards = dataArray.map(card => {
        return (
            <Card
                key={card.id}
                entry={card}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--container">
                {cards}
            </section>
            <Footer />
        </div>
    )
}