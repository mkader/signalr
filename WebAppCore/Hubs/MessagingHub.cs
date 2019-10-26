using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppCore.Hubs
{
    // 1. Add ASP.NET Core SignalR
    // 2. Creating a SignalR Hub
    public class MessagingHub : Hub
    {
        //empty hub class
      
        public Task NotifyConnection()
        {
            return Clients.All.SendAsync("TestBrodcasting",
            $"Testing a Basic HUB at {DateTime.Now.ToLocalTime()}");
        }

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
