import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "TOKIMEKI Runners", duration: "4:36" },
    { title: "CHASE!", duration: "4:18" },
    { title: "Love U my friends", duration: "3:59" },
    { title: "Brightest Melody", duration: "4:20" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
