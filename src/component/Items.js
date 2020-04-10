import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ItemsListStyled = styled.div`
  width: 100%;
  margin-top: 10px;
  border-top: 1px dashed #ddd;
  box-sizing: border-box;
  background-color: rgba(255,255,255,0.55);
`
const ItemStyled = styled.div`
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px dashed #ddd;
  font-size: 13px;
  line-height: 21px;
  text-align: left;
  p {
    display: inline-block;
    margin: 0 10px;
  }
`
export const ItemsList = ({data}) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem('information'))
    setItems(items.concat(getItems))
  }, [])
  return <ItemsListStyled>
    {
      data.map((type, i) => (
        <ItemStyled key={i}>
          <p><b>이름</b> : {type.name}</p>
          <p><b>연락처</b> : {type.phone} </p>
        </ItemStyled>
      ))
    }
  </ItemsListStyled>
}