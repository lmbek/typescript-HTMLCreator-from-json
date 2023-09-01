export type HTMLTreeNode = {
    tag: string;
    attributes?: Record<string, string>;
    innerText?: string;
    children?: HTMLTreeNode[] | null;
};
