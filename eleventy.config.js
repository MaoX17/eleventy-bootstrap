//EMS

import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig
	 	.addPassthroughCopy({
 			"./public/": "/"
	 	});
	
	eleventyConfig.addPlugin(syntaxHighlight);

};


const site = {
  	title: 'GreM@Pro',
  	description: 'GreM@Pro - IT & Passion',
	url: 'https://www.gremapro.it'
}

module.exports = site;

