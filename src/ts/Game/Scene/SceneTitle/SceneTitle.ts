import Scene from "../Scene";
import SceneManager from "../SceneManager";

export default class SceneTitle extends Scene {
    constructor() {
        super("scene-title");
    }

    public override initialize(): void {
        console.log("SceneTitle initialized.");
    }
}
