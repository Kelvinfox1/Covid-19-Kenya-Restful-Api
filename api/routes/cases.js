const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose");


const Cases = require('../models/cases');

router.get("/", (req, res, next) => {
    Cases.find()
      .exec()
      .then(docs => {
        console.log(docs);
        //   if (docs.length >= 0) {
        res.status(200).json(docs);
        //   } else {
        //       res.status(404).json({
        //           message: 'No entries found'
        //       });
        //   }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

router.post('/',(req, res, next) => {
    const cases = new Cases({
        data:{
            summary:{
                _id: new mongoose.Types.ObjectId(),
                total: req.body.total,
                confirmedCasesKenyan: req.body.confirmedCasesKenyan,
                confirmedCasesForeign: req.body.confirmedCasesForeign,
                discharged: req.body.discharged,
                death: req.body.death,
                awaitingConfirmation: req.body.awaitingConfirmation

            }
        
        }
      });
      cases
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Handling POST requests to /cases",
            casesUpdated: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    });

router.get('/:casesId', (req, res, next) => {
    const id = req.params.casesId;
    Cases.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

  router.patch("/:casesId", (req, res, next) => {
    const id = req.params.casesId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Cases.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

router.delete("/:casesId", (req, res, next) => {
    const id = req.params.casesId;
    Cases.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  



module.exports = router;
