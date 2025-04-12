const express = require("express");
const bodyParser = require("body-parser"); // Explicitly require body-parser
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware

app.use(cors());

app.use(express.json()); // for parsing application/json

const movies = [
  {
    id: 1,
    title: "Cosmic Journey",
    release_date: "2023-06-15",
    available_language: ["English", "Spanish"],
    director: "Luna Starr",
    producer: "Nova Films",
    popularity: 8.2,
    genres: ["Sci-Fi", "Adventure"],
    description:
      "A crew of explorers ventures into uncharted space, uncovering secrets of the universe.",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XOX5fPMD-5B67WWA63prhK8De9CzauMZrQ&s",
    duration: "2h 15m",
    rating: "PG-13",
    banner_image:
      "https://public-files.gumroad.com/0uu27ow4bqlv1ynj3aaoac6swth5",
    trending: true,
  },
  {
    id: 2,
    title: "Desert Shadows",
    release_date: "2022-11-03",
    available_language: ["English"],
    director: "Eli Sands",
    producer: "Mirage Studios",
    popularity: 7.8,
    genres: ["Thriller", "Mystery"],
    description:
      "A lone traveler stumbles upon a mysterious town where time seems to stand still.",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR18nTgpqaAWC2VVDq6S0AvxKTTE-5bgLyQ&s",
    duration: "1h 50m",
    rating: "R",
    banner_image: "https://pbs.twimg.com/media/GFAodx0WEAA1whp.jpg:large",
    trending: true,
  },
  {
    id: 3,
    title: "Laugh Factory",
    release_date: "2024-02-10",
    available_language: ["English", "French"],
    director: "Jasper Cole",
    producer: "Giggle Productions",
    popularity: 6.9,
    genres: ["Comedy","MS Tech"],
    description:
      "A group of misfits starts a comedy club that spirals into chaos and hilarity.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "1h 40m",
    rating: "PG",
    banner_image:
      "https://www.digitalgabbar.com/wp-content/uploads/2024/08/Aapka-apna-Zakir.webp",
      trending: false,
  },
  {
    id: 4,
    title: "Echoes of Valor",
    release_date: "2023-09-22",
    available_language: ["English", "German"],
    director: "Rex Holt",
    producer: "Braveheart Media",
    popularity: 8.5,
    genres: ["Action", "Drama","MS Tech"],
    description:
      "A retired soldier is pulled back into battle to save his homeland.",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "2h 30m",
    rating: "PG-13",
    trending: false,
  },
  {
    id: 5,
    title: "Mystic Rivers",
    release_date: "2021-08-12",
    available_language: ["English", "Hindi"],
    director: "Sana Rai",
    producer: "Riverstone Pictures",
    popularity: 7.4,
    genres: ["Drama", "Fantasy"],
    description: "A family unravels dark secrets along a haunted riverbank.",
    thumbnail:
      "https://i.pinimg.com/736x/39/07/11/3907114ed9ffaecaf613f1f25f657195.jpg",
    duration: "2h 10m",
    rating: "PG-13",
    banner_image:
      "https://benjweinberg.com/wp-content/uploads/2024/10/wp8806431.jpg?w=1200",
      trending: false,
  },
  {
    id: 6,
    title: "Neon Streets",
    release_date: "2024-03-01",
    available_language: ["English", "Japanese"],
    director: "Kiro Tanaka",
    producer: "Cyberlight Studios",
    popularity: 8.7,
    genres: ["Action", "Sci-Fi"],
    description:
      "A hacker races against time in a futuristic city to stop a corporate conspiracy.",
    thumbnail:
      "https://ih1.redbubble.net/image.959066855.6822/fposter,small,wall_texture,square_product,600x600.jpg",
    duration: "2h 05m",
    rating: "R",
    banner_image:
      "https://images.stockcake.com/public/9/2/5/925b45fa-3b8e-4dce-9993-0c4316cbc7c2_large/neon-cinema-entrance-stockcake.jpg",
      trending: false,
  },
  {
    id: 7,
    title: "Silent Night",
    release_date: "2023-12-20",
    available_language: ["English"],
    director: "Clara Frost",
    producer: "Snowcap Entertainment",
    popularity: 7.1,
    genres: ["Horror", "Mystery"],
    description:
      "A group of climbers faces supernatural forces on a remote mountain.",
    thumbnail:
      "https://resizing.flixster.com/ONk3siYbtA8c5eWig7iKCbspu4g=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24295548_v_v13_af.jpg",
    duration: "1h 55m",
    rating: "R",
    banner_image:
      "https://resizing.flixster.com/HGCY9fxHmm9QvJpmsuUrKJFpNaE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24295548_v_h9_aa.jpg",
      trending: false,
  },
  {
    id: 8,
    available_language: ["Tamil", "Hindi"],
    title: "Beast",
    description:
      "Beast is a 2022 Indian Tamil-language action comedy film about Veera Raghavan, a former RAW agent who seeks to rescue hostages in a shopping mall hijacked by terrorists.",
    director: "Nelson Dilipkumar",
    producer: "Kalanithi Maran",
    popularity: "High",
    genres: ["Action", "Comedy", "Thriller"],
    thumbnail:
      "https://www.kerala9.com/wp-content/uploads/2022/03/beast-tamil-movie-photos-scaled.jpg",
    banner_image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/beast_1200_220621033517.jpg?size=948:533",
    rating: 6.8,
    duration: '2h 50m',
    trending: true,
  },
];

// Get charts with MongoDB
app.get("/api/movies", async (req, res) => {
  try {
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching charts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
