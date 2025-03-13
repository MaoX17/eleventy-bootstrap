//EMS

import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";


export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig
	 	.addPassthroughCopy({
 			"./public/": "/"
	 	});
	
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addNunjucksFilter("urla", function(pippo) {
		return `https://www.gremapro.it${pippo}`;
	});


};


