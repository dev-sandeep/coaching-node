import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export const SearchNav = () => {
  return (
    <div className="w-100" id="searchBar">
      {/* Search Bar  */}
      <Form className="d-flex w-100">
        <Form.Control
          className=" bg-transparent border-bottom border-0"
          type="text"
          placeholder="Search"
        />
        <Button className="bg-transparent border-0" type="submit">
          <FaSearch />
        </Button>
      </Form>
    </div>
  );
};
