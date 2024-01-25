import { useEffect, useState } from "react";
import { getData } from "../../firebase/firebaseOperations";
import Form from "./Form";
import Ratings from "./Ratings";

const seedData = {
  beverage: {
    name: "drank",
    ratings: {
      ian: 10,
      ava: 10,
    },
  },
  movie: {
    name: "movie",
    ratings: {
      ian: 10,
      ava: 10,
    },
  },
};

function AppLayout() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    async function getRatings() {
      const data = await getData();
      setRatings(data);
    }
    getRatings();
  }, []);

  return (
    <>
      <Form />
      <Ratings ratings={ratings} />
    </>
  );
}

export default AppLayout;
