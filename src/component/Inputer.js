import { Input, Button, TextField } from "@material-ui/core";
import React from "react";
import "./inputer.css";

const Inputer = ({ city, inputHandler, findWeather,error }) => {
  const handleClick = (event) => {
    event.preventDefault();
    findWeather();
  };
  console.log(city);
  return (
    <div className="inputBox">
      <div className="inputBox_field">
        <h1>Polar Weather App</h1>
        <p>Powered by</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58lpIByLEE5T6iJMOMfLhudSIFeKCkt4_YYlsRvDwEizaPP426bB_gFFbv7koM-DpqGo&usqp=CAU"
          alt="logo"
        />
        <form>
          <TextField
            label="Enter the city name"
            name="lastName"
            required
            onChange={inputHandler}
          />
          <Input
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Search
          </Input>
        </form>
        {error ? "Please Enter the valid city name !": null}
      </div>
    </div>
  );
};

export default Inputer;
