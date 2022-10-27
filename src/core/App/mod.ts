import importCommands from './importCommands.ts';
import { Collection } from 'https://deno.land/x/harmony@v2.6.0/mod.ts';
import { BaseCommand } from '#lib/BaseCommand/mod.ts';




class App {
	commands: Collection<string, BaseCommand> = new Collection();

	async importCommands(){
		this.commands = await importCommands();
	}
}

export { App };