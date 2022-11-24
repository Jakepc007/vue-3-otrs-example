export default () => {
    const input = ref('')

    watch(input, () => {
        console.log("input changed to: ", input.value)
    })

    return { input }
}

