import VenuesCarousel from '../Main/VenuesCarousel'


export default function Home () {
return (
    <div className="home-page">
        <VenuesCarousel/>
        <div className="splash-images-container">
            <div className="splash-image-1-container">
                <img className="splash-image-1" src=""/>
            </div>
            <div className="splash-image-2-container">
                <img className="splash-image-2" src=""/>
            </div>
        </div>
        <div className="home-text-container">
            <div className="home-text-welcome">welcome to</div>
            <div className="home-text-venyou">Venyou</div>
        </div>
        <div className="home-text-container">
            <div className="tagline-text-container">
                <div className="text-title-24 text-align-Right">Endless spaces.</div>
                <div className="text-title-24 text-align-Right">Endless possibilities.</div>
            </div>
            <div className="text-caps-16 text-align-Center spacer-5">Be every you with Venyou</div>
            <div className="text-standard-14 text-align-Center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad laboriosam sequi possimus, a at doloremque libero, magni ut, dolore nesciunt iusto eum corrupti! Ducimus assumenda numquam molestias quibusdam dolor similique!</div>
        </div>
        <div className="home-text-container text-align-Center">
            <div className="text-title-24">Find the venue for you</div>
        </div>
        

    </div>
)



}