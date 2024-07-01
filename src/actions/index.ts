import { defineAction, z } from "astro:actions";

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {
      // call a mailing service, or store to a database
      return { success: true };
    },
  }),
};
