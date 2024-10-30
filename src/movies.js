// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorNames = moviesArray.map(onemovie => onemovie.director)
    return directorNames.filter((name, index) => directorNames.indexOf(name) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter((onemovie)=>{
        return onemovie.director === `Steven Spielberg` && onemovie.genre.includes(`Drama`);
    });
    return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScore = moviesArray.filter(onemovie => onemovie.score).reduce((accu,onemovie) => accu + onemovie.score ,0)
    if (moviesArray.length) {
        return Math.round( (totalScore / moviesArray.length) * 100 ) / 100
    } 
    return 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredMovies = moviesArray.filter(onemovie => onemovie.score && onemovie.genre.includes(`Drama`))
    const totalScore = filteredMovies.reduce((accu,onemovie) => accu + onemovie.score ,0)
    if (filteredMovies.length) {
        return Math.round( (totalScore / filteredMovies.length) * 100 ) / 100
    } 
    return 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = [...moviesArray];
    newArr.sort((a,b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year) return a.title.localeCompare(b.title)
    })
    return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray.map(onemovie => onemovie.title)
    return newArr.sort((a,b) => a.localeCompare(b)).slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const copyArry = moviesArray.map(x => x)
    copyArry.forEach( movie => {
            // Separate hours and minutes using regular expressions
            const hoursMatch = movie.duration.match(/(\d+)h/);
            const minutesMatch = movie.duration.match(/(\d+)min/);
 
            // Calculate total minutes
            const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
            const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
            const totalMinutes = (hours * 60) + minutes;
            movie.duration = totalMinutes;
            parseInt(movie.duration)
            
        }) ;   
return copyArry;    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) {return null} 

    const aggyears = []
    const yearsArr = moviesArray.map(onemovie => onemovie.year)
    const disYearsArr = yearsArr.filter((year, index) => yearsArr.indexOf(year) === index);

    disYearsArr.forEach(oneyear => {
        const filteredMovies = moviesArray.filter( onemovie => onemovie.year === oneyear)
        const newObj = {year : oneyear,
                        scoreAvg : scoresAverage(filteredMovies)
                       }
        aggyears.push(newObj) 
    })
    
    aggyears.sort((a,b)=> {
        if (a.scoreAvg > b.scoreAvg) return -1;
        if (a.scoreAvg< b.scoreAvg) return 1;
        if(a.scoreAvg === b.scoreAvg) return a.year - b.year;
    })
    return `The best year was ${aggyears[0].year} with an average score of ${aggyears[0].scoreAvg}`
}


 
