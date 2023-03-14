const { User } = require("../../model/user/register");
const { Genre } = require("../../model/admin/genre");
const { Auction } = require("../../model/admin/auction");
const { Admin } = require("../../model/admin/admin");
const Jwt = require("jsonwebtoken");

module.exports = {
  postLogin: (req, res) => {
    try {
      const { email, password } = req.body;
      Admin.find({ email, password }).then(() => {
        const payload = {
          email: email,
        };
        Jwt.sign(
          payload,
          process.env.ADMIN_SECRET,
          {
            expiresIn: 3600000,
          },
          (err, token) => {
            if (err) {
              console.error("error occures");
            } else {
              res.send({
                success: true,
                token: `Bearer ${token}`,
              });
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  },

  getMember: (req, res) => {
    try {
      User.find()
        .select("-password")
        .then((docs) => {
          res.send({ success: true, users: docs });
        })
        .catch((e) => {
          res.send(e);
        });
    } catch (error) {}
  },

  addGenre: async (req, res) => {
    try {
      const genre = req.body.genre;
      const exist = await Genre.find({
        genre: { $regex: new RegExp(`^${genre}$`, "i") },
      });
      if (exist.length === 1) {
        res.send({ exist: true });
      } else {
        const newgenre = new Genre({
          genre: genre,
          isBlocked: false,
        });
        const data = await newgenre.save();
        if (data) {
          res.send({ success: true });
        }
      }
    } catch (error) {}
  },

  getGenre: (req, res) => {
    try {
      Genre.find()
        .then((docs) => {
          res.send({ success: true, genre: docs });
        })
        .catch((e) => {
          res.send(e);
        });
    } catch (error) {}
  },

  getGenreAuction: (req, res) => {
    try {
      Genre.find({ isBlocked: false })
        .then((docs) => {
          res.send({ success: true, genre: docs });
        })
        .catch((e) => {
          res.send(e);
        });
    } catch (error) {}
  },

  addAuction: (req, res) => {
    const data = req.body;
    const image = {
      url: req.file.path,
      filename: req.file.filename,
    };
    try {
      Auction.create({
        title: data.title,
        author: data.author,
        genre: data.genre,
        price: data.price,
        date: data.date,
        image: image,
      }).then(() => {
        res.send({ success: true });
      });
    } catch (err) {
      console.log(err);
    }
  },

  getAuction: (req, res) => {
    try {
      Auction.find().then((docs) => {
        res.send({ success: true, books: docs });
      });
    } catch (error) {}
  },

  postBlock: (req, res) => {
    try {
      const id = req.params.id;
      User.findOneAndUpdate({ _id: id }, { isBlocked: true }).then((member) => {
        res.send({ success: true, member: member });
      });
    } catch (error) {}
  },

  postUnBlock: (req, res) => {
    try {
      const id = req.params.id;
      User.findOneAndUpdate({ _id: id }, { isBlocked: false }).then(
        (member) => {
          res.send({ success: true, member: member });
        }
      );
    } catch (error) {}
  },

  postBlockGenre: (req, res) => {
    try {
      const id = req.params.id;
      Genre.findOneAndUpdate({ _id: id }, { isBlocked: true }).then((genre) => {
        res.send({ success: true, genre: genre });
      });
    } catch (error) {}
  },

  postUnBlockGenre: (req, res) => {
    try {
      const id = req.params.id;
      Genre.findOneAndUpdate({ _id: id }, { isBlocked: false }).then(
        (genre) => {
          res.send({ success: true, genre: genre });
        }
      );
    } catch (error) {}
  },
};
