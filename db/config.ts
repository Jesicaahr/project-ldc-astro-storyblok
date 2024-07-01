import { defineDb, defineTable, column } from "astro:db";

const Newsletter = defineTable({
  columns: {
    id: column.number({ unique: true, primaryKey: true }),
    email: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Newsletter },
});
