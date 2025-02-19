import { PropType } from 'vue';
import { Breakpoint, Breakpoints, Layout, ResponsiveLayout } from '../helpers/types';
declare function getItem(id: number | string): any;
declare function dragEvent(eventName: string, id: number | string, x: number, y: number, h: number, w: number): void;
declare function resizeEvent(eventName: string, id: number | string, x: number, y: number, h: number, w: number): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    autoSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    colNum: {
        type: NumberConstructor;
        default: number;
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxRows: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: PropType<number[]>;
        default: () => number[];
    };
    isDraggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isResizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isMirrored: {
        type: BooleanConstructor;
        default: boolean;
    };
    isBounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCssTransforms: {
        type: BooleanConstructor;
        default: boolean;
    };
    verticalCompact: {
        type: BooleanConstructor;
        default: boolean;
    };
    restoreOnDrag: {
        type: BooleanConstructor;
        default: boolean;
    };
    layout: {
        type: PropType<Layout>;
        required: true;
    };
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsiveLayouts: {
        type: PropType<Partial<ResponsiveLayout>>;
        default: () => {};
    };
    transformScale: {
        type: NumberConstructor;
        default: number;
    };
    breakpoints: {
        type: PropType<Breakpoints>;
        default: () => {
            xxl: number;
            xl: number;
            lg: number;
            md: number;
            sm: number;
            xs: number;
        };
    };
    cols: {
        type: PropType<Breakpoints>;
        default: () => {
            xxl: number;
            xl: number;
            lg: number;
            md: number;
            sm: number;
            xs: number;
        };
    };
    preventCollision: {
        type: BooleanConstructor;
        default: boolean;
    };
    useStyleCursor: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    state: {
        width: number;
        mergedStyle: {};
        lastLayoutLength: number;
        isDragging: boolean;
        placeholder: {
            x: number;
            y: number;
            w: number;
            h: number;
            i: string | number;
        };
        layouts: {
            xs: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: string | number;
            }[];
            sm: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: string | number;
            }[];
            md: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: string | number;
            }[];
            lg: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: string | number;
            }[];
            xl: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: string | number;
            }[];
            xxl: {
                minW?: number | undefined;
                minH?: number | undefined;
                maxW?: number | undefined;
                maxH?: number | undefined;
                moved?: boolean | undefined;
                static?: boolean | undefined;
                isDraggable?: boolean | undefined;
                isResizable?: boolean | undefined;
                w: number;
                h: number;
                x: number;
                y: number;
                i: string | number;
            }[];
        };
        lastBreakpoint: Breakpoint | null;
        originalLayout: {
            minW?: number | undefined;
            minH?: number | undefined;
            maxW?: number | undefined;
            maxH?: number | undefined;
            moved?: boolean | undefined;
            static?: boolean | undefined;
            isDraggable?: boolean | undefined;
            isResizable?: boolean | undefined;
            w: number;
            h: number;
            x: number;
            y: number;
            i: string | number;
        }[];
    };
    getItem: typeof getItem;
    resizeEvent: typeof resizeEvent;
    dragEvent: typeof dragEvent;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "layout-before-mount": (...args: any[]) => void;
    "layout-mounted": (...args: any[]) => void;
    "layout-updated": (...args: any[]) => void;
    "breakpoint-changed": (...args: any[]) => void;
    "update:layout": (...args: any[]) => void;
    "layout-ready": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    autoSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    colNum: {
        type: NumberConstructor;
        default: number;
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxRows: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: PropType<number[]>;
        default: () => number[];
    };
    isDraggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isResizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isMirrored: {
        type: BooleanConstructor;
        default: boolean;
    };
    isBounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCssTransforms: {
        type: BooleanConstructor;
        default: boolean;
    };
    verticalCompact: {
        type: BooleanConstructor;
        default: boolean;
    };
    restoreOnDrag: {
        type: BooleanConstructor;
        default: boolean;
    };
    layout: {
        type: PropType<Layout>;
        required: true;
    };
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsiveLayouts: {
        type: PropType<Partial<ResponsiveLayout>>;
        default: () => {};
    };
    transformScale: {
        type: NumberConstructor;
        default: number;
    };
    breakpoints: {
        type: PropType<Breakpoints>;
        default: () => {
            xxl: number;
            xl: number;
            lg: number;
            md: number;
            sm: number;
            xs: number;
        };
    };
    cols: {
        type: PropType<Breakpoints>;
        default: () => {
            xxl: number;
            xl: number;
            lg: number;
            md: number;
            sm: number;
            xs: number;
        };
    };
    preventCollision: {
        type: BooleanConstructor;
        default: boolean;
    };
    useStyleCursor: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onLayout-before-mount"?: ((...args: any[]) => any) | undefined;
    "onLayout-mounted"?: ((...args: any[]) => any) | undefined;
    "onLayout-updated"?: ((...args: any[]) => any) | undefined;
    "onBreakpoint-changed"?: ((...args: any[]) => any) | undefined;
    "onUpdate:layout"?: ((...args: any[]) => any) | undefined;
    "onLayout-ready"?: ((...args: any[]) => any) | undefined;
}>, {
    isDraggable: boolean;
    isResizable: boolean;
    isBounded: boolean;
    cols: Breakpoints;
    rowHeight: number;
    margin: number[];
    maxRows: number;
    transformScale: number;
    useCssTransforms: boolean;
    useStyleCursor: boolean;
    responsive: boolean;
    autoSize: boolean;
    colNum: number;
    isMirrored: boolean;
    verticalCompact: boolean;
    restoreOnDrag: boolean;
    responsiveLayouts: Partial<ResponsiveLayout>;
    breakpoints: Breakpoints;
    preventCollision: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    item?(_: {
        item: {
            minW?: number | undefined;
            minH?: number | undefined;
            maxW?: number | undefined;
            maxH?: number | undefined;
            moved?: boolean | undefined;
            static?: boolean | undefined;
            isDraggable?: boolean | undefined;
            isResizable?: boolean | undefined;
            w: number;
            h: number;
            x: number;
            y: number;
            i: string | number;
        };
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
