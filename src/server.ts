import "reflect-metadata";
import "./db/dataSource"

import express from "express";

const app = express();

app.listen(3000, () => console.log("server is running"))