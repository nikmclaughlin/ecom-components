export type ShopItem = {
	id: number;
	title: string;
	slug: string;
	price: number;
	imageSrc: string;
	desc_short: string;
	desc_long: string;
};

export const products: ShopItem[] = [
	{
		id: 1,
		title: "Book Name Here (2022)",
		slug: "book",
		price: 25.0,
		imageSrc: "../book_product.jpg",
		desc_short: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
		desc_long:
			"Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.",
	},
	{
		id: 2,
		title: "Watch Name",
		slug: "watch",
		price: 55.0,
		imageSrc: "../watch_product.jpg",
		desc_short: "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
		desc_long:
			"Enim nunc faucibus a pellentesque sit. Sagittis eu volutpat odio facilisis mauris sit. Fringilla urna porttitor rhoncus dolor purus. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tellus elementum sagittis vitae et. Odio ut sem nulla pharetra diam sit amet nisl. Non nisi est sit amet facilisis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Dictum varius duis at consectetur. Sem viverra aliquet eget sit. Nisi vitae suscipit tellus mauris a diam. Tortor posuere ac ut consequat semper viverra nam libero. Vitae suscipit tellus mauris a diam.",
	},
	{
		id: 3,
		title: "Bike Name",
		slug: "bike",
		price: 200.0,
		imageSrc: "../bike_product.jpg",
		desc_short: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
		desc_long:
			"Ornare quam viverra orci sagittis eu volutpat odio facilisis. Nisl vel pretium lectus quam id. Nibh sit amet commodo nulla facilisi. Commodo nulla facilisi nullam vehicula ipsum. Aliquam ut porttitor leo a diam sollicitudin tempor. Tincidunt lobortis feugiat vivamus at augue eget arcu. At consectetur lorem donec massa sapien faucibus et molestie ac. Neque convallis a cras semper. Volutpat odio facilisis mauris sit amet massa. Nibh tellus molestie nunc non blandit massa enim. Id diam vel quam elementum pulvinar etiam non quam. Libero enim sed faucibus turpis in eu mi bibendum.",
	},
	{
		id: 4,
		title: "Camera Name",
		slug: "camera",
		price: 115.0,
		imageSrc: "../camera_product.jpg",
		desc_short: "Corem ipsum dolor sit amet, consectetur adipiscing elit.",
		desc_long:
			"Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Accumsan sit amet nulla facilisi. Ac turpis egestas maecenas pharetra convallis. Quam elementum pulvinar etiam non. Volutpat maecenas volutpat blandit aliquam etiam.",
	},
	{
		id: 5,
		title: "Plant Name",
		slug: "plant",
		price: 15.0,
		imageSrc: "../plant_product.jpg",
		desc_short: "Porem ipsum dolor sit amet, consectetur adipiscing elit.",
		desc_long:
			"Urna condimentum mattis pellentesque id nibh tortor. Nunc sed velit dignissim sodales ut. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Aliquam eleifend mi in nulla posuere. Eu augue ut lectus arcu bibendum. Volutpat maecenas volutpat blandit aliquam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tristique senectus et netus et.",
	},
];
