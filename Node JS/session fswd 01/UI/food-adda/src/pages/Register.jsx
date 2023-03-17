// import { handleBreakpoints } from "@mui/system";
import { useState } from "react"
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Register = () => {
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
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-xl-8 col-lg-8 col-md-8 col-12 p-5 bg-white">
                    <h3 className="text-center font-weight-bold mb-4">Sign Up</h3>
                    <form method="POST" action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <input type={'text'} className="form-control" name="fullname" id="fullname" placeholder="Name" onChange={handleFormChange} value={form?.fullname || ""} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type={'text'} className="form-control" name="address_line1" id="address_line1" placeholder="Address (Line 1)" onChange={handleFormChange} value={form?.address_line1 || ""} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type={'text'} className="form-control" name="city" id="city" placeholder="City" onChange={handleFormChange} value={form?.city || ""} />
                                </div>
                                <div className="form-group mb-3">
                                    <input type={'text'} className="form-control" name="state" id="state" placeholder="State" onChange={handleFormChange} value={form?.state || ""} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="about" id="about" onChange={handleFormChange} value={form?.about || ""} placeholder="About Yourself (minimum 100 words)"/>
                                </div>
                                
                                
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <input type={'email'} className="form-control" name="email" id="email" placeholder="Email Address" onChange={handleFormChange} value={form?.email || ""} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type={'text'} className="form-control" name="address_line2" id="address_line2" placeholder="Address (Line 2)" onChange={handleFormChange} value={form?.address_line2 || ""} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type={'text'} className="form-control" name="latlng" id="latlng" placeholder="Location Coordinates" onChange={handleFormChange} value={form?.latlng || ""} />
                                </div>
                                <div className="form-group mb-3">
                                    <input type={'text'} className="form-control" name="mobile" id="mobile" placeholder="Mobile" maxLength={10} minLength={10} onKeyPress={
                                        (event) => {
                                            if(!/[0-9]/.test(event.key)){
                                                event.preventDefault();
                                                alert("Please enter number")
                                            }
                                        }
                                    } onChange={handleFormChange} value={form?.state || ""} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type={'password'} className="form-control" name="password" id="password" placeholder="Password" onChange={handleFormChange} value={form?.password || ""} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type={'password'} className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password" onChange={handleFormChange} value={form?.confirm_password || ""} />
                                </div>
                                <div className="form-group">
                                    <Figure style={{cursor:'pointer'}} onClick={()=>showProfileModal(true)}>
                                        <Figure.Image width={50}  height={100} alt="" src={src} onError={()=>setSrc(window.location.origin + '/img/Ph.jpeg')} />
                                    </Figure>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark btn-block w-100" onSubmit={onSubmit}>Save</button>
                                </div>
                                <p>Already Signup ! 
                            <Link to={'/login'}>Login</Link>
                            </p>
                            </div>
                            
                        </div>                     
                    </form>
                </div>
            </div>
            
            <ProfileImageModal
                show={profileModal}
                onHide={() => showProfileModal(false)}
            />
        </div>
    )
}

export default Register;