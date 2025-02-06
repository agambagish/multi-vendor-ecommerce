import { delay } from "@/lib/utils";

import { BarGraph } from "../../_components/bar-graph";

export default async function Page() {
  await await delay(2000);

  return <BarGraph />;
}
