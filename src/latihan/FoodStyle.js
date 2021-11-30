import styled from "styled-components";

const Style = styled.ul`
  margin: 20px 20px;
  padding: 0;
  list-style: none;

  ul {
    margin: 1rem;
  }

  span {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    color: gray;
    margin: 3rem;
    display: flex;
    cursor: pointer;
  }

  img {
    width: 400px;
    border-radius: 10px;
    margin: 5px;
  }

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 2.5rem;
    color: #544179;
    margin-left: 0.5rem;
    position: sticky;
    top: 0;
    z-index: 10px;
    background-color: white;
    padding: 10px;
  }

  button {
    padding: 10px;
    margin-left: 1rem;
    cursor: pointer;
    background-color: #5C7AEA;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  button:hover {
    background-color: blue;
  }

  input {
    display: flex ;
    padding: 10px;
    margin-left: 1rem;
    border-radius: 10px;
    background-color: #A9E4D7;
    border: 1px solid white;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: 'Times New Roman', Times, serif;
  }

  .btn {
    background-color: #FF5C58;
  }

  .yellow {
    background-color: #30cd00;
  }

  .yellow:hover {
    background-color: #129200;
  }

  .btn:hover {
      background-color: red;
      color: white;
  }

  .hapus {
      margin-left: 2px;
      color: #FF0000;
  }

  .hapus:hover {
      color: #FF5C58;
  }

  .btn1 {
      width: 20px;
      margin-bottom: -6px;
      margin-left: 5px;
  }

  .btn5 {
      width: 20px;
      color: gray;
  }

  .btn5:hover {
    color: red;
  }

  .btn2 {
      width: 20px;
      margin-bottom: -6px;
      margin-left: 5px;
  }

  .btn3 {
      width: 20px;
      margin-bottom: -4px;
      margin-left: 5px;
  }

  .btn4 {
      width: 20px;
      margin-bottom: -4px;
      margin-left: 5px;
  }

  .veripy {
      width: 30px;
      margin-left: 10px;
      margin-bottom: -4px;
  }

  .pencil {
      width: 20px;
      margin-bottom: -4px;
      margin-left: 5px;
  }

  .select {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-left: 1rem;
    border-radius: 10px;
    background-color: #b8dfd8;
    border: 1px solid white;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .label {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    color: gray;
    margin-left: 1rem;
  }

  .pin {
    padding: 4px;
    display: flex;
    margin: 10px;
    margin-left: 1rem;
  }
`;

export default Style;
