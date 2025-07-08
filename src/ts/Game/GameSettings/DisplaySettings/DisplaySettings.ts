import { DisplaySettingType } from "./DisplaySettingType";

namespace GameSettings {
    export class DisplaySettings {
        /**
         * ディスプレイ設定の初期値
         * "16x9" または "fullscreen" のいずれかを指定
         */
        private _displaySetting: DisplaySettingType = "fullscreen";

        /**
         * DisplaySettingsのインスタンス
         */
        private static _instance: DisplaySettings | null = null;

        /**
         * DisplaySettingsのインスタンスを取得
         */
        public static get instance(): DisplaySettings {
            if (!this._instance) {
                this._instance = new DisplaySettings();
            }
            return this._instance;
        }

        /**
         * 現在のディスプレイ設定を取得
         * @returns 現在のディスプレイ設定
         */
        public get displaySetting(): DisplaySettingType {
            return this._displaySetting;
        }

        /**
         * ディスプレイ設定を変更
         * @param setting 新しいディスプレイ設定
         */
        public changeDisplaySetting(setting: DisplaySettingType): void {
            this._displaySetting = setting;
            document.getElementById("display")?.classList.remove("display-fullscreen", "display-16x9");
            document.getElementById("display")?.classList.add(`display-${setting}`);
        }
    }

}

export default GameSettings.DisplaySettings;