import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import InputField from "../components/InputField";
import CardWithHeader from "../components/CardWithHeader";
import CustomButton from "../components/CustomButton";

const Address = () => {
  //states to hold the address field values
  const [addressList, setAddressList] = useState();
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [phone, setphone] = useState();

  //defining a max id so that we can set the next id for the address id
  let max;
  if (addressList !== undefined) {
    const list = addressList.map((item) => parseInt(item.id));
    console.log(list);
    max = Math.max(...list);
    console.log(max);
  }

  //request to fetch address
  const addressReq = async () => {
    const response = await axios.get("http://127.0.0.1:5002/address", {
      headers: { user_id: "somerandomtext" },
    });
    setAddressList(response.data.data);
  };

  //request to add address to DB
  const createAddressReq = async () => {
    const response = await axios;
    console
      .log(max)
      .post(
        "http://127.0.0.1:5002/create_address",
        {
          id: max + 1,
          line1: line1,
          line2: line2,
          city: city,
          state: state,
          phone: phone,
        },
        { headers: { user_id: "somerandomtext" } }
      )
      .then((response) => {
        console.log(response);
      });
  };

  //handle change functions for input fields - to save data to the address object
  const handleChangeStreet = (e) => {
    setLine1(e.target.value);
  };
  const handleChangeStreet2 = (e) => {
    setLine2(e.target.value);
  };
  const handleChangeCity = (e) => {
    setcity(e.target.value);
  };
  const handleChangeState = (e) => {
    setstate(e.target.value);
  };
  const handleChangePhone = (e) => {
    setphone(parseInt(e.target.value));
  };

  //to fetch the address list
  useEffect(() => {
    addressReq();
  }, [phone, line1]);
  return (
    <div>
      {addressList !== undefined ? (
        <div className="minH-90 mt-5">
          <div className="container mx-auto mx-xl-auto shadow-lg p-3 mt-3 rounded text-center col-md-3">
            <div className="row align-items-center">
              <h2 className="mb-3 fw-bold">Add Address</h2>
              <div className="col d-grid gap-3 flex-column">
                <InputField
                  name="AddressInput"
                  placeholder="Door No, Street Name, Locality"
                  onChangeFunction={handleChangeStreet}
                />
                <InputField
                  name="AddressInput"
                  placeholder="Door No, Street Name, Locality"
                  onChangeFunction={handleChangeStreet2}
                />
                <InputField
                  name="CityInput"
                  placeholder="City"
                  onChangeFunction={handleChangeCity}
                />
                <InputField
                  name="StateInput"
                  placeholder="State"
                  onChangeFunction={handleChangeState}
                />
                <InputField
                  name="PhoneInput"
                  placeholder="Contact"
                  onChangeFunction={handleChangePhone}
                />
                <CustomButton name="Save" OnClickFunction={createAddressReq} />
              </div>
            </div>
          </div>
          <div className=" mx-1 row justify-content-center">
            <div className="container mt-5 col-lg-6 justify-content-center">
              <label>
                <b>Saved Addresses</b>
              </label>
              <div className="row">
                {addressList.map((address, i) => {
                  return (
                    <div className="col-lg-4" key={i}>
                      <CardWithHeader
                        header={`Address - ${i + 1}`}
                        title={address.city}
                        desc={`${address.line1}, ${address.line2}, ${address.city}, ${address.state}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> Fetching Address...</div>
      )}
    </div>
  );
};

export default Address;
