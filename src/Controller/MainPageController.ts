import Kernel from "../Bootsrap/Kernel.ts";

export default function init () {

    Kernel.addGetRoute("/", (ctx, next) => {
        ctx.render("index.ejs", {title: "Hello World"})
    })

    Kernel.addGetRoute("/test", (ctx, next) => {
        ctx.render("index.ejs", {title: "test"})
    })

}
