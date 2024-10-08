import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/539903091.webp?k=aa806d8efcc9efb704cf204c9dbe7e67e634a61faa968d5c4be70a387702c830&o=" 
                alt="" 
                className="siImg" 
            />
            <div className="siDesc">
                <h1 className="siTitle">Piazza Luxury</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio ° 1 bathroom ° 21m² ° 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem