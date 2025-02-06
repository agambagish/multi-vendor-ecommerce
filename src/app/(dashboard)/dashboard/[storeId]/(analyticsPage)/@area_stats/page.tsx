import { delay } from "@/lib/utils";

import { AreaGraph } from "../../_components/area-graph";

export default async function Page() {
  await await delay(2000);
  return <AreaGraph />;
}
