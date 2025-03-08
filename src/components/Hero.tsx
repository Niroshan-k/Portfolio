import "./Hero.css"
import CTA from "./CTA"

export default function Hero(){
    return(
        <>
            <section>
                <div>
                    <img src="/assets/logo.png"></img>
                </div>
                <div className="text">
                    <h3>Hallo, I'm</h3>
                    {/* <h1>Yami闇-X</h1> */}
                    <h1>Niroshan K</h1>
                    <p>
                        I'm a passionate Game Developer, 3D Artist, UI/UX Designer, Brand Designer, and Web Developer dedicated to crafting immersive digital experiences.Whether it's developing engaging games, creating stunning 3D visuals, designing intuitive user interfaces, building strong brand identities, or coding dynamic web applications, I bring creativity and technical expertise to every project. My work blends innovation with a strong design aesthetic, ensuring visually compelling and functional results.</p>
                    {/* <button className="cta">ABOUT ME</button> */}
                    <CTA />
                </div>
            </section>
        </>
    );
}
