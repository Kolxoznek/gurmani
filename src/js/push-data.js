import axios from "axios";

const arr = [
	{
		"name": "Мини сет",
		"card-descr": "24шт/600гр",
		"descr": "",
		"price": 810,
		"img": "/images/Мини сет.png",
		"category": "sushi-sets"
	},
	{
		"name": "Сет три цезаря",
		"card-descr": "24шт/750гр",
		"descr": "",
		"price": 926,
		"img": "/images/Сет три Цезаря.png",
		"category": "sushi-sets"
	},
	{
		"name": "Сет для двоих",
		"card-descr": "32шт/750гр",
		"descr": "",
		"price": 950,
		"img": "/images/Сет для двоих.png",
		"category": "sushi-sets"
	},
	{
		"name": "Филадельфия сет",
		"card-descr": "24шт/750гр",
		"descr": "",
		"price": 1250,
		"img": "/images/Филадельфия сет.png",
		"category": "sushi-sets",
		"popular": true
	},
	{
		"name": "Запеченый сет",
		"card-descr": "24шт/800гр",
		"descr": "",
		"price": 995,
		"img": "/images/Запеченый сет.png",
		"category": "sushi-sets"
	},
	{
		"name": "Сет вулкан мини",
		"card-descr": "16шт/550гр",
		"descr": "",
		"price": 770,
		"img": "/images/Сет вулкан мини.png",
		"category": "sushi-sets"
	},
	{
		"name": "Темпура сет",
		"card-descr": "32шт/900гр",
		"descr": "",
		"price": 1334,
		"img": "/images/Темпура сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Сет для одного",
		"card-descr": "16шт/350гр",
		"descr": "",
		"price": 475,
		"img": "/images/Сет для одного.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Маки сет",
		"card-descr": "48шт/700гр",
		"descr": "",
		"price": 870,
		"img": "/images/Маки сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Горячий сет",
		"card-descr": "32шт/1000гр",
		"descr": "",
		"price": 1334,
		"img": "/images/Горячий сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Гункан сет",
		"card-descr": "",
		"descr": "",
		"price": 590,
		"img": "/images/Гункан сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Вулкан сет",
		"card-descr": "32шт/1100гр",
		"descr": "",
		"price": 1492,
		"img": "/images/Вулкан сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Калифорния сет",
		"card-descr": "32шт/850гр",
		"descr": "",
		"price": 1280,
		"img": "/images/Калифорния сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Фудзи сет",
		"card-descr": "56шт/1300гр",
		"descr": "",
		"price": 1827,
		"img": "/images/Фудзи сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Токио сет",
		"card-descr": "32шт/1050гр",
		"descr": "",
		"price": 1517,
		"img": "/images/Токио сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Самурай сет",
		"card-descr": "48шт/1200гр",
		"descr": "",
		"price": 1817,
		"img": "/images/Самурай сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Туна сет",
		"card-descr": "32шт/1100гр",
		"descr": "",
		"price": 1595,
		"img": "/images/Туна сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Гурмани сет",
		"card-descr": "64шт/2100гр",
		"descr": "",
		"price": 2786,
		"img": "/images/Гурмани сет.png",
		"category": "sushi-sets",
		"popular": false
	},
	{
		"name": "Пеперони",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 367,
		"img": "/images/Пепперони.png",
		"category": "pizza",
		"popular": true
	},
	{
		"name": "Мясная",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 371,
		"img": "/images/Мясная.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Тропикана",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 355,
		"img": "/images/Тропикана.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Гурмани",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 365,
		"img": "/images/Гурмани.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Маргарита",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 305,
		"img": "/images/Маргарита.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Маргарита",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 305,
		"img": "/images/Маргарита.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Супер острая",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 360,
		"img": "/images/Супер острая.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Цыпленок барбекью",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 355,
		"img": "/images/Цыпленок барбекью.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Домашняя",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 367,
		"img": "/images/Домашняя.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Капричиоза",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 355,
		"img": "/images/Капричиоза.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Детская",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 340,
		"img": "/images/Детская.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Сырный цыпленок",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 377,
		"img": "/images/Сырный цыпленок.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Римская",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 350,
		"img": "/images/Римская.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Пепперони фреш",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 342,
		"img": "/images/Пепперони фреш.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Чизбургер",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 392,
		"img": "/images/Чизбургер.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "4 сыра",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 384,
		"img": "/images/4 сыра.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Азия",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 440,
		"img": "/images/Азия.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "4 сезона",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 365,
		"img": "/images/4 сезона.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Гавайская",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 370,
		"img": "/images/Гавайская.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Цезарь",
		"card-descr": "+ соус в подарок",
		"descr": "",
		"price": 430,
		"img": "/images/Цезарь.png",
		"category": "pizza",
		"popular": false
	},
	{
		"name": "Филадельфия с лососем",
		"card-descr": "8шт/250гр",
		"descr": "Лосось, огурец, сливочный сыр, рис",
		"price": 384,
		"img": "/images/Филадельфия с лососем.png",
		"category": "cold-rolls",
		"popular": true
	},
	{
		"name": "Сливочный с угрем",
		"card-descr": "8шт/200гр",
		"descr": "",
		"price": 257,
		"img": "/images/Сливочный с угрем.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Калифорния вакаме",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 340,
		"img": "/images/Калифорния вакаме.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Чикен тортилья маки",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 334,
		"img": "/images/Чикен тортилья маки.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Туна",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 310,
		"img": "/images/Туна.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Сливочный с авокадо",
		"card-descr": "8шт/200гр",
		"descr": "",
		"price": 185,
		"img": "/images/Сливочный с авокадо.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Чиз ролл",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 340,
		"img": "/images/Чиз ролл.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Калифорния с крабом",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 326,
		"img": "/images/Калифорния с крабом.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Сливочный с курицей",
		"card-descr": "8шт/200гр",
		"descr": "",
		"price": 200,
		"img": "/images/Сливочный с курицей.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Сяке тортилья маки",
		"card-descr": "8шт/200гр",
		"descr": "",
		"price": 376,
		"img": "/images/Сяке тортилья маки.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Филадельфия с тунцом",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 345,
		"img": "/images/Филадельфия с тунцом.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Сливочный с лососем",
		"card-descr": "8шт/200гр",
		"descr": "",
		"price": 255,
		"img": "/images/Сливочный с лососем.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Эби кунсей",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 370,
		"img": "/images/Эби кунсей.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Ролл с беконом",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 304,
		"img": "/images/Ролл с беконом.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Бонито с лососем",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 367,
		"img": "/images/Бонито с лососем.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Сливочный с тунцом",
		"card-descr": "8шт/200гр",
		"descr": "",
		"price": 225,
		"img": "/images/Сливочный с тунцом.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Дабл Фиш",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 207,
		"img": "/images/Дабл Фиш.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Бонито с курицей",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 334,
		"img": "/images/Бонито с курицей.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Ролл Цезарь",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 304,
		"img": "/images/Ролл Цезарь.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Бонито с тунцом",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 340,
		"img": "/images/Бонито с тунцом.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Сливочный лосось",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 364,
		"img": "/images/Сливочный лосось.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Унаги",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 375,
		"img": "/images/Унаги.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Туна кунсей",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 380,
		"img": "/images/Туна кунсей.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Калифорния с лососем",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 396,
		"img": "/images/Калифорния с лососем.png",
		"category": "cold-rolls",
		"popular": false
	},
	{
		"name": "Жаренный с креветкой",
		"card-descr": "8шт / 260гр",
		"descr": "Креветка, огурец, сливочный сыр, рис, унаги, кунжут",
		"price": 394,
		"img": "/images/Жаренный с креветкой.png",
		"category": "fried-rolls",
		"popular": true
	},
	{
		"name": "Чикен Хот",
		"card-descr": "8шт/220гр",
		"descr": "",
		"price": 284,
		"img": "/images/Чикен Хот.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Жареный дракон",
		"card-descr": "8шт/280гр",
		"descr": "",
		"price": 370,
		"img": "/images/Жареный дракон.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Теплый краб",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 335,
		"img": "/images/Теплый краб.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Гаваи темпура",
		"card-descr": "8шт/270гр",
		"descr": "",
		"price": 345,
		"img": "/images/Гаваи темпура.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Горячий цезарь",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 335,
		"img": "/images/Горячий цезарь.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Фурай",
		"card-descr": "8шт/260гр",
		"descr": "",
		"price": 375,
		"img": "/images/Фурай.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Чикен темпура",
		"card-descr": "8шт/240гр",
		"descr": "",
		"price": 375,
		"img": "/images/Чикен темпура.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Жаренный с курицей",
		"card-descr": "8шт/260гр",
		"descr": "",
		"price": 317,
		"img": "/images/Жаренный с курицей.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Унаги Хот",
		"card-descr": "8шт/220гр",
		"descr": "",
		"price": 327,
		"img": "/images/Унаги Хот.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Эби темпура",
		"card-descr": "8шт/270гр",
		"descr": "",
		"price": 394,
		"img": "/images/Эби темпура.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Жаренный с тунцом",
		"card-descr": "8шт/260гр",
		"descr": "",
		"price": 320,
		"img": "/images/Жаренный с тунцом.png",
		"category": "fried-rolls",
		"popular": false
	},
	{
		"name": "Запеченная филадельфия",
		"card-descr": "",
		"descr": "Лосось, авокадо, сливочный сыр, рис, унаги, кунжут",
		"price": 396,
		"img": "/images/Запеченная филадельфия.jpg",
		"category": "baked-rolls",
		"popular": true
	},
	{
		"name": "Калифорния хот",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 327,
		"img": "/images/Калифорния хот.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запеченный с копченым лососем",
		"card-descr": "8шт/300гр",
		"descr": "",
		"price": 396,
		"img": "/images/Запеченный с копченым лососем.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Чикен Чеддер",
		"card-descr": "8шт/250гр",
		"descr": "",
		"price": 330,
		"img": "/images/Чикен Чеддер.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запеченный с крабом",
		"card-descr": "8шт/300гр",
		"descr": "",
		"price": 354,
		"img": "/images/Запеченный с крабом.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Форест",
		"card-descr": "8шт/280гр",
		"descr": "",
		"price": 304,
		"img": "/images/Форест.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запеченный с креветкой",
		"card-descr": "8шт/300гр",
		"descr": "",
		"price": 407,
		"img": "/images/Запеченный с креветкой.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Крейзи чикен",
		"card-descr": "8шт/270гр",
		"descr": "",
		"price": 317,
		"img": "/images/Крейзи чикен.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запеченный с курицей",
		"card-descr": "8шт/300гр",
		"descr": "",
		"price": 364,
		"img": "/images/Запеченный с курицей.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Филадельфия хот",
		"card-descr": "8шт/270гр",
		"descr": "",
		"price": 360,
		"img": "/images/Филадельфия хот.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запеченный с лососем",
		"card-descr": "8шт/300гр",
		"descr": "",
		"price": 396,
		"img": "/images/Запеченный с лососем.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Теплый лосось",
		"card-descr": "8шт/260гр",
		"descr": "",
		"price": 407,
		"img": "/images/Теплый лосось.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запеченный с тунцом",
		"card-descr": "8шт/300гр",
		"descr": "",
		"price": 385,
		"img": "/images/Запеченный с тунцом.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запечный цезарь",
		"card-descr": "8шт/270гр",
		"descr": "",
		"price": 346,
		"img": "/images/Запечный цезарь.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Запеченный с угрем",
		"card-descr": "8шт/300гр",
		"descr": "",
		"price": 396,
		"img": "/images/Запеченный с угрем.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Карамельная Филадельфия",
		"card-descr": "",
		"descr": "",
		"price": 427,
		"img": "/images/Карамельная Филадельфия.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Магуро Хот",
		"card-descr": "",
		"descr": "",
		"price": 370,
		"img": "/images/Магуро Хот.jpg",
		"category": "baked-rolls",
		"popular": false
	},
	{
		"name": "Маки с лососем",
		"card-descr": "8шт/110гр",
		"descr": "",
		"price": 196,
		"img": "/images/Маки с лососем.png",
		"category": "maki-and-sushi",
		"popular": true
	},
	{
		"name": "Маки с угрем",
		"card-descr": "8шт/110гр",
		"descr": "",
		"price": 221,
		"img": "/images/Маки с угрем.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Суши с угрем",
		"card-descr": "1шт/45гр",
		"descr": "",
		"price": 136,
		"img": "/images/Суши с угрем.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Маки с тунцом",
		"card-descr": "8шт/110гр",
		"descr": "",
		"price": 185,
		"img": "/images/Маки с тунцом.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Маки с креветкой",
		"card-descr": "8шт/110гр",
		"descr": "",
		"price": 190,
		"img": "/images/Маки с креветкой.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Суши с тунцом",
		"card-descr": "1шт/45гр",
		"descr": "",
		"price": 124,
		"img": "/images/Суши с тунцом.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Запечный гункан с креветкой",
		"card-descr": "3шт/150гр",
		"descr": "",
		"price": 350,
		"img": "/images/Запечный гункан с креветкой.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Маки с авокадо",
		"card-descr": "8шт/110гр",
		"descr": "",
		"price": 125,
		"img": "/images/Маки с авокадо.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Маки с огурцом",
		"card-descr": "8шт/110гр",
		"descr": "",
		"price": 115,
		"img": "/images/Маки с огурцом.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Гункан с лососем",
		"card-descr": "3шт/150гр",
		"descr": "",
		"price": 340,
		"img": "/images/Гункан с лососем.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Запечный гункан с лососем",
		"card-descr": "3шт/150гр",
		"descr": "",
		"price": 350,
		"img": "/images/Запечный гункан с лососем.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Маки с чукой",
		"card-descr": "8шт/110гр",
		"descr": "",
		"price": 125,
		"img": "/images/Маки с чукой.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Суши с лососем",
		"card-descr": "1шт/45гр",
		"descr": "",
		"price": 124,
		"img": "/images/Суши с лососем.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Запечный гункан с тунцом",
		"card-descr": "3шт/150гр",
		"descr": "",
		"price": 350,
		"img": "/images/Запечный гункан с тунцом.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Гункан с тунцом",
		"card-descr": "3шт/150гр",
		"descr": "",
		"price": 340,
		"img": "/images/Гункан с тунцом.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Гункан с креветкой",
		"card-descr": "3шт/150гр",
		"descr": "",
		"price": 340,
		"img": "/images/Гункан с креветкой.png",
		"category": "maki-and-sushi",
		"popular": false
	},
	{
		"name": "Поке с креветками",
		"card-descr": "",
		"descr": "Креветки, авокадо, огурец, чука, черри, красный лук, рис, ореховый соус, тобико, зеленый лук, кунжут",
		"price": 450,
		"img": "/images/Поке с креветками.jpeg",
		"category": "salads-and-poke",
		"popular": true
	},
	{
		"name": "Поке с лососем",
		"card-descr": "",
		"descr": "",
		"price": 445,
		"img": "/images/Поке с лососем.jpeg",
		"category": "salads-and-poke",
		"popular": false
	},
	{
		"name": "Поке с тунцом",
		"card-descr": "",
		"descr": "",
		"price": 447,
		"img": "/images/Поке с тунцом.jpeg",
		"category": "salads-and-poke",
		"popular": false
	},
	{
		"name": "Салат Цезарь с креветками",
		"card-descr": "",
		"descr": "",
		"price": 317,
		"img": "/images/Салат Цезарь с креветками.jpeg",
		"category": "salads-and-poke",
		"popular": false
	},
	{
		"name": "Салат Цезарь с курицей",
		"card-descr": "",
		"descr": "",
		"price": 257,
		"img": "/images/Салат Цезарь с курицей.jpeg",
		"category": "salads-and-poke",
		"popular": false
	},
	{
		"name": "WOK с овощами гречневая",
		"card-descr": "",
		"descr": "Шампиньоны, болгарский перец, красный лук, морковь, устричный соус, лапша на выбор, зеленый лук, кунжут",
		"price": 304,
		"img": "/images/WOK с овощами гречневая.jpg",
		"category": "hot-dishes",
		"popular": true
	},
	{
		"name": "WOK с овощами пшеничная",
		"card-descr": "",
		"descr": "",
		"price": 280,
		"img": "/images/WOK с овощами пшеничная.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "WOK с овощами яичная",
		"card-descr": "",
		"descr": "",
		"price": 280,
		"img": "/images/WOK с овощами яичная.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "WOK с курицей гречневая",
		"card-descr": "",
		"descr": "",
		"price": 310,
		"img": "/images/WOK с курицей гречневая.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "WOK с курицей пшеничная",
		"card-descr": "",
		"descr": "",
		"price": 310,
		"img": "/images/WOK с курицей пшеничная.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "WOK с курицей яичная",
		"card-descr": "",
		"descr": "",
		"price": 310,
		"img": "/images/WOK с курицей яичная.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "WOK с морепродуктами гречневая",
		"card-descr": "",
		"descr": "",
		"price": 390,
		"img": "/images/WOK с морепродуктами гречневая.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "WOK с морепродуктами пшеничная",
		"card-descr": "",
		"descr": "",
		"price": 390,
		"img": "/images/WOK с морепродуктами пшеничная.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "WOK с морепродуктами яичная",
		"card-descr": "",
		"descr": "",
		"price": 390,
		"img": "/images/WOK с морепродуктами яичная.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "Мисо суп с лососем",
		"card-descr": "",
		"descr": "",
		"price": 304,
		"img": "/images/Мисо суп с лососем.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "Том Ям",
		"card-descr": "",
		"descr": "",
		"price": 360,
		"img": "/images/Том Ям.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "Том Кха",
		"card-descr": "",
		"descr": "",
		"price": 315,
		"img": "/images/Том Кха.jpg",
		"category": "hot-dishes",
		"popular": false
	},
	{
		"name": "Картофель по-деревенски",
		"card-descr": "",
		"descr": "",
		"price": 170,
		"img": "/images/Картофель по-деревенски.jpeg",
		"category": "hot-appetizers",
		"popular": true
	},
	{
		"name": "Картофель фри",
		"card-descr": "",
		"descr": "",
		"price": 160,
		"img": "/images/Картофель фри.jpeg",
		"category": "hot-appetizers",
		"popular": false
	},
	{
		"name": "Наггетсы 14 шт.",
		"card-descr": "",
		"descr": "",
		"price": 310,
		"img": "/images/Наггетсы 14 шт..jpeg",
		"category": "hot-appetizers",
		"popular": false
	},
	{
		"name": "Наггетсы 7 шт.",
		"card-descr": "",
		"descr": "",
		"price": 170,
		"img": "/images/Наггетсы 7 шт..jpeg",
		"category": "hot-appetizers",
		"popular": false
	},
	{
		"name": "Соевый соус",
		"card-descr": "",
		"descr": "",
		"price": 25,
		"img": "/images/Соевый соус.jpg",
		"category": "sauce",
		"popular": true
	},
	{
		"name": "Соус сырный",
		"card-descr": "",
		"descr": "",
		"price": 35,
		"img": "/images/Соус сырный.jpg",
		"category": "sauce",
		"popular": false
	},
	{
		"name": "Соус Спайс",
		"card-descr": "",
		"descr": "",
		"price": 40,
		"img": "/images/Соус Спайс.jpg",
		"category": "sauce",
		"popular": false
	},
	{
		"name": "Соус Унаги",
		"card-descr": "",
		"descr": "",
		"price": 40,
		"img": "/images/Соус Унаги.jpg",
		"category": "sauce",
		"popular": false
	},
	{
		"name": "Соус Цезарь",
		"card-descr": "",
		"descr": "",
		"price": 35,
		"img": "/images/Соус Цезарь.jpg",
		"category": "sauce",
		"popular": false
	},
	{
		"name": "Соус Барбекью",
		"card-descr": "",
		"descr": "",
		"price": 35,
		"img": "/images/Соус Барбекью.jpg",
		"category": "sauce",
		"popular": false
	},
	{
		"name": "Имбирь",
		"card-descr": "",
		"descr": "",
		"price": 20,
		"img": "/images/Имбирь.jpg",
		"category": "sauce",
		"popular": false
	},
	{
		"name": "Васаби",
		"card-descr": "",
		"descr": "",
		"price": 10,
		"img": "/images/Васаби.jpg",
		"category": "sauce",
		"popular": false
	},
]



arr.forEach(item => {
	axios.post('http://localhost:3000/products', item)
})
