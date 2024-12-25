import { pool } from "../database/postgresConnection.mjs";

const movieModel = {


getMovies: async () => {
    try {
        const result = await pool.query(`
SELECT   
movies.id, 
movies.title, 
movies.description,
movies.img_url, 
movies.thumbnail_url,
movies.year, 
movies.rating,
genres.genre_type
FROM movies
INNER JOIN genres
ON movies.genreid = genres.id
ORDER BY id ASC `);   
        return result.rows;
    } catch (error) {
        console.error(error);
    }
},

getMovieById: async (id) => {
    try {
      const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
      return result.rows; 
    } catch (error) {
      console.error(error);
    }
  },

genreSizeMovie: async () => {
    try {
       const genreSize = await pool.query(`SELECT * FROM genres ORDER BY id ASC`)
        return genreSize.rows
    } catch (error) {
       console.error(error) 
    }
},

createMovie: async (jonas) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = jonas
    const genreidInt = parseInt(genreid)
    const yearInt = parseInt(year)
    const ratingInt = parseInt(rating)
    try {
       const insertMovie = await pool.query(`
        INSERT INTO movies (title, description, img_url, thumbnail_url, year, genreid, rating )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING title, description, img_url, thumbnail_url, year, genreid, rating`, 
        [title, description, img_url, thumbnail_url, yearInt, genreidInt, ratingInt] )
        
       return insertMovie.rows[0]

        
    } catch (error) {
        console.error(error)
    }
},

updateMovie: async (id, newData) => {
console.log(newData)


    const yearInt = parseInt(newData.year) 
    const genreidInt = parseInt(newData.genreId) 
    const ratingInt = parseInt(newData.rating)
    const idInt = parseInt(id)

    try { 
        
     const updateMovie = await pool.query(
         `UPDATE movies 
      SET title = $1, 
      description = $2, 
      img_url = $3, 
      thumbnail_url = $4, 
      year = $5, 
      genreid  = $6,
      rating = $7
      WHERE id = $8;`, [newData.title, 
        newData.description, 
        newData.img_url, 
        newData.thumbnail_url, 
        yearInt, 
        genreidInt, 
        ratingInt, 
        idInt,
     ]
     ) 
    console.log(updateMovie)    
     return updateMovie.rowCount

    } catch (error) {
        console.error(error)  
         return error.severity
    }  
},

deleteMovie: async (id) => { 
    
    const deleteMovie = await pool.query( `
        DELETE FROM movies
        WHERE id = $1;`,
        [id] )    
    return(deleteMovie.rowCount)
}
    
}
export {movieModel}


