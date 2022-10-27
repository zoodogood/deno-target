import {
	Client,
	Intents
 } from 'https://deno.land/x/harmony@v2.6.0/mod.ts';
 
function createClient(token: string): Client {
	const client: Client = new Client();
	client.connect(token, [...Intents.NonPrivileged]);
	return client;
}



 export { createClient, Client };