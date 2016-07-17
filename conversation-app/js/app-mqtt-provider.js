function connect_mqtt(){
		
		// Create a client instance: Broker, Port, Websocket Path, Client ID
		client = new Paho.MQTT.Client(MQTT_HOST, Number(MQTT_PORT), MQTT_PATH, MQTT_CLIENT_ID);
	    
		console.log("Client instantiated.")
	    console.log("Now trying to connect...")
		    
		// set callback handlers
		client.onConnectionLost = function (responseObject) {
		    console.log("Connection Lost: "+responseObject.errorMessage);
		}
		 
		client.onMessageArrived = function (message) {
		  console.log("Message Arrived: "+message.payloadString);
		  var scope = angular.element(document.getElementById("DisplayControllerId")).scope();
		  	scope.$apply(function () {
		  		scope.addDialog(JSON.parse(message.payloadString))
		  	});
		}
		
		// Connect the client, providing an onConnect callback
		client.connect({
		    onSuccess: onConnect,
		    userName : USER_NAME,
		    password : PASSWORD,
		});
		
		// Called when the connection is made
		function onConnect(){
		    console.log("Connected!");
			client.subscribe(CMD_TOPIC);
		}	
}