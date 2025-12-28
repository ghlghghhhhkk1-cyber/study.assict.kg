export default function handler(req, res) {
    if (req.method === "POST") {
        const { amount } = req.body;
        console.log("Оплата:", amount);

        // Здесь можно добавить отправку в Telegram или обработку
        // Например, fetch к вашему Telegram-боту

        res.status(200).json({ success: true });
    } else {
        res.status(405).send("Метод не поддерживается");
    }
}
