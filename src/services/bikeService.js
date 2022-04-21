import axios from "axios";

const getBikeInfo = async () => {
  return await axios({
    url: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    method: "post",
    data: {
      query: `
          query {
            pernajantie: bikeRentalStation(id: "129") {
                name
                bikesAvailable
            }
            hollolantie: bikeRentalStation(id: "132") {
                name
                bikesAvailable
            }
            gebhardinaukio: bikeRentalStation(id: "119") {
                name
                bikesAvailable
            }
          }
        `,
    },
  });
};

const exportedObject = { getBikeInfo };
export default exportedObject;
