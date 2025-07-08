import InputManager from "./common/InputManager/InputManager";
import KeyName from "./common/InputManager/KeyName/KeyName";
import { KeyNameType } from "./common/InputManager/KeyName/KeyNameType";
import GameManager from "./Game/GameManager";
import GameSettings from "./Game/GameSettings/GameSettings";
import SceneManager from "./Game/Scene/SceneManager";
import SceneTitle from "./Game/Scene/SceneTitle/SceneTitle";

export default class Main {
    constructor() {
    }

    public initialize() {
        // 初期化
        GameManager.instance.initialize();
        InputManager.initialize();

        // ゲームを開始
        GameManager.instance.startGame(SceneTitle);
    }

    public update() {
        SceneManager.instance.update();

        if (!GameManager.instance.isRunning) return;

        setTimeout(() => {
            this.update();
        }, GameSettings.instance.waitTime);
    }
}