const preferredLocale = useStorage('locale', 'en')

export default () => {
    const { locale: currentLocale, availableLocales } = useI18n();
    watch(preferredLocale, () => {
        currentLocale.value = preferredLocale.value;
    })
    
    const shuffleLocale = () => {
        const total = availableLocales.length;
        const index = availableLocales.indexOf(currentLocale.value);
        const nextIndex = (index + 1) % total;
        preferredLocale.value = availableLocales[nextIndex];
    }

    return { locale: preferredLocale, shuffleLocale }
}