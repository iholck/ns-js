const express = require('express');
const TvShow = require('./TvShow');
const tvShowRouter = express.Router();
const TvShowService = require('./TvShowService');

//const tvShowService = new TvShowService();
const tvShows = TvShowService.getAll();

//const tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama')];

tvShowRouter.get('/', (req, res) => {
  res.json(TvShowService.getAll());
});


tvShowRouter.route('/:tvShowId')
	.get((req, res) => {
	const tvShowId = req.params.tvShowId;
	console.log(`Fetching TVShow with id: ${tvShowId}`);
 // res.json(tvShows);
 	res.json(TvShowService.getById(tvShowId));
})
	.delete((req, res) => {
		const tvShowId = req.params.tvShowId;
		res.json(TvShowService.deleteById(tvShowId));
	});

tvShowRouter.post('/', (req, res) => {
	
	const showName = req.body.name;
	const showGenre = req.body.genre;
	//if(showName && genre){
		console.log(`Found Name: ${showName} and genre: ${showGenre}`);
		res.send(TvShowService.createTvShow(showName,showGenre));
//	}




});



module.exports = tvShowRouter;
