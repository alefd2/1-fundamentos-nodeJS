import http from "http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url === "/users") {
    return res.end("listagem de usuários");
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "alef",
      email: "alef@oliv.com",
    });
    return res.writeHead(201).end(JSON.stringify(users));
  }

  return res.writeHead(404).end("user not found");
});

server.listen(3333);
