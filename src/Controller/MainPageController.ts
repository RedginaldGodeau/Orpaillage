import Kernel from "../Bootsrap/Kernel";

const Route1 = Kernel.Route.get("/", ctx => ctx.render("index.ejs", {title: "Hello World"}));
const Route2 = Kernel.Route.get("/test", ctx => ctx.render("index.ejs", {title: "Hello World TEST"}));

export {Route1, Route2}