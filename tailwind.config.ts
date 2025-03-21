import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      backgroundImage: {
        homeImage: "url('/public/prado.jpeg')",
      },
    },
  },
} satisfies Config;
