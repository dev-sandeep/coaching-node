import { useState } from "react";
import { postCall } from "./../Utils/api";
import { getSession } from "./../Utils/session";
import { toastError, toastSuccess } from "./../Utils/toast";
import { useNavigate } from "react-router-dom";
import env_vars from "./../Utils/constants";

export default function Addproduct() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };
  const url = env_vars.base_url+env_vars.apis.admin_add_product

  const onSubmit = (event) => {
    event.preventDefault();
    const session = getSession();
    postCall({
      headers: {
        token: session.token
      },
      body:{
        "name": form.item_title,
        "price": form.item_price,
        "desc": form.item_desc
      },
      url
    }).then(()=>{
      toastSuccess("Item added");
      navigate("/yourmenu");
    }, (err)=>{
      console.error(err);
      toastError("Error occurred");
    })
  };

  return (
    <div id="addProduct-wrapper">
      <div className="container">
        <div className="form">
          <h3 className="text-center font-weight-bold mb-5">Add Products</h3>
          <form method="POST" action="#">
            <div className="row justify-content-center">
              <div className="col-md-6 ">
                <div className="form-group mb-3">
                  <input
                    type={"text"}
                    name="item_title"
                    id="item_title"
                    className="form-control"
                    placeholder="Item Title"
                    value={form?.item_title || ""}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    name="item_desc"
                    id="item_desc"
                    className="form-control"
                    placeholder="Item Description"
                    value={form?.item_desc || ""}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type={"number"}
                    name="item_price"
                    id="item_price"
                    className="form-control"
                    placeholder="Item Price"
                    value={form?.item_price || ""}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-dark btn-block w-100"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
