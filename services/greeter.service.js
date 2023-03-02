"use strict";

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		hello: {
			rest: {
				method: "GET",
				path: "/hello"
			},
			async handler() {
				return "Hello Moleculer";
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: { method: "POST", path: "/welcome" },
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		},
		add: {
			rest: {
				method: "POST",
				path: "/add"
			},
			params: {
				a: "string",
				b: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `add of ${ctx.params.a} and ${ctx.params.b} is - ${Number(ctx.params.a) + Number(ctx.params.b)}`;
			}
		},

		sub: {
			rest: {
				method: "POST",
				path: "/sub"
			},
			params: {
				a: "string",
				b: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `sub of ${ctx.params.a} and ${ctx.params.b} is - ${Number(ctx.params.a) - Number(ctx.params.b)}`;
			}
		},

		mult: {
			rest: {
				method: "POST",
				path: "/mult"
			},

			params: {
				a: "string",
				b: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `mult of ${ctx.params.a} and ${ctx.params.b} is - ${Number(ctx.params.a) * Number(ctx.params.b)}`;
			}
		},

		div: {
			rest: {
				method: "POST",
				path: "/div"
			},
			params: {
				a: "string",
				b: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `div of ${ctx.params.a} and ${ctx.params.b} is - ${Number(ctx.params.a) / Number(ctx.params.b)}`;
			}
		},

	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
