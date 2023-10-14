const statuses = [ // This is not an all-encompassing list, but is the full supported list by https://http.cat/
	100,
	101,
	102,
	103,
	200,
	201,
	202,
	203,
	204,
	206,
	207,
	300,
	301,
	302,
	303,
	304,
	305,
	307,
	308,
	400,
	401,
	402,
	403,
	404,
	405,
	406,
	407,
	408,
	409,
	410,
	411,
	412,
	413,
	414,
	415,
	416,
	417,
	418,
	420,
	421,
	422,
	423,
	424,
	425,
	426,
	428,
	429,
	431,
	444,
	450,
	451,
	497,
	498,
	499,
	500,
	501,
	502,
	503,
	504,
	506,
	507,
	508,
	509,
	510,
	511,
	521,
	522,
	523,
	525,
	530,
	599,
]

const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

const image = document.createElement("img");
image.src = `https://http.cat/${randomStatus}`;

document.body.appendChild(image);
