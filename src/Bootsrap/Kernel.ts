import { Application, viewEngine, ejsEngine, oakAdapter, load, Router, serve, Pool } from "./deps.ts";
import initController from "../Controller/importer.ts";

class Kernel {
    Route : Router
    Env : Array<any>
    RouteList : Array<any>
    _app : any
    connexion : any

    addGetRoute(url : string, func: (ctx, next) => void) {   
        this.RouteList.push(this.Route.get(url, func));
    }
    addPostRoute(url : string, func: (ctx, next) => void) {
        this.RouteList.push(this.Route.post(url, func));
    }

    async dataBaseConnection() {
        const databaseUrl = this.Env['DATABASE_URL'];
        const pool = new Pool(databaseUrl, 1, true);
        const connection = await pool.connect();
        return connection;
    }

    async init () {
        this.Env = await load();
        this._app = new Application();
        const port = this.Env["PORT"];

        this._app.use(viewEngine(oakAdapter, ejsEngine, {viewRoot: "./templates"}));
        this.Route = new Router();
        
        this.RouteList = [];
        initController();

        this._app.use(this.Route.routes());
        this._app.use(this.Route.allowedMethods());



        await this._app.listen({ port });
    }

    constructor () {
        this.init();
    }
}

export default new Kernel();