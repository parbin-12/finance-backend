import Record from "../models/record.model.js";

export const getDashboard = async (req, res) => {
    try {
        const records = await Record.find({ user: req.user._id });

        let totalIncome = 0;
        let totalExpense = 0;

        records.forEach((item) => {
            if (item.type === "income") {
                totalIncome += item.amount;
            } else {
                totalExpense += item.amount;
            }
        });

        const balance = totalIncome - totalExpense;

        res.status(200).json({
            success: true,
            data: {
                totalIncome,
                totalExpense,
                balance,
                totalTransactions: records.length
            }
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};