import { Interaction } from "https://deno.land/x/harmony@v2.6.0/mod.ts";

type callback = (interaction: Interaction) => unknown;

class InterationSpecialHandler {
	#handlers: {[namespace: string]: callback}
		= {};


	register(namespace: string, callback: callback): void {
		this.#handlers[namespace] = callback;
	}

	call(namespace: string, interaction: Interaction): unknown {
		const callback = this.#handlers[namespace];
		return callback.call(null, interaction);
	}
}

export default InterationSpecialHandler;