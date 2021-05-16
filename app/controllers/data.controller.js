// const db = require("../models");
// const Data = db.data;
// exports.create = (req, res) => {
//   if (!req.body.title) {
//     res.status(400).send({ message: "Content cann not be empty!" })
//     return
//   }
//   const data = new Data({
//     title: req.body.title,
//     description: req.body.description,
//     published: req.body.published ? req.body.published : false
//   })

//   data.save(data).then(data => { res.send(data) }).catch(err => {
//     res.status(500).send({
//       message: err.message || "some error occurred while creating the data"
//     })
//   })
// };



// exports.findAll = (req, res) => {
//   const title = req.query.title

//   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } :
//     Data.find(condition).then(data => {
//       res.end(data)
//     })
//       .catch(err => {
//         res.status(500).send({
//           message: err.message || "some error occurred while retrieving"
//         })
//       })
// };



// exports.findOne = (req, res) => {
//   const id = req.param.id

//   Data.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Tutorial with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Tutorial with id =" + id });
//     });
// };


// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty !"
//     })
//   }

//   const id = req.param.id
//   Data.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
//     if (!data) {
//       res.status(404).send({
//         message: `Cannot update data with id =${id}.`
//       })
//     } else res.send({ message: "data was update success" })
//   }).catch(err => {
//     res.status(500).send({
//       message: "Error updateing Data with id=" + id
//     })
//   })
// };



// exports.delete = (req, res) => {
//   const id = req.params.id

//   Data.findByIdAndRemove(id)
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Tutorial with id=${id}.`
//         });
//       } else {
//         res.send({
//           message: "Data was deleted success!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Data with id=" + id
//       });
//     });
// };



// exports.deleteAll = (req, res) => {

//   Data.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Data were deleted success!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all Data."
//       });
//     });

// };


// exports.findAllPublished = (req, res) => {

//   Data.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving data."
//       });
//     });
// };


// // {
// //   "totalItems": 8,
// //   "tutorials": [...],
// //   "totalPages": 3,
// //   "currentPage": 1
// // }