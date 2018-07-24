/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const DependencyReference = require("./dependencies/DependencyReference");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */

/** @typedef {Object} SourcePosition
 *  @property {number} line
 *  @property {number=} column
 */

/** @typedef {Object} RealDependencyLocation
 *  @property {SourcePosition} start
 *  @property {SourcePosition=} end
 *  @property {number=} index
 */

/** @typedef {Object} SynteticDependencyLocation
 *  @property {string} name
 *  @property {number=} index
 */

/** @typedef {SynteticDependencyLocation|RealDependencyLocation} DependencyLocation */

class Dependency {
	constructor() {
		/** @type {Module|null} */
		this.module = null;
		// TODO remove in webpack 5
		/** @type {boolean} */
		this.weak = false;
		/** @type {boolean} */
		this.optional = false;
		/** @type {DependencyLocation} */
		this.loc = undefined;
	}

	getResourceIdentifier() {
		return null;
	}

	// Returns the referenced module and export
	getReference() {
		if (!this.module) return null;
		return new DependencyReference(this.module, true, this.weak);
	}

	// Returns the exported names
	getExports() {
		return null;
	}

	getWarnings() {
		return null;
	}

	getErrors() {
		return null;
	}

	updateHash(hash) {
		hash.update((this.module && this.module.id) + "");
	}

	disconnect() {
		this.module = null;
	}
}

module.exports = Dependency;
