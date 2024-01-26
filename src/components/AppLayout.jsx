import { useEffect, useState } from "react";
import { getData } from "../../firebase/firebaseOperations";
import Form from "./Form";
import Ratings from "./Ratings";
import AddButton from "./AddButton";

function AppLayout() {
  const [ratings, setRatings] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    async function getRatings() {
      const data = await getData();
      setRatings(data);
    }
    getRatings();
  }, []);

  return (
    <>
      {formOpen ? (
        <Form setFormOpen={setFormOpen} />
      ) : (
        <AddButton setFormOpen={setFormOpen} />
      )}
      <Ratings ratings={ratings} />
    </>
  );
}

export default AppLayout;
