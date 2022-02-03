import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use("/", (req: Request, res: Response, next: NextFunction) =>
	res.send("Hello World")
);

app.listen(3030, ()=>{
	console.log(`port is 3030`);
})
