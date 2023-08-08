import React, { useState, useEffect, useContext } from "react";
import StyledCardsList from "./CardsList.styled";
import { v4 as uuidv4 } from "uuid";
import jsonData from "../../db.json";

import { HousingContext } from "../../context/housingContext";

import Card from "../card";

const CardsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // const res = await fetch('http://localhost:3001/data')
      // const json = await res.json();
      // setData(json);
      setData(jsonData.data);
    };
    getData();
  }, [data]);

  const { setHousing } = useContext(HousingContext);
  setHousing(data);

  const cards = data.map((card) => <Card key={uuidv4()} {...card} />);

  return (
    <StyledCardsList>
      <div className="container">{cards}</div>
    </StyledCardsList>
  );
};

export default CardsList;
