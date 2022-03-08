//Create, Read, Update, Delete
import { listErrors } from "../utilities/tools";
import WilderModel from "./../models/Wilder";

const methods = {
  create: (req, res, next) => {
    //POST
    const { name, city, skills } = req.body;
    //Routes ou endpoints

    WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name: name,
        city: city,
        skills: skills,
      });
      wilder
        .save()
        .then((result) => {
          console.log("success", result);
          res.json({ success: true, result });
        })
        .catch((err) => {
          //   console.log("erreur", err);

          res.status(400).json({ success: false, result: listErrors(err) });
        });
    });
  },
};

export default methods;
