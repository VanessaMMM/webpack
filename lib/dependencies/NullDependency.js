/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Dependency = require("../Dependency");
const DependencyTemplate = require("../DependencyTemplate");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */

class NullDependency extends Dependency {
	get type() {
		return "null";
	}

	updateHash() {}
}

NullDependency.Template = class NullDependencyTemplate extends DependencyTemplate {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {RuntimeTemplate} runtimeTemplate the runtime template
	 * @param {DependencyTemplates} dependencyTemplates the dependency templates
	 * @returns {void}
	 */
	apply(dependency, source, runtimeTemplate, dependencyTemplates) {}
};

module.exports = NullDependency;
