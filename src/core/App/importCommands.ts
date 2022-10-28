import path from 'https://deno.land/std@0.153.0/node/path.ts';
import { Collection } from 'https://deno.land/x/harmony@v2.6.0/mod.ts';
import { BaseCommand } from '#lib/BaseCommand/mod.ts';

const FOLDER = Deno.env.get("COMMANDS_FOLDER") ?? "src/commands";

const directory: string = path.resolve(
	Deno.cwd(), FOLDER
);


import { ImportDirectory } from "https://esm.sh/@zoodogood/import-directory@1.3.3";

async function importCommands(){
	const commands: Array<[string, BaseCommand]> = (await new ImportDirectory()
		.import(directory))
		.map(({Command}) => new Command())
		.map((command: BaseCommand) => [command.name, command]);
	

	const collection = new Collection(commands);
	return collection;
}


export default importCommands;
