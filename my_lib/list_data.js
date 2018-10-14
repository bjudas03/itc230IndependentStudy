var movie_list = [
  { title: "Young Frankenstein",
    director : "Mel Brooks",
    genre: "comedy"
  }, {
    title: "Avalon",
    director: "Mamoru Oshii",
    genre: "Science Fiction"
  }, {
    title: "The Goonies",
    director: "Richard Donner",
    genre: "comedy"
  }, {
    title: "Monty Python and the Holy Grail",
    director: [
      "Terry Gilliam", "Terry Jones"
    ],
    genre: "comedy"
  }, {
    title: "Friday the 13th",
    director: "Sean S. Cunningham",
    genre: "horror"
  }
]

exports.getAll = function ()  {
  return movie_list;
}

exports.getOne = function (title) {
  var  movie = [];
  for (let i = 0; i < movie_list.length; i++) {
    if (movie_list[i].title === title) {
      movie.push(movie_list[i]);
    }
  }
  return movie;
}

exports.deleteOne = function (title) {
  let movie = [];
  for (let i = 0; i < movie_list.length; i++) {
    if (movie_list[i].title !== title) {
      movie.push(movie_list[i]);
    }
  }
  console.log("Removing " + title + " from the data set");
  return movie;
}

exports.deleteOneV2 = function (title) {
  return movie_list.filter(function(data) {
    return data.title !== title;
  })
}


