import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

const apiUrl = process.env.API_URL;

app.use(express.static("public"));

const html = `
<!DOCTYPE html>
<html>

<head>
    <title>Api link</title>
</head>

<body>
    <script type="text/javascript">
        localStorage.setItem('apiUrl','${apiUrl}/api')
        window.location.href="/"
    </script>
</body>

</html>
`;

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/user", (req: Request, res: Response) => {
  res.send({ name: "Mg Mg", email: "mgmg@gmail.com", age: 23 });
});

app.listen(port, () => {
  console.log("Server started on :", port);
});
