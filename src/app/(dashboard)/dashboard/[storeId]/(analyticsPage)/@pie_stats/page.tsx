import { delay } from "@/lib/utils";

import { PieGraph } from "../../_components/pie-graph";

export default async function Stats() {
  await await delay(2000);
  return <PieGraph />;
}
