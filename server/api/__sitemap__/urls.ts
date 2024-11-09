import { defineSitemapEventHandler } from "#imports";
import type { SitemapUrlInput } from "#sitemap/types";
import { $fetch } from "ofetch";
import type { User } from "~/types/UserData";

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(async () => {
  const data = await $fetch("https://api.escuelajs.co/api/v1/users");
  console.log(">>>", data);
  // const data = await GqlGetUsers()
  return data.map((user: any) => {
    return {
      loc: `/dashboard/${user.id}`,
      _sitemap: "pages",
    };
  }) satisfies SitemapUrlInput[];
});
