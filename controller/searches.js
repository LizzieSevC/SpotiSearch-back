const SongsData = require("../model/SongsData");
const Searches = require("../model/SongsData");

const controllerSearches = {
    getSongs: async (req, res) => {
      try {
        const songs = await SongsData.find({});
  
        res.json(songs);
      } catch (err) {
        return res.status(500).json({ msg: err.message });
      }
    },
    getSong: async (req, res) => {
      try {
      const song = await SongsData.find({Song:{$regex:req.params._id, $options:'i'}});
      const songArtist = await SongsData.find({Artist:{$regex:req.params._id, $options:'i'}});
      const songGenre = await SongsData.find({Genre:{$regex:req.params._id, $options:'i'}});
      const songs = song.concat(songArtist).concat(songGenre)
      res.json(songs);
      } catch (err) {
        return res.status(500).json({ msg: err.message });
      }
    }
  };
  
  module.exports = controllerSearches;