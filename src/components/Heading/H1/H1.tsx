import { ReactNode } from "react"

interface H1Props {
    children: ReactNode
}

export function H1({ children }: H1Props) {
    return <h1 className="text-3xl font-bold underline">{children}</h1>
}
