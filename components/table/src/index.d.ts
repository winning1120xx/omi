import { WeElement } from 'omi';
interface Props {
    dataSource: any[];
    columns: object;
    checkbox: boolean;
    border: boolean;
}
export default class Table extends WeElement<Props> {
    static css: any;
    dataSource: any[];
    columns: any[];
    checkbox: boolean;
    border: boolean;
    removeItem: (item: any) => void;
    _changeHandlerTh: (e: any, item: any) => void;
    _changeHandlerTd: (e: any, item: any) => void;
    beforeRender(): void;
    _getCheckedState(): {
        indeterminate: boolean;
        unchecked?: undefined;
        checked?: undefined;
    } | {
        unchecked: boolean;
        indeterminate?: undefined;
        checked?: undefined;
    } | {
        checked: boolean;
        indeterminate?: undefined;
        unchecked?: undefined;
    };
    render(props: any): JSX.Element;
}
export {};
