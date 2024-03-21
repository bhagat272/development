import React, { useEffect, useState } from "react";
import axios from "axios";
const Weather = () => {
  const [data, setdata] = useState([]);
  const [cityName, setcityName] = useState("");
  function getweatherapi(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4436b6e007f8c06519fe16cf00b2db2e`;
    axios
      .get(apiurl)
       .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }
  function handlesearch() {
    getweatherapi(cityName);
    setcityName("");
  }
  useEffect(() => {
    getweatherapi("");
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" id="field">
          <input
            value={cityName}
            onChange={(e) => {
              setcityName(e.target.value);
            }}
            className="ms-4 mt-4"
            style={{ height: "2.3rem" }}
            type="search"
            placeholder="search city"
          />
          <button
            onClick={handlesearch}
            className="btn btn-secondary rounded-pill ms-2 mt-4"
            id="ser"
            style={{ height: "2.3rem" }}
          >
            search
          </button>
        </div>
        <p className="pp mt-5">
          Temperature of {data?.name} :{(data?.main?.temp - 273.15).toFixed(2)}
          °C{" "}
        </p>
        <p style={{ color: "wheat", textAlign: "center" }}>
          Minmum Temp {data?.name} :{(data?.main?.temp_min - 273.15).toFixed(2)}
          °C{" "}
        </p>

        {data?.main?.temp - 273.15 > 29 ? (
          <img
            className="sun ms-5 mt-1"
            src="https://i.pinimg.com/originals/db/d9/0d/dbd90d367167db3967af692343915f5d.png"
           alt="sun"/>
        ) : (
          <img
            className="cold"
            // src="https://th.bing.com/th/id/OIP.CgAQ47RlqmuwXlUzt-NI3QHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain"
            src="https://th.bing.com/th/id/R.b502824fdd18a1d90e56266b55696180?rik=vnbKbePvJvln0A&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f4ib%2f6GE%2f4ib6GEbrT.gif&ehk=nyVz0NzhoEV%2fR8qwYSZO%2fQtoFtfGuJ6WFzWcDZZgEuY%3d&risl=&pid=ImgRaw&r=0"
          alt="cloud"/>
        )}
        
        
      </div>
      
    </div>
  );
};

export default Weather;
