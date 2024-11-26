type Align = 'start' | 'center' | 'end' | undefined;
export interface XYLabelModel {
    size?: number;
    align?: Align;
    text?: string;
    inLine?: boolean | undefined;
}
