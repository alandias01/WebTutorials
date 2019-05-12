using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace WebSocket
{
    class Program
    {
        static void Main(string[] args)
        {
            new SocketServer();            
        }
    }

    public class SocketServer
    {
        List<TcpClient> clients = new List<TcpClient>();

        public SocketServer()
        {
            var listener = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

            listener.Start();
            Console.WriteLine("Server has started on 127.0.0.1:80.{0}Waiting for a connection...", Environment.NewLine);

            this.ListenForConnections(listener);

            //TcpClient client = server.AcceptTcpClient();
            //Console.WriteLine("A client connected.");
            //Console.ReadLine();
        }

        private void ListenForConnections(TcpListener listener)
        {
            TcpClient client;

            while (true)
            {
                Console.WriteLine("waiting...");

                client = listener.AcceptTcpClient();

                Console.WriteLine("Connection request accepted");



                this.clients.Add(client);
                Task.Run(() => this.ServiceClient(client));                
            }
        }

        public void ServiceClient(TcpClient client)
        {
            var sr = new StreamReader(client.GetStream());
            var sw = new StreamWriter(client.GetStream());
            try
            {
                var request = sr.ReadLine();
                Console.WriteLine(request);
                string[] tokens = request.Split(' ');
                string page = tokens[1];
                sw.WriteLine("Message from server");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}
