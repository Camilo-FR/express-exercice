import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WilderSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Le nom est requis"],
  },
  city: {
    type: String,
    required: [true, "La ville est requise"],
  },
  skills: [
    //Chaque skills pourra contenir un titre de type string et les votes de type number
    {
      title: String,
      votes: Number,
    },
  ],
});

export default mongoose.model("wilder", WilderSchema);
