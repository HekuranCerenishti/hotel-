import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/639304.jpg?k=155b1e7d8834a8de33b0eabdde8298ff953a60e455ff2045ee0896684eafb531&o="
                    alt="" 
                    className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Tirana</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/907675.jpg?k=6f7a72a094cba098410e7b9d672987bddee330640f00f2fc6bce075f0177f2d2&o="
                    alt="" 
                    className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Berat</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/639269.jpg?k=229cd54763c9124625ce9545ed33a5c0bf45846b951270b9ecca423cd891ec12&o=" 
                    alt="" 
                    className="featuredImg" 
                />
                <div className="featuredTitles">
                    <h1>Durres</h1>
                    <h2>533 properties</h2>
                </div>
            </div>

        </div>
    )
}

export default Featured