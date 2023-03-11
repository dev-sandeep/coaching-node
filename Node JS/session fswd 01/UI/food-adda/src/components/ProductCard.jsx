
export default function ProductCard() {

    return (
        <div className="product-card mb-2">
            <button className="close">X</button>
            <div className="product-main">
                <div className="product-img">
                    <img src="https://www.saveur.com/uploads/2021/09/12/Cilantro-Salad-with-Olives-Avocado-and-Limes-Middle-eastern-belle-morizio.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440" alt="" />
                </div>
                <div className="product-body">
                    <h4 className="product-title">Card Title</h4>
                    <p className="product-desc">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <span className="product-time">Last Updated 3mins ago</span>
                    <h4 className="product-price">$19.25</h4>
                </div>
            </div>
        </div>
    )
}