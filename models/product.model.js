import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"]
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is require"],
            default: 0
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            dafault: 0
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model("Product", ProductSchema);