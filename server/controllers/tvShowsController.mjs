
import { tvShowModel } from "../models/tvShowModel.mjs"


const tvShowsController = {
  getTvShows: async (req, res) => {
    try {
      const dbTvShowsData = await tvShowModel.getTvShows()
      res.status(200).json({
        status:'ok', 
        msg:'Get all tvshows list',
        data: dbTvShowsData,
      })

    } catch (err) {
        console.error(err)
        res.status(500).json({ status: 'err', msg: "Can't get tvshows data" });
    }
  },

  getTvShowById: async (req, res) => {
    const { id } = req.params; 
  
    try {
      const tvShow = await tvShowModel.getTvShowById(id);
  
      if (tvShow.length === 0) {
        return res.status(404).json({
          status: 'err',
          msg: 'tvShow not found',
        });
      }
  
      res.status(200).json({
        status: 'ok',
        msg: 'tvShow found',
        data: tvShow,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'err', msg: "Can't get tvShow data" });
    }
  },

  searchTvShows: async (req, res) => {
    const{data} = req.body
   
    try {     
      const searchTvShow = await tvShowModel.searchTvShows(data)     
      res.status(200).json({status: 'ok', msg:"get search data successfully", data:searchTvShow})
    } catch (error) {
      console.error(error)
    }
  },

  postTvShows: async (req, res) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = req.body

    try {

    const checkGenre = await tvShowModel.genreidTvShow(genreid)
    
    if(checkGenre === 0  ){
      return res.status(409).json({status:'err', msg:'wrong genre'})
    }
    
      const postTvShowResult = await tvShowModel.createTvShow({

        title,
        description,
        img_url,
        thumbnail_url,
        year,
        genreid,

        rating 
      })
      res.status(200).json({
        status:'ok',
        msg:'Create tvshow success',
        data:postTvShowResult
      })

    } catch (err) {
      console.error(err)
      res.status(500).json({ status: 'err', msg: "Can't create tvshow" });
    }
  },
  
  putTvShows: async (req, res) => {
    const {id} = req.params
    const newData = req.body

   try {
    const updateTvShow = await tvShowModel.updateTvShow(
      id,
      newData
    )
   
    if(updateTvShow === 0){
      return res.status(404).json({
        status:'err',
        msg:'movie not found'
      })
    }

    if(updateTvShow === 'ERROR'){
      return res.status(500).json({
        status:'err',
        msg:'DB error'
      })
    }
   
    res.status(200).json({status:'ok', msg:'tvshow updated success'})

   } catch (error) {
    console.error(error)
   }

  },
  
  deleteTvShows: async (req, res) => {
    const {id} = req.params
    try {
      const deleteTvShow = await tvShowModel.deleteTvShow(
        id,
      )
 
      if(deleteTvShow === 0){
        res.status(404).json({status:'err', msg:'tvshow cannot be deleted' })
      }

      res.status(200).json({status:'ok', msg:'tvshow deleted success'})
    } catch (error) {
      console.error(error)
    }
  }
    
}
export { tvShowsController }



