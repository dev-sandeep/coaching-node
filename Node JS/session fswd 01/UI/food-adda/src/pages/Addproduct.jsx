import { useState } from "react"
import Figure from 'react-bootstrap/Figure';
import { Button, Modal } from "react-bootstrap";

export default function Addproduct() {
    const [src, setSrc] = useState(window.location.origin + '/img/Ph.jpeg');
    const [profileModal, showProfileModal] = useState(false);
    const [form, setForm] = useState({});
    const handleFormChange = (event) => {
        setForm({...form, [event.target.id]: event.target.value})
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(form)
    }

    const ProfileImageModal = (props) => {
        return (
            <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Image Upload
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="#" method="POST" encType="multipart/form-data">
                        <div className="form-group mb-3">
                            <input type={'file'} className="form-control" />
                        </div>
                        <div className="form-group justify-content-between w-100">
                            <Button onClick={props.onHide}>Close</Button>
                            <Button type="submit" className="btn btn-dark" onClick={(event)=>{event.preventDefault();}}>Upload</Button>
                        </div>
                        
                    </form>
                </Modal.Body>
            </Modal>
        )
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
                            <Figure style={{cursor:'pointer'}} onClick={()=>showProfileModal(true)}>
                                <Figure.Image width={50}  height={100} alt="" src={src} onError={()=>setSrc(window.location.origin + '/img/Ph.jpeg')} />
                                <Figure.Image width={50}  height={100} alt="" src={src} onError={()=>setSrc(window.location.origin + '/img/Ph.jpeg')} />
                                <Figure.Image width={50}  height={100} alt="" src={src} onError={()=>setSrc(window.location.origin + '/img/Ph.jpeg')} />
                                <Figure.Image width={50}  height={100} alt="" src={src} onError={()=>setSrc(window.location.origin + '/img/Ph.jpeg')} />
                            </Figure>

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
            <ProfileImageModal
                show={profileModal}
                onHide={() => showProfileModal(false)}
            />
        </div>
    )
}