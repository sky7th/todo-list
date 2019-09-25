import * as mongoose from 'mongoose';
import Category from './category.interface';

const categorySchema = new mongoose.Schema({
    name: String,
});

const categoryModel = mongoose.model<Category & mongoose.Document>('Category', categorySchema);

export default categoryModel;