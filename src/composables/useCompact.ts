const compact = useStorage('compact', false)

const toggleCompact = () => {
    compact.value = !compact.value
}

export default () => {
    const readonlyCompact = readonly(compact)
    return { compact: readonlyCompact, toggleCompact }
}