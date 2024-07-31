import multer from "multer";
import path from 'path';
import fs from 'fs';
import paymentModel from "../Models/payment.model";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '../uploads/payments');

        if (fs.existsSync(uploadDir)) {
            cb(null, uploadDir);
        } else {
            fs.mkdirSync(uploadDir, { recursive: true });
            cb(null, uploadDir);
        }
    },

    filename: function (req, file, cb) {
        let orName = file.originalname;
        let ext = path.extname(orName);
        let basename = path.parse(orName).name;
        let filename = basename + "-" + Date.now() + ext;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });

export const getPayments = async (req, res) => {
    try {
        const payments = await paymentModel.find();
        if (payments) {
            return res.status(201).json({
                data: payments,
                message: 'All data Fetched',
                filepath: process.env.FILE_URL + "payments/"
            });
        }
        return res.status(400).json({
            message: "Bad request",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getPayment = async (req, res) => {
    try {
        const paymentID = req.params.payment_id;
        const payment = await paymentModel.findOne({ _id: paymentID });
        if (payment) {
            return res.status(200).json({
                data: payment,
                message: "Data is Fetched"
            });
        }
        return res.status(400).json({
            message: "Bad request",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const addPayment = async (req, res) => {
    try {
        const updateData = upload.single("paymentimage");
        updateData(req, res, async function (err) {
            if (err) return res.status(400).json({ message: err.message });

            const { doctorname, Billno, Tax, date, Patientname, Fees } = req.body;

            let filename = null;
            if (req.file) {
                filename = req.file.filename;
            }

            const newPayment = new paymentModel({
                doctorname,
                Billno,
                Tax,
                date,
                Patientname,
                Fees,
                image: filename,
            });

            await newPayment.save();

            return res.status(201).json({
                data: newPayment,
                message: "New Data Added successfully",
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const updatePayment = async (req, res) => {
    try {
        const updateData = upload.single("paymentimage");
        updateData(req, res, async function (err) {
            if (err) return res.status(400).json({ message: err.message });

            const paymentID = req.params.payment_id;
            const existingPayment = await paymentModel.findOne({ _id: paymentID });
            const { doctorname, Billno, Tax, date, Patientname, Fees } = req.body;

            let filename = existingPayment.image;
            if (req.file) {
                filename = req.file.filename;
                if (fs.existsSync("./uploads/payments/" + existingPayment.image)) {
                    fs.unlinkSync("./uploads/payments/" + existingPayment.image);
                }
            }

            const updatedPayment = await paymentModel.updateOne(
                { _id: paymentID },
                {
                    $set: {
                        doctorname,
                        Billno,
                        Tax,
                        date,
                        Patientname,
                        Fees,
                        image: filename,
                    },
                }
            );
            if (updatedPayment.acknowledged) {
                return res.status(200).json({
                    message: "Data is Updated successfully",
                });
            }
            return res.status(400).json({
                message: "Bad request",
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const deletePayment = async (req, res) => {
    try {
        const uploadDir = "./uploads/payments/";
        const paymentID = req.params.payment_id;
        const existingPayment = await paymentModel.findOne({ _id: paymentID });
        const payment = await paymentModel.deleteOne({ _id: paymentID });
        if (payment.acknowledged) {
            if (fs.existsSync(uploadDir + existingPayment.image)) {
                fs.unlinkSync(uploadDir + existingPayment.image);
            }
            return res.status(200).json({
                message: "Data is Deleted",
            });
        }
        return res.status(400).json({
            message: "Bad request",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
