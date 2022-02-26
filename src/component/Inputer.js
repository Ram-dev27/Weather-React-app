import { Input, Button, TextField } from "@material-ui/core";
import React from "react";
import "./inputer.css";
import logo from './logo.png'

const Inputer = ({ city, inputHandler, findWeather, error }) => {
  const handleClick = (event) => {
    event.preventDefault();
    findWeather();
  };
  console.log(city);
  return (
    <div className="inputBox">
      <div className="inputBox_field">
        <h1>Polar Weather App</h1>
        <p>Powered by Ram!</p>
        <img
          src={logo}
          alt="logo"
        />
        <form>
          <TextField
            placeholder="Enter the city name"
            name="lastName"
            required
            onChange={inputHandler}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleClick}
          >
            Search
          </Button>
        </form>
        {error ? <div className="error">Enter the valid city name !</div> : null}
      </div>
    </div>
  );
};

export default Inputer;
