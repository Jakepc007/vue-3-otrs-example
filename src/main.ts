import { setupLayouts } from 'virtual:generated-layouts'
import Previewer from 'virtual:vue-component-preview'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import generatedRoutes from '~pages'
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
  },
)
