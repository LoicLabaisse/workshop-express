const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM avenger", (err, results) => {
    if (err) {
      res.status(500).send("error retrieving your data");
    } else {
      res.json(results);
    }
  });
});
//GET route field //

router.get("/:fields", (req, res) => {
  let charac = "";
  const field = ["id", "firstname", "power", "birthday"];
  if (field.includes(req.params.field)) {
    charac = `SELECT ${req.params.field} FROM avenger ORDER BY ${req.params.field}`;
  }
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("error");
    } else {
      res.status(200).json(results);
    }
  });
});

// GET with firstname that contains T //

router.get("/firstname/t", (req, res) => {
  connection.query(
    "SELECT * FROM avenger WHERE firstname LIKE '%t%'",
    (err, results) => {
      if (err) {
        res.status(500).send(`error`);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// GET with firstname that countains a //

router.get("/firstname/a", (req, res) => {
  connection.query(
    "SELECT * FROM avenger WHERE firstname LIKE '%a%'",
    (err, results) => {
      if (err) {
        res.status(500).send(`error`);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

//GET with date greater than 01/01/1960 //

router.get("/avenger/birthday", (req, res) => {
  connection.query(
    "SELECT * FROM avenger WHERE birthday > '01/01/1960'",
    (err, results) => {
      if (err) {
        res.status(500).send(`error`);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.get("list/birthdays", (req, res) => {
  connection.query(
    "SELECT * FROM avenger ORDER BY birthday",
    (err, results) => {
      if (err) {
        res.status(500).send(`error`);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// POST //

router.post("/"),
  (req, res) => {
    const { firstname, power, birthday, description, disponibility } = req.body;
    connection.query(
      "INSERT INTO avenger (firstname, power, birthday, description, disponibility VALUES (?,?,?,?,?)",
      [req.body],
      (err, results) => {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send("Success saved !");
        }
      }
    );
  };

// PUT //
router.put("/avengers/:id"),
  (req, res) => {
    connection.query(
      "UPDATE avenger SET avengers WHERE id=?",
      [req.params.id],
      (err, results) => {
        if (err) {
          res.status(500).send("Error updating a character");
        } else {
          res.status(200).send("Update success");
        }
      }
    );
  };
// DELETE //
router.delete("/avengers/:id"),
  (req, res) => {
    connection.query(
      "DELETE * FROM avenger WHERE id=?",
      [req.params.id],
      (err, results) => {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send("Delete success");
        }
      }
    );
  };

router.delete("/avengers/"),
  (req, res) => {
    connection.query(
      "DELETE * FROM avenger WHERE id=0",
      [req.params.id],
      (err, results) => {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send("Delete success");
        }
      }
    );
  };
module.exports = router;
