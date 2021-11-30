import styled from "styled-components";

export const ProductUI = styled.ul`
  margin: 20px 20px;
  width: 50%;
  padding: 0;
  list-style: none;

  li {
    background-color: #ffffff;
    border: 1px solid #998ceb;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1px;
    padding: 10px 5px;
    text-transform: initial;
    border-radius: 10px;
  }
  span {
    cursor: pointer;
  }

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 3rem;
    color: #544179;
  }

  button {
    padding: 5px 5px;
    margin: 5px;
    cursor: pointer;
    background-color: #998ceb;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  button:hover {
    background-color: #b8dfd8;
    color: black;
  }

  input {
    display: flex;
    justify-content: center;
    padding: 7px;
    margin: 5px;
    border-radius: 10px;
    background-color: #b8dfd8;
    border: 1px solid white;
  }
`;
