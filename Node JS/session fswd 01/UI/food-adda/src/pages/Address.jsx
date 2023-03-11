import React from "react";
import "../App.css";
import InputField from "../components/InputField";
import CardWithHeader from "../components/CardWithHeader";
import CustomButton from "../components/CustomButton";
//importing dummy address data
import { dummyAddress } from "../components/dummyData";

const Address = () => {
  //object to hold the address details
  const add = { name: "", streetName: "", city: "", state: "", pin: "" };
  //handle change functions for input fields - to save data to the address object
  const handleChangeName = (e) => {
    add.name = e.target.value;
  };
  const handleChangeStreet = (e) => {
    add.streetName = e.target.value;
  };
  const handleChangeCity = (e) => {
    add.city = e.target.value;
  };
  const handleChangeState = (e) => {
    add.state = e.target.value;
  };
  const handleChangePin = (e) => {
    add.pin = e.target.value;
  };
  const handleSave = (e) => {};
  return (
    <div className="minH-90 mt-5">
      <div className="container mx-auto mx-xl-auto shadow-lg p-3 mt-3 rounded text-center col-md-3">
        <div className="row align-items-center">
          <h2 className="mb-3 fw-bold">Add Address</h2>
          <div className="col d-grid gap-3 flex-column">
            <InputField
              name="NameInput"
              placeholder="Name"
              onChangeFunction={handleChangeName}
            />
            <InputField
              name="AddressInput"
              placeholder="Door No, Street Name, Locality"
              onChangeFunction={handleChangeStreet}
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
              name="PinInput"
              placeholder="Pin Code"
              onChangeFunction={handleChangePin}
            />
            <CustomButton name="Save" OnClickFunction={handleSave} />
          </div>
        </div>
      </div>
      <div className=" mx-1 row justify-content-center">
        <div className="container mt-5 col-lg-6 justify-content-center">
          <label>
            <b>Saved Addresses</b>
          </label>
          <div className="row">
            {dummyAddress.map((address) => {
              return (
                <div className="col-lg-4" key={address.address}>
                  <CardWithHeader
                    header={address.address}
                    title={address.name}
                    desc={address.fullAddress}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
