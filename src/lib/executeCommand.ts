import { ApplicationCommandInteraction } from 'https://deno.land/x/harmony@v2.6.0/mod.ts';
import { app } from "#core/mod.ts";
import { BaseCommand } from "#lib/BaseCommand/mod.ts";

function executeCommand(interaction: ApplicationCommandInteraction){
	const commandName = interaction.data.name;
	const command: BaseCommand = app.commands.get(commandName)!;

	if (!command){
		throw new Error(`Command ${ commandName } does not exits`);
	}

	command.run(interaction);
}

export default executeCommand;