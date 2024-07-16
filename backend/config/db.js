import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://manojsai:9182731495@cluster0.q3riwxd.mongodb.net/food-del', {
            dbName: 'Food-delivery',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};
