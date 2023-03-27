import { H1 } from "./src/components/Heading"

export function useMDXComponents(components: any) {
    return { h1: H1, ...components }
}
