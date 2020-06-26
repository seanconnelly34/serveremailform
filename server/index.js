const path = require("path");
const express = require("express");

//pdf
const pdf = require("pdfkit");
const doc = new pdf();
const fs = require("fs");

const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());

app.use(express.static(buildPath));

const transporter = require("./config");

app.post("/send", (req, res) => {
  console.log("reqqqq", req.body);
  doc.pipe(fs.createWriteStream(__dirname + "/file.pdf"));
  doc.text(`Date:  ${req.body.date}`, 50, 70);
  doc.text(`Name: ${req.body.name}`, 300, 70);
  doc.text(`Date of Birth: ${req.body.dob}`, 50, 90);
  doc.text(`Age: ${req.body.age}`, 300, 90);
  doc.text(`Health Card #: ${req.body.healthcard}`, 50, 110);
  doc.text(`Effective Date: ${req.body.effectivedate}`, 300, 110);
  doc.text(`Street Address: ${req.body.streetaddress}`, 50, 130);
  doc.text(`City: ${req.body.city}`, 300, 130);
  doc.text(`Province: ${req.body.province}`, 50, 150);
  doc.text(`Home Phone: ${req.body.homephone}`, 300, 150);
  doc.text(`Work Phone: ${req.body.workphone}`, 50, 170);
  doc.text(`Cell Phone: ${req.body.cellphone}`, 300, 170);
  doc.text(`Email: ${req.body.email}`, 50, 190);
  doc.text(`Occupation: ${req.body.occupation}`, 300, 190);
  doc.text(`Family Physician: ${req.body.famphysician}`, 50, 210);

  doc.text(
    `How would you like to be contacted? ${req.body.contacted}`,
    50,
    370
  );
  doc.text(`How did you hear of us? ${req.body.hearofus}`, 100, 370);

  doc.text(`Heart Disease: ${req.body.heartattack ? "yes" : "no"}`, 50, 390);
  doc.text(`Heart Disease: ${req.body.selectedDate}`, 100, 390);
  doc.text(`Heart Disease: ${req.body.heartdisease ? "yes" : "no"}`, 300, 390);

  doc.text(`Heart Disease: ${req.body.chestpain ? "yes" : "no"}`, 50, 410);
  doc.text(`Heart Disease: ${req.body.stroke ? "yes" : "no"}`, 300, 410);

  doc.text(`Heart Disease: ${req.body.bloodclots ? "yes" : "no"}`, 50, 430);
  doc.text(`Heart Disease: ${req.body.bleeding ? "yes" : "no"}`, 300, 430);

  doc.text(`Heart Disease: ${req.body.bloodpressure ? "yes" : "no"}`, 50, 450);
  doc.text(`Heart Disease: ${req.body.kidneydisease ? "yes" : "no"}`, 300, 450);

  doc.text(`Heart Disease: ${req.body.openingmomuth ? "yes" : "no"}`, 50, 470);
  doc.text(`Heart Disease: ${req.body.diabetes ? "yes" : "no"}`, 300, 470);

  doc.text(`Heart Disease: ${req.body.arthritis ? "yes" : "no"}`, 50, 490);
  doc.text(`Heart Disease: ${req.body.asthma ? "yes" : "no"}`, 300, 490);

  doc.text(`Heart Disease: ${req.body.seizures ? "yes" : "no"}`, 50, 510);
  doc.text(`Heart Disease: ${req.body.thyroid ? "yes" : "no"}`, 300, 510);

  doc.text(`Heart Disease: ${req.body.liversisease ? "yes" : "no"}`, 50, 530);
  doc.text(`Heart Disease: ${req.body.hiv ? "yes" : "no"}`, 300, 530);

  doc.text(`Heart Disease: ${req.body.depression ? "yes" : "no"}`, 50, 550);

  doc.image(req.body.trimmedSignature, 50, 600, { width: 150 });
  doc.end();

  try {
    const mailOptions = {
      from: req.body.email,
      to: req.body.email,
      subject: "Registration",
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: "Registration",
          path: __dirname + "/file.pdf",
          contentType: "application/pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "somthing went wrong, try again",
        });
      } else {
        res.send({
          success: true,
          message: "thanks for contacting us.",
        });
      }
    });
  } catch (error) {
    res.sendStatus(500).send({
      success: false,
      message: "Somting went wrong, try again later",
    });
  }
});

app.listen(3030, () => {
  console.log("server on port 3030");
});
