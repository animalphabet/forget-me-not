import styled from "styled-components";

export const Card = styled.div`
  /* border: 1px solid black; */
  /* background: lightblue; */
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
  border-radius: 8px;
  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  /* &:hover {
    box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.2);
  } */
`;

export const Chip = styled.span`
  border-radius: 16px;
  background: limegreen;
  padding: 4px 16px;
  font-size: 14px;
  color: white;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  padding: 8px;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: transparent;
  border: none;
  &:hover {
    background: lightblue;
  }
`;

export const H4 = styled.h4`
  margin: 8px;
  color: black;
`;

export const H2 = styled.h2`
  margin-bottom: 16px;
  margin-top: 64px;
  color: black;
`;

export const HR = styled.hr`
  border: 0.5px solid lightgray;
`;