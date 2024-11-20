import NodeCache from "node-cache";

// cache
export const cache = new NodeCache({ stdTTL: 600 }); // Cache with 10-minute TTL
