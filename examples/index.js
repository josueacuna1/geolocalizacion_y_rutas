
var map = new L.Map("map", {center: [21.733425, -101.541748], zoom: 5});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function agregar() {
	let entrada = document.getElementById("pin_map").value;

	const myJSON = {
		Lugares: [
			{
				latitud: 19.294011, 
				longitud: -101.656269,
				latRi:19.702751, 
				lonRi:-101.192358,
				latRf:18.964154,
				lonRf:-101.731799,
				lugar: "Michoacan",
				descripcion: "Estas en estado de Michoacan, Bienvenido",
			},{
				latitud: 17.749708,
				longitud: -99.776567,
				latRi:18.150782, 
				lonRi:-100.496567,
				latRf:17.548477,
				lonRf:-99.505511,
				lugar: "Guerrero",
				descripcion: "Estas en estado de Guerrero, Bienvenido",
			},
			{
				latitud:19.001832, 
				longitud: -99.862738,
				latRi:19.070844,
				lonRi: -100.261745,
				latRf:18.833579,
				lonRf: -99.57733,
				lugar: "Estado de Mexico",
				descripcion: "Estas en Estado de Mexico, Bienvenido",
			},
			{
				latitud:19.16488,
				longitud:-103.864791,
				latRi:19.239733,
				lonRi: -103.724841,
				latRf:19.10436,
				lonRf:-104.347674,
				lugar: "Colima",
				descripcion: "Estas en Colima, Bienvenido",
			}
		]
	};

	let text = "";
	var encontrado = false;
	document.getElementById("leyenda").innerHTML = "";
	for (const x in myJSON.Lugares) {
		if (myJSON.Lugares[x].lugar == entrada) {
			let lad = myJSON.Lugares[x].latitud;
			let long = myJSON.Lugares[x].longitud;
			let desc = myJSON.Lugares[x].descripcion;

			var latRi = myJSON.Lugares[x].latRi;
			var loni = myJSON.Lugares[x].lonRi;

			var latf = myJSON.Lugares[x].latRf;
			var lonf = myJSON.Lugares[x].lonRf;

			cord = lad + "," + long;
			let cordenadas = cord.split(",");

			L.marker(cordenadas)
				.addTo(map)
				.bindPopup("<b>" + desc + " </b>")
				.openPopup();
			map.flyTo(cordenadas, 7);
			var encontrado = true;

			cord1i = latRi + "," + loni;
			cordenadasI = cord1i.split(",");
	
			cord2f = latf + "," + lonf;
			cordenadasF = cord2f.split(",");
			var control = L.Routing.control(L.extend(window.lrmConfig, {
				waypoints: [
					L.latLng(cordenadasI),
					L.latLng(cordenadasF)
				],
				geocoder: L.Control.Geocoder.nominatim(),
				routeWhileDragging: true,
				reverseWaypoints: true,
				showAlternatives: true,
				altLineOptions: {
					styles: [
						{color: 'black', opacity: 0.15, weight: 9},
						{color: 'white', opacity: 0.8, weight: 6},
						{color: 'blue', opacity: 0.5, weight: 2}
					]
				}
			})).addTo(map);
			
			L.Routing.errorControl(control).addTo(map);
		}
		text += myJSON.Lugares[x].lugar + ", ";
	}
	if (!encontrado) {
		document.getElementById("leyenda").innerHTML = "No se encontró el lugar que escribió"
	;}

};

