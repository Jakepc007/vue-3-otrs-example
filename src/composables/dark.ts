
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()

type Locale = 'en' | 'fr' | 'de'
type LocaleMessages = Record<string, string>
interface Options {
    locale: Locale
    locales: [Locale, LocaleMessages][]
}

// const options: Options = {
//     locale: 'en',
//     locales: [
//         ['en', { hello: 'Hello', world: 'World' }],
//         ['fr', { hello: 'Bonjour', world: 'Monde' }],
//         ['de', { hello: 'Hallo', world: 'Welt' }],
//     ]
// }

// export default {
//     install: (app, options) => {
//         app.config.globalProperties.$translate = (key: string) => {
//             const locale = options.locale
//             const messages = options.locales.find((l: string) => l === locale)?.[1]
//             return messages?.[key] || key
//         };
//         app.config.globalProperties.$setLocale = (locale: Locale) => {
//             options.locale = locale
//         }
//     }
// }