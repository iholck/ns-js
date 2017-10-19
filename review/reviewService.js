const createId = require('../utils/idUtil');
const Review = require('./Review');

class ReviewService {
constructor() {
	this.reviews = [];

	}

 getAll() {
 	return this.reviews;
 }

 getById(id){
 //	console.log(`GetById run. id: ${id}, shows: ${JSON.stringify(this.tvShows)}`);
 	return this.reviews.find(review => review.id == id);
 }
 
 deleteById(id){
 	console.log(`DeleteById run. id: ${id} `);
 	this.reviews = this.reviews.filter(review => review.id !== id);
 }

 createReview(content,score,relatedItemId){
 	const myId = createId();
 	const review = new Review(myId,content,score,relatedItemId);
	this.reviews.push(review);
	return review;


 }

}

module.exports = new ReviewService();