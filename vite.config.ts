import jsonServer from 'vite-plugin-simple-json-server';
import { defineConfig } from 'vite';


export default defineConfig({
    base: '',
    plugins: [
      jsonServer({
        urlPrefixes: ['/api/'],
      }),
    ],
  });