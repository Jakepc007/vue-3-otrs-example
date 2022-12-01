import { Ref } from "vue"

interface Options {
    autofocus: boolean
    shouldLog?: boolean
}

export default (element: Ref<HTMLElement | null>, { autofocus = false, shouldLog: log = false }: Options) => {
    const input = ref('')

    onMounted(() => {
        if (!autofocus) return
        if (!element.value) return
        useVModel
        element.value.focus()
    })

    watch(input, () => {
        if (!log) return

        console.log("input changed to: ", input.value)
    })

    return { input }
}


