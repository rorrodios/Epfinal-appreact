const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');

const userSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    rol: {
          type: String,
          required: true,
        },
      
    },
    {
      timestamps: null,
      versionKey: false,
    }
  );


userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }
  
  userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  })

module.exports = mongoose.model('user', userSchema);