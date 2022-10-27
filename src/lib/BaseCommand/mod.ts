import { Interaction, ApplicationCommandType, ApplicationCommandOptionBase } from "https://deno.land/x/harmony@v2.6.0/mod.ts";
class BaseCommand {
	name = "";
	description = "";

	type = ApplicationCommandType.CHAT_INPUT;
	options?: Array<ApplicationCommandOptionBase>;

	run(_interaction: Interaction){}
}

export { BaseCommand };