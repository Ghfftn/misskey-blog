import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // 这里必须是 server，表示开启服务端渲染
  adapter: cloudflare()
});