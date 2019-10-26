# signalr
ASP.NET CORE SignalR	  
  Added ASP.NET CORE Web Application	  
    1. Add Hubs Folder	  
    2. Add ASP.NET Core SignalR from Nuget	  
    3. Creating a SignalR Hub class "MessagingHub.cs", added 2 functions	  
    4. Add -> Client-Side Library -> unpkg -> enter @aspnet/signalr@1. (Select latest version), choose dist/browser/signalr.js & signalr.min.js files -> Target location  wwwroot/lib/signalr/	  
    5. Starup.cs -> add "services.AddSignalR();",  " app.UseSignalR(routes => {routes.MapHub<MessagingHub>("/messagingHub"); });" code	  	
    6. Pages/index.cshtml, add html code and javascript.	  
    7. check connection is started or not "if (connection.connection.connectionState==2) {"		  
