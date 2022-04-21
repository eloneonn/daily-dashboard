import { useState, useEffect } from "react";
import bikeService from "../services/bikeService.js";
import "./styles.css";

const Bikes = () => {
  const [bikes, setBikes] = useState({ pernaja: 0, hollola: 0, gebhard: 0 });

  const getInfo = async () => {
    const res = await bikeService.getBikeInfo();

    setBikes({
      pernaja: res.data.data.pernajantie.bikesAvailable,
      hollola: res.data.data.hollolantie.bikesAvailable,
      gebhard: res.data.data.gebhardinaukio.bikesAvailable,
    });
  };

  useEffect(() => {
    // INITIAL INFO
    getInfo();
  }, []);

  useEffect(() => {
    // AUTO-REFRESH EVERY 10 MINUTES
    setInterval(getInfo, 600000);
  }, []);

  return (
    <div className="bike-container">
      <img className="bike-icon" alt="bike-icon" src="bicycle.png"></img>
      <table>
        <tbody>
          <tr>
            <td>Pernajantie: </td>
            <td
              className={`bike-number ${
                bikes.pernaja === 1 && "caution-bike"
              } ${!bikes.pernaja && "no-bike"}`}
            >
              {bikes.pernaja}
            </td>
          </tr>
          <tr>
            <td>Hollolantie: </td>
            <td
              className={`bike-number ${
                bikes.hollola === 1 && "caution-bike"
              } ${!bikes.hollola && "no-bike"}`}
            >
              {bikes.hollola}
            </td>
          </tr>
          <tr>
            <td>Gebhardinaukio: </td>
            <td
              className={`bike-number ${
                bikes.gebhard === 1 && "caution-bike"
              } ${!bikes.gebhard && "no-bike"}`}
            >
              {bikes.gebhard}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bikes;
