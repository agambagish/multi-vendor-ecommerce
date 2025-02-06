import { delay } from "@/lib/utils";

import { RecentSales } from "../../_components/recent-sales";

export default async function Sales() {
  await await delay(2000);
  return <RecentSales />;
}
