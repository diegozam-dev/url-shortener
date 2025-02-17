import apicache from 'apicache';

const cache = apicache.options({
  defaultDuration: '10 minute',
  statusCodes: {
    include: [200]
  }
}).middleware;

export default cache;
