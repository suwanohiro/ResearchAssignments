import { KeyNameType } from "./KeyName/KeyNameType";

export default class InputManager {
    private static _keyDown: Partial<Record<KeyNameType, boolean>> = {};
    private static _keyUp: Partial<Record<KeyNameType, boolean>> = {};
    private static _keyHold: Partial<Record<KeyNameType, boolean>> = {};

    public static initialize(): void {
        // キーイベントのリスナーを設定
        document.addEventListener("keydown", (event) => {
            const key = event.key as KeyNameType;
            if (key) {
                this._keyDown[key] = true;
                this._keyHold[key] = true;
                this._keyUp[key] = false;
            }
        });

        document.addEventListener("keyup", (event) => {
            const key = event.key as KeyNameType;
            if (key) {
                this._keyUp[key] = true;
                this._keyHold[key] = false;
                this._keyDown[key] = false;
            }
        });

        document.addEventListener("keypress", (event) => {
            const key = event.key as KeyNameType;
            if (key) {
                this._keyDown[key] = false;
                this._keyHold[key] = true;
                this._keyUp[key] = false;
            }
        });
    }

    /**
     * 押下されたキーの名前
     * @returns 押下されたキーの名前
     */
    public static getKeyDown(key: KeyNameType): boolean {
        return this._keyDown[key] || false;
    }

    /**
     * 離されたキーの名前
     * @returns 離されたキーの名前
     */
    public static getKeyUp(key: KeyNameType): boolean {
        return this._keyUp[key] || false;
    }

    /**
     * 押され続けているキーの名前
     * @returns 押され続けているキーの名前
     */
    public static getKeyHold(key: KeyNameType): boolean {
        return this._keyHold[key] || false;
    }
}