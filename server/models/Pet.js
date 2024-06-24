import mongoose from "mongoose";

const PetSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    owner: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    type: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    picturePath: {
      type: String,
      default: "",
    },   
    age: Number,
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);
export default Pet;


