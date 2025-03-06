//EMS

export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig
	 	.addPassthroughCopy({
 			"./public/": "/"
	 	})
};



import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
};

