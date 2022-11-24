const compact = useStorage('compact', false)

const toggleCompact = () => {
    compact.value = !compact.value
}

export default () => {
    return { compact, toggleCompact }
}




