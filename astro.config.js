import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // 1. 改成你现在的 Cloudflare 预览地址
  site: 'https://astro-genai-startup-theme.pages.dev', 
  // 2. 这里的 base 必须改成 '/'，因为 Cloudflare Pages 默认就在根目录
  base: '/',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx()
  ]
});
