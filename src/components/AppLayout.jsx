import { useEffect, useState } from "react";
import { getData } from "../../firebase/firebaseOperations";
import Form from "./Form";
import Ratings from "./Ratings";
import AddButton from "./AddButton";

function AppLayout() {
  const [ratings, setRatings] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  function sortByDate(arr) {
    const copy = [...arr];
    function compareByDate(a, b) {
      const dateA = new Date(a.date * 1000);
      const dateB = new Date(b.date * 1000);
      return dateB - dateA;
    }
    copy.sort(compareByDate);
    return copy;
  }

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
        <Form setFormOpen={setFormOpen} setRatings={setRatings} />
      ) : (
        <AddButton setFormOpen={setFormOpen} />
      )}
      <Ratings ratings={sortByDate(ratings)} />
    </>
  );
}

export default AppLayout;
