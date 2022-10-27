


/** Client */
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import { createClient, Client } from "#core/Client/mod.ts";

const token: string = Deno.env.get("TOKEN")!;
const client: Client = createClient(token);



/** App */
import { App } from "#core/App/mod.ts";

const app = new App();
await app.importCommands();




export { client, app };