
const locale = useStorage('locale', 'en')

export default () => {
    const { locale: currentLocale, availableLocales } = useI18n();
    watch(locale, () => {
        currentLocale.value = locale.value;
    })
    
    const shuffleLocale = () => {
        const total = availableLocales.length;
        const index = availableLocales.indexOf(currentLocale.value);
        const nextIndex = (index + 1) % total;
        locale.value = availableLocales[nextIndex];
    }

    return { locale, shuffleLocale }
}