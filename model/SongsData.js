const { Schema, model } = require("mongoose");

const searchesSchema = new Schema(
  {
    Song: {
      type: String,
      required: true,
      trim: true,
    },
    Artist: {
      type: String,
      required: true,
    },
    Genre: {
        type: String,
        required: true,
    },
    Album: {
        type: String,
        required: true,
    },
    Year: {
        type: Number,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    Language: {
        type: String,
        required: true,
    },
  },
);

//updates version on atlas
searchesSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const SongsData = model("SongsData", searchesSchema);
module.exports = SongsData;