import User from '../model/userSchems.js';

export const SubmitPost = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (!email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    const newFeedback = new User({
        name,
        email,
        message,
        date: new Date().toISOString()
    });

    try {
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save feedback' });
    }
}


export const GetFeedbacks = async (req, res) => {
    try {
        const feedbacks = await User.find();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch feedbacks' });
    }
}