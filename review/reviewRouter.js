const express = require('express');
const Review = require('./Review');
const reviewRouter = express.Router();
const ReviewService = require('./reviewService');






reviewRouter.post('/', (req, res) => {
	

	const content = req.body.content;
	const score = req.body.score;
	const relatedId = req.body.relatedId;
	//if(showName && genre){
	//	console.log(`Found Name: ${showName} and genre: ${showGenre}`);
		res.send(ReviewService.createReview(content,score,relatedId));
	});

reviewRouter.get('/', (req, res) => {
  res.json(ReviewService.getAll());
});

reviewRouter.route('/:reviewId')
	.get((req, res) => {
	const reviewId = req.params.reviewId;
	console.log(`Fetching review with id: ${reviewId}`);
 // res.json(tvShows);
 	res.json(ReviewService.getById(reviewId));
})
	.delete((req, res) => {
		const reviewId = req.params.reviewId;
		res.json(ReviewService.deleteById(reviewId));
	});






module.exports = reviewRouter;
