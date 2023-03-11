import { useState } from "react"

export default function Addproduct() {

    const [form, setForm] = useState({});
    const handleFormChange = (event) => {
        setForm({...form, [event.target.id]: event.target.value})
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(form)
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 form">
                    <h3 className="text-center font-weight-bold mb-3">Add Products</h3>
                    <form method="POST" action="#">
                        <div className="row justify-content-center">
                            <div className="col-md-6 ">
                                <div className="form-group mb-3">
                                    <input type={'text'} name="item_title" id="item_title" className="form-control" placeholder="Item Title" value={form?.item_title || ""} onChange={handleFormChange}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea name="item_desc" id="item_desc" className="form-control" placeholder="Item Description" value={form?.item_desc || ""} onChange={handleFormChange}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type={'number'} name="item_price" id="item_price" className="form-control" placeholder="Item Price" value={form?.item_price || ""} onChange={handleFormChange}/>
                                    </div>
                                    <div className="form-group">
                            <button className="btn btn-dark btn-block w-100" onClick={onSubmit}>Submit</button>
                        </div>
                            </div>
                            
                        </div>
                       
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}