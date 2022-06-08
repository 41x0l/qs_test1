import { BigInt } from "@graphprotocol/graph-ts"
import {
  Sync,
} from "../generated/Contract/Contract"
import { SyncEntity } from "../generated/schema"

export function handleSync(event: Sync): void {
    let entity = new SyncEntity(event.transaction.from.toHex())
    entity.blockNumber = event.block.number;
    entity.index = event.transaction.index;
    entity.reserve0 = event.params.reserve0;
    entity.reserve1 = event.params.reserve1;
    entity.save();
}
