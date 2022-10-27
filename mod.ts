import { client, app } from '#core/mod.ts';
import { Interaction } from 'https://deno.land/x/harmony@v2.6.0/mod.ts';

import executeCommand from '#lib/executeCommand.ts';




client.on("ready", () => {
	console.clear();
	client.interactions.commands.bulkEdit(app.commands.array());	
})


client.on("interactionCreate", (interaction: Interaction) => {
	if (interaction!.isApplicationCommand()){
		executeCommand(interaction);
		return;
	}
	
	

})


