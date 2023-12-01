const imageArr = [
	'',
	'afternoon.jpg',
	'tokyo.jpg',
	'apocalypse.jpg',
	'azurelights.jpg',
	'battlefield.jpg',
	'ceremony.jpg',
	'mountains.png',
	'owl.jpg',
	'sekiro.png',
	'sunset.jpeg',
	'sunset2.jpg',
	'tree.jpg',
	'volcanic.jpg',
	'waterfall.jpg'
];
const _imageArr = imageArr.map((imageSrc) => `images/${imageSrc}`);

export { _imageArr as imageArr };
