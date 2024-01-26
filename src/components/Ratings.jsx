import BeerRating from "./BeerRating";
import MovieRating from "./MovieRating";

function Ratings({ ratings }) {
  return (
    <main>
      {ratings.map((rating) => (
        <section
          key={rating.id}
          className="bg-zinc-700 flex flex-col gap-5 items-center mx-auto my-10 w-[75%] rounded-lg p-5"
        >
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
        </section>
      ))}
    </main>
  );
}

export default Ratings;
