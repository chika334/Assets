const net = require("net");

//create a simple server
const server = net.createServer(function(conn) {
    console.log("server: Client connected");

    //if connection is closed
    conn.on("end", function() {
        console.log("Server: Client disconnected");
        server.close();
        process.exit(0);
    });
    //Handle data from client
    conn.on("data", function(data) {
        data = JSON.parse(data);
        console.log("Response from client: %s", data.response);
    });
    conn.write(
        JSON.stringify(
            { response: "Hey there client!"}
        )
    );
});

//Listen for connections
server.listen(5000, "localhost", function() {
    console.log("Server: Listening");
})