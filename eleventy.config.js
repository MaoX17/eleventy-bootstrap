//EMS

import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig
	 	.addPassthroughCopy({
 			"./public/": "/"
	 	});
	
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
		// The base URL: defaults to Path Prefix
		//baseHref: eleventyConfig.pathPrefix,

		// But you could use a full URL here too:
		baseHref: "https://www.gremapro.it/"

		// Comma separated list of output file extensions to apply
		// our transform to. Use `false` to opt-out of the transform.
		//extensions: "html",
	});

};


