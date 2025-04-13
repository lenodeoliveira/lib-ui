export type SxValue = string | number | undefined

export type SxProps = {
    [key: string]: SxValue | SxProps;
}