# TMDB API

## Introduction

This is a Node.js wrapper of TMDB API. We apply chain-style design on it, which make it more semantic and functional. Here, each methods only accept one argument, and the name of this method tells you what it is.

**TMDB OBJECT**  
Return **TMDB** Object by *Tmdb.init(key)* method, its *run()* method as the end of chain return a promise which will be resolved to *DATA OBJECT*

**DATA OBJECT**  
This object is getten by *TMDB.run()*, and it returns plain json data by *DATA.output()* method. It has two methods:

* *filter()*  filter data by location,etc
* *image()* replace image url from relative URL to absolute URL

## Example

```javascript
    //Write the key you get from TMDB here, version 4
    const key = '' 
    
    //Initialize the TMDB object
    const TMDB = Tmdb.init(key) 
    
    //Get the detail of Game of Throne season 2 episodes 1, return Data Object
    const Data = await TMDB.television('3199').season(2).episodes(1).detail().end().run()

    //Filter Data object, change image url to absolute URL, and output data
    const data = Data.filter().image().output()
```

## API

***run()*** is the method which must be put at the end of TMDB chain to pratically execute request. **TMDB CHAIN** is used to get **DATA OBJECT**.

***end()*** has to be put before **run()** to end request chain. This method return **TMDB OBJECT** itself.

***output()*** has to be put at the end of **DATA CHAIN** to return json data from **DATA OBJECT**. 

### television

* **Get the detail of an episode**  
     TMDB.television('3199').season(2).episodes(1).detail().end().run()  
     Data.filter().image().output()  

* **Get the credit of an episode**  
    TMDB.television('3199').season(2).episodes(1).credit().end().run()  
    Data.filter().image().output()  

* **Get the external IDs of an episode**  
    TMDB.television('3199').season(2).episodes(1).externalIDs().end().run()  
    Data.filter().image().output()  

* **Get the image of an episode**  
    TMDB.television('3199').season(2).episodes(1).image().end().run()  
    Data.filter().image().output()  

* **Get the videos of an episode**  
    TMDB.television('3199').season(2).episodes(1).videos().end().run()  
    Data.filter().image().output()  

* **Get the detail of a season**  
    TMDB.television('3199').season(2).detail().end().run()  
    Data.filter().image().output()  

* **Get the credit of a season**  
    TMDB.television('3199').season(2).credit().end().run()  
    Data.filter().image().output()  

* **Get the image of a season**  
    TMDB.television('3199').season(2).image().end().run()  
    Data.filter().image().output()  

* **Get the videos of a season**  
    TMDB.television('3199').season(2).videos().end().run()  
    Data.filter().image().output()  

* **Get the detail of a series**  
    TMDB.television('3199').detail().end().run()  
    Data.filter().image().output()  

* **Get the credit of a series**  
    TMDB.television('3199').credit().end().run()  
    Data.filter().image().output()  

* **Get the rates of a series**  
    TMDB.television('3199').rating().end().run()  
    Data.filter().image().output()  

* **Get the image of a series**  
    TMDB.television('3199').image().end().run()  
    Data.filter().image().output()  

* **Get the keywords of a series**  
    TMDB.television('3199').keywords().end().run()  
    Data.filter({ location: 'US' }).image().output()  

* **Get the list of TV show recommendations for this series**  
    TMDB.television('3199').recommendations().page().end().run()  
    Data.filter().image().output()  

* **Get the reviews of a series**  
    TMDB.television('3199').review().page().end().run()  
    Data.filter().image().output()  

* **Get a list of seasons or episodes that have been screened in a film festival or theatre**  
    TMDB.television('3199').screenedTheatrically().end().run()  
    Data.filter().image().output()  

* **Get similar series of a series**  
    TMDB.television('3199').similar().page().end().run()  
    Data.filter().image().output()  

* **Get where you can watch this series**  
    TMDB.television('3199').provider().end().run()  
    Data.filter({ location: 'US' }).image().output()  

* **Get the most newly created TV show**  
    TMDB.television().lastest().end().run()  
    Data.filter().image().output()  

* **Get a list of TV shows that are airing today**  
    TMDB.television().airingToday().end().run()  
    Data.filter().image().output()  

* **Get a list of shows that are currently on the air**  
    TMDB.television().onTheAir().page().end().run()  
    Data.filter().image().output()  

* **Get a list of the current popular TV shows on TMDb**  
    TMDB.television().popular().page().end().run()  
    Data.filter().image().output()  

