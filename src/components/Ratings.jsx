import { deleteData } from "../../firebase/firebaseOperations";
import BeerRating from "./BeerRating";
import FoodRating from "./FoodRating";
import MovieRating from "./MovieRating";
import { GoTrash } from "react-icons/go";

function Ratings({ ratings }) {
  function handleDeleteData(id) {
    const ok = confirm("Are you sure you want to delete this rating?");
    if (ok) {
      deleteData(id);
    }
  }

  function formatDateString(dateString) {
    let date = new Date(dateString);

    if (isNaN(date.getTime())) {
      const parts = dateString.split(/[/-]/);
      if (parts.length === 3) {
        let [month, day, year] = parts.map((p) => p.padStart(2, "0"));
        if (year.length === 4) {
          date = new Date(`${year}-${month}-${day}T00:00:00Z`);
        }
      }
    }

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const [weekday, month, day, year] = formattedDate
      .replace(",", "")
      .split(" ");

    const dayNumber = parseInt(day, 10);
    const suffix = getDaySuffix(dayNumber);

    return `${weekday}, ${month} ${dayNumber}${suffix}, ${year}`;
  }

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <main>
      {ratings.map((rating) => (
        <section
          key={rating.id}
          className="bg-zinc-700 relative flex flex-col gap-5 items-center mx-auto my-10 w-[75%] rounded-lg p-5"
        >
          <div className="border py-1 px-2 rounded-full">
            {new Date(rating.date.seconds * 1000).toLocaleDateString()}
          </div>
          <div>
            <p className="text-center text-sm">MOVIE</p>
            <h2 className="text-center text-lg font-light underline underline-offset-2">
              {rating.movie.name}
            </h2>
            <h3>Ian</h3>
            <MovieRating type={"read"} value={rating.movie.ratings.ian} />
            <h3>Ava</h3>
            <MovieRating type={"read"} value={rating.movie.ratings.ava} />
          </div>

          <div>
            <p className="text-center text-sm">DRINK</p>
            <h2 className="text-center text-lg font-light underline underline-offset-2">
              {rating.beverage.name}
            </h2>
            <h3>Ian</h3>
            <BeerRating type={"read"} value={rating.beverage.ratings.ian} />
            <h3>Ava</h3>
            <BeerRating type={"read"} value={rating.beverage.ratings.ava} />
          </div>

          {rating.food ? (
            <div>
              <p className="text-center text-sm">FOOD</p>
              <div className="flex items-center gap-2">
                <p>From: </p>
                <h2 className="text-center text-lg font-light">
                  {rating.food.place}
                </h2>
              </div>
              <h3>Ian</h3>
              <p className="text-center">{rating.food.ian.meal}</p>
              <FoodRating type={"read"} value={rating.food.ian.rating} />
              <h3>Ava</h3>
              <p className="text-center">{rating.food.ava.meal}</p>
              <FoodRating type={"read"} value={rating.food.ava.rating} />
            </div>
          ) : (
            <div>
              <p className="text-center text-sm">FOOD</p>
              <h2 className="text-center text-lg font-light">
                No meals were eaten... :(
              </h2>
            </div>
          )}

          <div className="absolute top-7 left-5">
            <button
              className="text-black active:text-white"
              onClick={() => handleDeleteData(rating.id)}
            >
              <GoTrash />
            </button>
          </div>
        </section>
      ))}
    </main>
  );
}

export default Ratings;
