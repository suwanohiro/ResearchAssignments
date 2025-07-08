import GameSettings from "./GameSettings/GameSettings";
import Scene from "./Scene/Scene";
import SceneManager from "./Scene/SceneManager";

export default class GameManager {
    /**
     * GameManagerのインスタンス
     */
    private static _instance: GameManager | null = null;

    /**
     * GameManagerのインスタンスを取得
     */
    public static get instance(): GameManager {
        if (!this._instance) {
            this._instance = new GameManager();
        }
        return this._instance;
    }

    /**
     * ゲームの起動状態
     */
    private _isRunning: boolean = false;

    /**
     * ゲームの起動状態を取得
     */
    public get isRunning(): boolean {
        return this._isRunning;
    }

    /**
     * 初期化処理
     */
    public initialize(): void {
        GameSettings.instance.initialize();
    }

    /**
     * ゲームを開始
     * @param T 最初のシーンの型
     * @param ctor 最初のシーンのコンストラクタ
     */
    public startGame<T extends Scene>(ctor: new () => T): void {
        if (this._isRunning) {
            console.log("Game is already running.");
            return;
        }

        this._isRunning = true;
        SceneManager.instance.changeScene(ctor);
        console.log("Game started.");
    }

    public stopGame(): void {
        if (!this._isRunning) {
            console.log("Game is not running.");
            return;
        }

        this._isRunning = false;
        console.log("Game stopped.");
    }
}
