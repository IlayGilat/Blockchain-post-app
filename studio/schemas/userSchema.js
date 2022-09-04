export const userSchema = {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "walletAddress",
      title: "WalletAddress",
      type: "string",
    },
    {
      name: "profileImage",
      title: "ProfileImage",
      type: "number",
    },
    {
      name: "posts",
      title: "Posts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "posts" }],
        },
      ],
    },
    {
      name: "nfts",
      title: "Nfts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", type: "string" },
            { name: "image", type: "string" },
          ],
        },
      ],
    },
  ],
};
