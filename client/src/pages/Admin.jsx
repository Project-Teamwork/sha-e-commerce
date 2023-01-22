import axios from "axios";
import { useState, useEffect } from "react";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import styled from "styled-components";
import ButtonBlue from "../components/ButtonBlue";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-inline: 2rem;
  margin-block: 2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0.4rem 0;
`;

const Input = styled.input`
  width: 15rem;
  height: 20px;
  margin-block: 0.4rem;
  font-size: 1.1rem;
`;

const Select = styled.select`
width: 15.5rem;
height: 25px;
margin-block: 0.4rem;
font-size: 1.1rem;

`

function Admin() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");


  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post("http://localhost:3636/auth/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          setUser(data);
        });
    }
  }, []);

  function save() {
    axios
      .post("http://localhost:3636/items/", {
        name,
        description,
        category,
        price,
      })
      .then(({ data }) => {
        alert("added");
      });
  }

  function select (event) {
      const value = event.target.value;
      setCategory(value);
    };

  return (
    <div>
      <NavbarProfile>{user.username}</NavbarProfile>
      <div>
        <Wrapper>
          <Label>
            Name:
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Label>
          <Label>
            Description:
            <Input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Label>
          <Label>
            Category:
            <Select  
               onChange={(e) => setCategory(e.target.value)}>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="accessories">Accessories</option>
              <option value="other">other</option>
            </Select>
          </Label>
          <Label>
            Price:
            <Input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Label>
          <ButtonBlue
            onClick={() => {
              save();
            }}
          >
            Add Item
          </ButtonBlue>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
