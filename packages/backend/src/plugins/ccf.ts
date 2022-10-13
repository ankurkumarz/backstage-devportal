import { createRouter } from '@cloud-carbon-footprint/backstage-plugin-backend';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  config,
}: PluginEnvironment) {
  return await createRouter({
    config,
    logger,
  });
}