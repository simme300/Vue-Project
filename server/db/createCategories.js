import Category from '../models/Categories.js';

async function insertCategories() {
	try {
		const categories = await Category.insertMany([
			{ name: 'Category-A' },
			{ name: 'Category-B' },
			{ name: 'Category-C' },
			{ name: 'Category-D' },
			{ name: 'Category-E' },
			{ name: 'Category-F' },
			{ name: 'Category-G' },
			{ name: 'Category-H' },
			{ name: 'Category-I' },
			{ name: 'Category-J' },
		]);
		console.log('inserted cateories!', categories);
		return categories;
	} catch (error) {
		console.log('error inserting categories', error);
	}
}

async function findAllCategories() {
	try {
		const categories = await Category.find();
		return categories;
	} catch (error) {
		console.log('Error fetching documents!');
	}
}

export { insertCategories, findAllCategories };
