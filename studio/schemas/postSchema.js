export const postSchema = {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "postText",
      title: "PostText",
      type: "string",
    },
    {
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "users" }],
    },
    {
      name: "image",
      title: "Image",
      type: "string",
    },
  ],
};
