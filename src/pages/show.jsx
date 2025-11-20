import ShowBanner from "@/sections/ShowBanner";
import Seasons from "@/components/Seasons";
import MovieDetails from "@/sections/MovieDetails";

export const metadata = {
	title: 'Show - Stranger Things',
}

export default function () {
	return (
		<>
      <ShowBanner />
      <MovieDetails seasons={ <Seasons /> } />
		</>
	)
}