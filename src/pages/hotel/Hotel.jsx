import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489924217.jpg?k=d60b59816c53b5643b614ec6b4ed1bbc055d12017eeddb4a0653a4757d38c318&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485034613.jpg?k=7018e353b5d8c1227c6dc578b66efb5ae5955c790270b86d94dab75b387366f5&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485348916.jpg?k=d0f7c199e5eba5ebd3c71dc8940210299002b5585c81f6f54c8598e69c45120f&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489922019.jpg?k=53fa069ed6500079c681b70a380602e6f96adac605e78e3f001c013b5be6a02a&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489922863.jpg?k=43785960e28f28b16a1eae2b09a786049ffd4ee3a16d8e8513c889883c34fe5d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485347666.jpg?k=511c9432901a861238f86322bc5cbd981bce3cabb901a93ae16ac8f9ee4fdfcb&o=&hp=1"
        },
    ];

const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
}

const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==="l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1 
    }

    setSlideNumber(newSlideNumber)

}

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src}alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                    </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Piazza Luxury</h1>
                    <div className="hotelAdress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>12 Rruga Sulejman Pasha, Tirana, Albania </span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location -500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img 
                                    onClick={()=>handleOpen(i)} 
                                    src={photo.src} 
                                    alt="" 
                                    className="hotelImg" 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of krakow</h1>
                            <p className="hotelDesc">
                             You're eligible for a Genius discount at Piazza Luxury Apartments! To save at this property, all you have to do is sign in.
                             Piazza Luxury Apartments enjoys a location in Tirana, 3.3 miles from Dajti Ekspres “Cable Car” and 26 miles from Rock of Kavaje. There's a private entrance at the apartment for the convenience of those who stay. The apartment offers rooms with air conditioning, free private parking, and free Wifi.
                             The apartment offers a seating area with a flat-screen TV and a private bathroom with bathrobes, slippers, and walk-in shower. An oven, a fridge, and kitchenware are also featured, as well as a kettle. At the apartment complex, all units are allergy-free.
                             Popular points of interest near Piazza Luxury Apartments include Skanderbeg Square, Former Residence of Enver Hoxha, and National Museum of History Albania. The nearest airport is Tirana International Mother Teresa Airport, 8.1 miles from the accommodation.
                             Solo travelers in particular like the location – they rated it 9.3 for a one-person stay.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the near heart of Tirana,this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Hotel