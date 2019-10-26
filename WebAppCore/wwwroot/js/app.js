"use strict";

//1
let connection = new signalR.HubConnectionBuilder()
    .withUrl("/messagingHub")
    .build();

//2
//function getConnected() {
document.getElementById("btnConnnect").addEventListener("click", function (event) {
    if (connection.connection.connectionState==2) {
        connection.start().then(function () {
            document.getElementById('connectAlertDiv').style.display = "block";
            //document.getElementById('btnConnnect').style.display = "none";
            TestConnection();
            
        }).catch(function (err) {
            return console.error(err.toString());
        });
    } else {
        TestConnection();
    }
    event.preventDefault();
});

//3
function TestConnection() {
    connection.invoke("NotifyConnection").catch(function (err) {
        return console.error(err.toString());
    });
}

//4
connection.on("TestBrodcasting", function (time) {
    document.getElementById('broadcastDiv').innerHTML = time;
    document.getElementById('broadcastDiv').style.display = "block";
});


//chat code
//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});


const hubConnection = new HubConnection(`http://localhost:6123/hubs/Values`, {
    transport: TransportType.WebSockets
});
hubConnection.on("Add", (value: string) => {
    this.values.push(value);
});
hubConnection.on("Delete", (value: string) => {
    this.values.remove(value);
})
hubConnection.start();