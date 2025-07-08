export default abstract class Scene {
    private _sceneID: string;

    /**
     * シーンIDを取得
     * @returns シーンID
     */
    public get sceneID(): string {
        return this._sceneID;
    }

    /**
     * コンストラクタ
     * @param sceneID シーンID
     */
    constructor(sceneID: string) {
        this._sceneID = sceneID;
    }

    /**
     * シーンの初期化
     */
    abstract initialize(): void;

    /**
     * シーンの初期化
     */
    abstract initialize(): void;
}