* **Get a list of the top rated TV shows on TMDb**  
    TMDB.television().topRated().end().run()  
    Data.filter().image().output()  

* **Get the daily or weekly trending series**  
    TMDB.television().trending().time().end().run()  
    Data.filter().image().output()  

* **Discover series by different types of data like average rating, number of votes, genres and certifications**  
    TMDB.television().discover().parameter().page().end().run()  
    Data.filter().image().output()  

* **Search series**  
    TMDB.television().search().keyword().adult().region().page().end().run()  
    Data.filter().image().output()  

### movie

* **Get the daily or weekly trending movies**  
    TMDB.movie().trending().time().end().run()  
    DATA.filter().image().output()  

* **Discover movies by different types of data like average rating, number of votes, genres and certifications**  
    TMDB.movie().discover().parameter().page().end().run()  
    DATA.filter().image().output()  

* **Get credit of a movie**  
    TMDB.movie('550').credit().end().run()  
    DATA.filter().image().output()  

* **Get detail of a movie**  
    TMDB.movie('550').detail().end().run()  
    DATA.filter().image().output()  

* **Get the external IDs of a movie**  
    TMDB.movie('550').externalIDs().end().run()  
    DATA.filter().image().output()  

* **Get the image of a movie**  
    TMDB.movie('550').image().end().run()  
    DATA.filter().image().output()  

* **Get the recommendation by a movie**  
    TMDB.movie('550').recommendation().page().end().run()  
    DATA.filter().image().output()  

* **Get the release infomation**  
    TMDB.movie().release().end().run()  
    DATA.filter({ location: 'US' }).image().output()  

* **Get similar movies by a movie**  
    TMDB.movie('550').similar().page().end().run()  
    DATA.filter().image().output()  

* **Get where you can watch a movie**  
    TMDB.movie('550').provider().end().run()  
    DATA.filter({ location: 'US' }).image().output()  

* **Get the most newly created movie**  
    TMDB.movie().lastest().end().run()  
    DATA.filter().image().output()  

* **Get a list of movies in theatres**  
    TMDB.movie().playing().page().end().run()  
    DATA.filter().image().output()  

* **Get a list of the current popular movies on TMDB**  
    TMDB.movie().topRated().region().page().end().run()  
    DATA.filter().image().output()  

* **Get a list of upcoming movies in theatres**  
    TMDB.movie().upComing().region().page().end().run()  
    DATA.filter().image().output()  

* **Search for movies**  
    TMDB.movie().search().keyword().adult().region().page().end().run()  
    DATA.filter().image().output()  

## company

* **Get the detail of a company**  
    TMDB.company().detail().end().run()  
    DATA.filter().image().output()  

* **Get the image of a company**  
    TMDB.company().image().end().run()  
    DATA.filter().image().output()  

## network

* **Get the details of a network**  
    TMDB.network().detail().end().run()  
    DATA.filter().image().output()  

* **Get the image of a network**  
    TMDB.network().image().end().run()  
    DATA.filter().image().output()  

## genres

* **Get movie genres**  
    TMDB.genres().movie().end().run()  
    DATA.filter().image().output()  

* **Get television genres**  
    TMDB.genres().television().end().run()  
    DATA.filter().image().output()  

## imdb

* **Get the detail of movie or television by IMDB ID**  
    TMDB.imdb('tt345621').find().end().run()  
    DATA.filter().image().output()  

## people

* **Get the detail of a person**  
    TMDB.people('287').detail().end().run()  
    DATA.filter().image().output()  

* **Get the credit of a person on move or television or all**  
    TMDB.people('297').credit().television().end().run()  
    TMDB.people('297').credit().movie().end().run()  
    TMDB.people('297').credit().all().end().run()  
    DATA.filter().image().output()  

* **Get the external IDs of a person**  
    TMDB.people('297').eternalIDs().end().run()  
    DATA.filter().image().output()  

* **Get the image of a person**  
    TMDB.people('297').image().end().run()  
    DATA.filter().image().output()  

* **Get the most newly created person**  
    TMDB.people().lastest().end().run()  
    DATA.filter().image().output()  

* **Get the list of popular people on TMDB**  
    TMDB.people().page().end().run()  
    DATA.filter().image().output()  

## certification  

* **Get the certification of movie or television**  
    TMDB.certification().movie().end().run()  
    TMDB.certification().television().end().run()  
    DATA.filter().image().output()  

## configuration

* **Get the system wide configuration information**  
    TMDB.configuration().read().end().run()  
    DATA.filter().image().output()  
