
import { monitorEventsAtBlock } from "~/monitor/getEventsAtBlock";
import { NetworkConfig, ParsedEvent } from "~/monitor/interfaces";
import { addEventToRSS } from "~/rss/rss";

export const serializeEventArgs = <T extends Record<string, unknown>>(args: T): string => {
  return JSON.stringify(args, (_, value) =>
    typeof value === 'bigint' ? value.toString() : value
  , 2);
};

export const monitorNetwork = async (config: NetworkConfig, blockNumber?: number) => {
  const processEvents = async (blockToProcess: number) => {
    const events = await monitorEventsAtBlock(blockToProcess, config.provider, config.eventsMapping);
    
    if (events.length > 0) {
      events.forEach((event) => {
          return addEventToRSS(
            event.address,
            event.eventName, 
            event.topics,
            event.title,
            event.description,
            event.link,
            config.networkName,
            config.chainId,
            event.blocknumber,
            config.governanceName,
            event.proposalLink,
          );
      });
    }
  };

  if (blockNumber) {
    await processEvents(blockNumber);
    return;
  }
  
  let lastBlock = await config.provider.getBlockNumber();

  const checkForNewBlocks = async () => {
    const currentBlock = await config.provider.getBlockNumber();
    if (currentBlock > lastBlock) {
      lastBlock = currentBlock;
      await processEvents(currentBlock);
    }
  };

  setInterval(checkForNewBlocks, config.pollInterval);
};
