import styled from "styled-components";

export const RemoveItem = styled.button`
  color: red;
`;
export const CompleteItem = styled.button`
  color: green;
`;
export const AddItem = styled.button`
  color: blue;
`;

export const Item = styled.span`
  &.completed:before {
    content: "✅";
  }
`;

export const ItemsList = styled.ul`
  list-style-type: none;
`;

export const Container = styled.div`
  /*TODO*/
`;
