module.exports = (mongoose, mongoosePaginate) => {

  var schema = mongoose.Schema(
    {
      userId: String,
      displayName: String,
      displayImage: String,
      coupon: {
        c1: Boolean,
        c2: Boolean
      }
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Datauser = mongoose.model("datauser", schema);
  return Datauser;
};