declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    isDraggable: {
        type: BooleanConstructor;
        default: null;
    };
    isResizable: {
        type: BooleanConstructor;
        default: null;
    };
    isBounded: {
        type: BooleanConstructor;
        default: null;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    minW: {
        type: NumberConstructor;
        default: number;
    };
    maxH: {
        type: NumberConstructor;
        default: number;
    };
    maxW: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        required: true;
    };
    y: {
        type: NumberConstructor;
        required: true;
    };
    w: {
        type: NumberConstructor;
        required: true;
    };
    h: {
        type: NumberConstructor;
        required: true;
    };
    i: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    dragIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    dragAllowFrom: {
        type: StringConstructor;
        default: null;
    };
    resizeIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    preserveAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragOption: {
        type: ObjectConstructor;
        default: () => {};
    };
    resizeOption: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    state: {
        cols: number;
        containerWidth: number;
        rowHeight: number;
        margin: number[];
        maxRows: number;
        draggable: boolean | null;
        resizable: boolean | null;
        bounded: boolean | null;
        transformScale: number;
        useCssTransforms: boolean;
        useStyleCursor: boolean;
        isDragging: boolean;
        dragging: {
            top: number;
            left: number;
        };
        isResizing: boolean;
        resizing: {
            width: number;
            height: number;
        };
        style: Record<string, string>;
        rtl: boolean;
    };
    wrapper: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    resize: (...args: any[]) => void;
    "container-resized": (...args: any[]) => void;
    resized: (...args: any[]) => void;
    move: (...args: any[]) => void;
    moved: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    isDraggable: {
        type: BooleanConstructor;
        default: null;
    };
    isResizable: {
        type: BooleanConstructor;
        default: null;
    };
    isBounded: {
        type: BooleanConstructor;
        default: null;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    minW: {
        type: NumberConstructor;
        default: number;
    };
    maxH: {
        type: NumberConstructor;
        default: number;
    };
    maxW: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        required: true;
    };
    y: {
        type: NumberConstructor;
        required: true;
    };
    w: {
        type: NumberConstructor;
        required: true;
    };
    h: {
        type: NumberConstructor;
        required: true;
    };
    i: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    dragIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    dragAllowFrom: {
        type: StringConstructor;
        default: null;
    };
    resizeIgnoreFrom: {
        type: StringConstructor;
        default: string;
    };
    preserveAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragOption: {
        type: ObjectConstructor;
        default: () => {};
    };
    resizeOption: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onResize?: ((...args: any[]) => any) | undefined;
    "onContainer-resized"?: ((...args: any[]) => any) | undefined;
    onResized?: ((...args: any[]) => any) | undefined;
    onMove?: ((...args: any[]) => any) | undefined;
    onMoved?: ((...args: any[]) => any) | undefined;
}>, {
    isDraggable: boolean;
    isResizable: boolean;
    isBounded: boolean;
    static: boolean;
    minH: number;
    minW: number;
    maxH: number;
    maxW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: string;
    resizeIgnoreFrom: string;
    preserveAspectRatio: boolean;
    dragOption: Record<string, any>;
    resizeOption: Record<string, any>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
