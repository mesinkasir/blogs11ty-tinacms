// Blogger11ty integrate TINA CMS project by https://creativitas.dev 
// Hire developer https://www.fiverr.com/creativitas
import { defineConfig } from "tinacms";
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "_site",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "_site",
    },
  },
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "content/article",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isDescription: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            isDate: true,
            required: true,
          },
		  {
			label: 'Tags',
			name: 'tags',
			type: 'string',
            isTags: true,
			list: true,
	 	 },
         {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
         },
        ],
      },
      {
        name: "static_page",
        label: "Static Page",
        path: "content/static_page",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isDescription: true,
            required: true,
          },
         {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
         },
        ],
      },  
    ],
  },  
  search: {
    tina: {
	// add your tina search token here..
      indexerToken: '<Your Search Token>',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
// developer https://creativitas.dev hire now https://www.fiverr.com/creativitas