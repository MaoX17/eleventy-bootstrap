export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig
	 	.addPassthroughCopy({
 			"./public/": "/"
	 	})
};

