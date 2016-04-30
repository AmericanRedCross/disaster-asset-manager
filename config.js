module.exports = {
	nginxLocation: "/",
	siteName: "Disaster Asset Manager",
	description: "Use this site to manage and maintain map assets for relief responses.",
	db: "arc_assets",
	port: 8888,
	tileUrl: "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
	tileAttribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles from <a href="http://hot.openstreetmap.org/" target="_blank">H.O.T.</a>',
	defaultLat: -1.675,
	defaultLng:-78.703,
	defaultZoom: 5,
	asset_opts: {
		geolocation: true,
		types: [
			"Map",
			"Web Map",
			"Infographic",
			"Situation Report"
		],
		tags: {
			"Extent": {
				required: false,
				values: [
					"Arghakhanchi",	"Bagmati",	"Bara",	"Bhaktapur",	"Chitawan",	"Dhading",	"Dhanusa",	"Dhaualagiri",	"Dolakha",	"Gandaki",	"Ghorkha",	"Gulmi",	"Janakpur",	"Kapilbastu",	"Kaski",	"Kathmandu",	"Kavrepalanchok",	"Koshi",	"Lalitpur",	"Lamjung",	"Lumbini",	"Mahottari",	"Makwanpur",	"Manang",	"Mechi",	"Narayani",	"Nawalparasi",	"Nepal",	"Nuwakot",	"Okhaldhunga",	"Palpa",	"Parsa",	"Ramechhap",	"Rapti",	"Rasuwa",	"Rautahat",	"Rupandehi",	"Sagarmatha",	"Sarlahi",	"Sindhuli",	"Sindhupalchok",	"Syangja",	"Tanahu",	"World"
				]
			},
			"Sector": {
				required: true,
				values: [
					"3W",
					"Accessibility",
					"Admin-boundaries",
					"Affected",
					"Allocation",
					"AmericanRedCross",
					"Atlas-map",
					"Baseline",
					"Coordination",
					"Damage",
					"Distributions",
					"Earthquake",
					"Health",
					"Hillshade",
					"Hubs",
					"IDP-Camps",
					"IRA",
					"Logistics",
					"NRCS",
					"Population",
					"Priority",
					"RedCrossRedCrescent",
					"Roads",
					"Shelter",
					"VDC",
					"Web-map"
				]
			}
		}
	}
}
