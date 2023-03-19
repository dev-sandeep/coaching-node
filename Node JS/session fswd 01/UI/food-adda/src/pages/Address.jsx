import React, { useEffect, useState } from "react";
import "../App.css";
import InputField from "../components/InputField";
import CardWithHeader from "../components/CardWithHeader";
import CustomButton from "../components/CustomButton";
import { useSelector } from "react-redux";
import { getCall, postCall } from "../Utils/api";

const Address = () => {
  //session token
  const sessionToken = useSelector((state) => state.user);
  //states to hold the address field values
  const [addressList, setAddressList] = useState();
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [phone, setphone] = useState();
  const [refreshAddress, setRefressAddress] = useState();

  //defining a max id so that we can set the next id for the address id
  let max;
  if (addressList !== undefined) {
    const list = addressList.map((item) => parseInt(item.id));
    max = Math.max(...list);
  }

  //request to add address to DB
  const createAddressReq = async () => {
    postCall({
      headers: { token: sessionToken.token },
      body: {
        id: max !== undefined ? max + 1 : 1,
        line1: line1,
        line2: line2,
        city: city,
        state: state,
        phone: phone,
      },
      url: "http://127.0.0.1:5002/create_address",
    }).then((resp) => {
      console.log(resp);
      setRefressAddress(0);
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
    getCall({
      headers: {
        token: sessionToken.token,
      },
      body: {},
      url: "http://127.0.0.1:5002/address",
    }).then((resp) => {
      setAddressList(resp.data.data);
    });
    setRefressAddress(1);
  }, [line1, phone, refreshAddress]);
  return (
    <div>
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
            {addressList !== undefined ? (
              <div>
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
            ) : (
              <div>No Address found...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
