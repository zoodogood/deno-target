import { BaseCommand } from '#lib/BaseCommand/mod.ts';
import {
	Interaction,
	MessageComponentType,
	TextInputStyle,
	type MessageComponentData,
	type InteractionResponseModal
} from 'https://deno.land/x/harmony@v2.6.0/mod.ts';

class Command extends BaseCommand {
	name = "hello";
	description = "hi";


	run(interaction: Interaction){
		
		this.showModal(interaction);
	}

	async showModal(interaction: Interaction) {
		const modal = new Modal();
		
		return await interaction.showModal(modal);
	}
}


class Modal implements InteractionResponseModal {
	title = "Hello";
	customID = "CustomID"

	components: Array<MessageComponentData> = [{
		type: MessageComponentType.ACTION_ROW ,
		components: [{
			type: MessageComponentType.TEXT_INPUT,
			label: this.currentTime(),
			style: TextInputStyle.SHORT,
			customID: "Button",
			value: "123"
		}]
	}];

	currentTime(){
		return Date.now().toString();
	}
}

export { Command };