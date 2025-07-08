import DisplaySettings from "./DisplaySettings/DisplaySettings";

namespace GameSettings {

    export class GameSettings {
        /**
         * GameSettingsのインスタンス
         */
        private static _instance: GameSettings | null = null;

        /**
         * GameSettingsのインスタンスを取得
         */
        public static get instance(): GameSettings {
            if (!this._instance) {
                this._instance = new GameSettings();
            }
            return this._instance;
        }

        /**
         * ゲームのFPS
         */
        private readonly _fps: number = 60;

        /**
         * ゲームの1フレームあたりの待機時間（ミリ秒）
         */
        private readonly _waitTime: number = 1000 / this._fps;

        /**
         * ディスプレイ設定のインスタンス
         */
        private _displaySetting: DisplaySettings = DisplaySettings.instance;

        /**
         * ゲームのFPSを取得
         * @returns FPS値
         */
        public get FPS(): number {
            return this._fps;
        }

        /**
         * ゲームの1フレームあたりの待機時間を取得
         * @returns 待機時間（ミリ秒）
         */
        public get waitTime(): number {
            return this._waitTime;
        }

        /**
         * ディスプレイ設定を取得
         * @returns DisplaySettingsのインスタンス
         */
        public get displaySetting(): DisplaySettings {
            return this._displaySetting;
        }

        public initialize(): void {
            console.log(`FPS: ${this.FPS}`);
            console.log(`Wait Time: ${this.waitTime}`);

            const display: HTMLElement = document.getElementById("display")!;
            if (display) {
                display.classList.add(`display-${this.displaySetting.displaySetting}`);
                console.log(`Display Setting: ${this.displaySetting.displaySetting}`);
            } else {
                console.error("Display element not found.");
            }
        }
    }
}
export default GameSettings.GameSettings;