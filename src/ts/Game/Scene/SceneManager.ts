import Scene from "./Scene";

export default class SceneManager {
    /**
     * SceneManagerのインスタンス
     */
    private static _instance: SceneManager | null = null;

    /**
     * SceneManagerのインスタンスを取得します。
     */
    public static get instance(): SceneManager {
        if (!this._instance) {
            this._instance = new SceneManager();
        }
        return this._instance;
    }

    /**
     * シーンの更新処理を登録する関数のリスト
     * @type {Array<() => void>}
     * @description このリストに登録された関数は、シーンの更新時に呼び出されます。
     */
    private _updateFunctions: Array<() => void> = [];

    /**
     * シーンの初期化を行います。
     * @param scene 初期化するシーン
     */
    private _currentScene: Scene | null = null;

    /**
     * 現在のシーンを取得します。
     * @returns 現在のシーン
     */
    public currentScene(): Scene | null {
        return this._currentScene;
    }

    /**
     * シーンを変更します。
     * @param ctor シーンのコンストラクタ
     * @param scene 変更するシーン
     */
    public changeScene<T extends Scene>(ctor: new () => T, scene: T | null = null): void {
        if (this._currentScene) this._currentScene = null;
        this._currentScene = (!scene) ? new ctor() : scene;
        this._updateFunctions = [];
        this._currentScene.initialize();
    }

    /**
     * シーンの更新処理を登録
     * @param func 更新処理の関数
     */
    public addUpdateFunction(func: () => void): void {
        if (typeof func === "function") {
            this._updateFunctions.push(func);
            return;
        }

        console.error("SceneManager: addUpdateFunction expects a function.");
    }

    /**
     * シーンの更新処理
     */
    public update(): void {
        this._updateFunctions.forEach((func) => func());
    }
}