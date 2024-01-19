const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    contactName: {
      type: String,
      required: [true, "username is required field"],
    },
    email: {
      type: String,
      required: [true, "Email is required field"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "This is invalid email",
      ],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    phone: {
      type: String,
    },
    imageUrl: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg",
    },
    adress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Contact = mongoose.model("contacts", contactSchema);
