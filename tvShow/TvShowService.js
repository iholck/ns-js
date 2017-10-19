const createId = require('../utils/idUtil');
const TvShow = require('./TvShow');

class TvShowService {
constructor() {
	this.tvShows = [
		new TvShow(createId(),'Mr.Robot','Drama'),
		new TvShow(createId(),'Black Mirror','Drama'),
		new TvShow(createId(),'Battlestar Galactica','Sci-fi')
/*
		{	id: 1, name: 'Mr.Robot',genre: 'Drama'} ,
		{	id: 2, name: 'Black Mirror',genre: 'Drama'} ,
		{	id: 3, name: 'Battlestar Galactica',genre: 'Sci-fi'} 
		*/
		];
	//this.tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama')];
}
 getAll() {
 	return this.tvShows;
 }
 

 getById(id){
 	console.log(`GetById run. id: ${id}, shows: ${JSON.stringify(this.tvShows)}`);
 	return this.tvShows.find(show => show.id == id);
 }
 
 deleteById(id){
 	console.log(`DeleteById run. id: ${id} `);
 	this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);
 }

 createTvShow(name,genre){
 	const myId = createId();
 	const tvShow = new TvShow(myId,name,genre);
	this.tvShows.push(tvShow);
	return tvShow;


 }


}
module.exports = new TvShowService();