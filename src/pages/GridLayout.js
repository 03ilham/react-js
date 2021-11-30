import React from "react";
import styled from "styled-components";

const Grid1 = styled.div`
  display: grid;
  grid-template-rows: 100px 150px;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 10px;
`;

const Grid2 = styled.div`
    display : grid
    grid-template-areas:
        "header header header"
        "aside main main"
        "footer footer footer"
        "mee mee mee"
`;

export default function GridLayout() {
  return (
    <Grid2>
      <div style={{ gridArea: "header", background: "red" }}>Header</div>
      <div style={{ gridArea: "header", background: "green" }}>Sidebar</div>
      <div
        style={{
          gridArea: "main",
          background: "blue",
          with: "50px",
          height: "50px",
        }}
      >
        Main
      </div>
      <div style={{ gridArea: "footer", background: "gray" }}>Footer</div>
      <div
        style={{
          gridRowStart: 4,
          gridColumnStart: 2,
          gridColumnEnd: 3,
          background: "yellow",
        }}
      >
        Footer
      </div>
    </Grid2>
  );
}
