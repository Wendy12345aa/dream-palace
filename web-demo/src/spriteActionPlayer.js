export class SpriteActionPlayer {
  constructor({ image, manifestUrl, baseUrl = "", onFrame = () => {} }) {
    this.image = image;
    this.manifestUrl = manifestUrl;
    this.baseUrl = baseUrl;
    this.onFrame = onFrame;
    this.manifest = null;
    this.actionName = "";
    this.frameIndex = 0;
    this.loopOverride = null;
    this.fpsOverride = null;
    this.playing = false;
    this.lastTime = 0;
    this.accumulator = 0;
    this.raf = 0;
  }

  async load() {
    const response = await fetch(this.manifestUrl);
    if (!response.ok) {
      throw new Error(`Unable to load sprite manifest: ${response.status}`);
    }
    this.manifest = await response.json();
    const fallback = this.manifest.fallbackAnimation || Object.keys(this.manifest.animations)[0];
    this.setAnimation(fallback);
    await this.preloadCurrent();
    return this.manifest;
  }

  get animation() {
    return this.manifest?.animations?.[this.actionName] || null;
  }

  get actions() {
    return this.manifest ? Object.keys(this.manifest.animations) : [];
  }

  get fps() {
    return this.fpsOverride || this.animation?.fps || 6;
  }

  get shouldLoop() {
    if (this.loopOverride !== null) return this.loopOverride;
    return Boolean(this.animation?.loop);
  }

  setAnimation(name) {
    if (!this.manifest?.animations?.[name]) {
      name = this.manifest?.fallbackAnimation;
    }
    this.actionName = name;
    this.frameIndex = 0;
    this.accumulator = 0;
    this.render();
  }

  setLoop(value) {
    this.loopOverride = value;
  }

  setFps(value) {
    const next = Number(value);
    this.fpsOverride = Number.isFinite(next) && next > 0 ? next : null;
  }

  play() {
    if (this.playing) return;
    this.playing = true;
    this.lastTime = performance.now();
    this.raf = requestAnimationFrame((time) => this.tick(time));
  }

  pause() {
    this.playing = false;
    cancelAnimationFrame(this.raf);
  }

  replay() {
    this.frameIndex = 0;
    this.accumulator = 0;
    this.render();
    this.play();
  }

  tick(time) {
    if (!this.playing) return;
    const elapsed = time - this.lastTime;
    this.lastTime = time;
    this.accumulator += elapsed;

    const frameMs = 1000 / this.fps;
    while (this.accumulator >= frameMs) {
      this.accumulator -= frameMs;
      this.advance();
    }
    this.raf = requestAnimationFrame((nextTime) => this.tick(nextTime));
  }

  advance() {
    const frames = this.animation?.frames || [];
    if (!frames.length) return;
    const next = this.frameIndex + 1;
    if (next >= frames.length) {
      if (this.shouldLoop) {
        this.frameIndex = 0;
      } else {
        this.frameIndex = frames.length - 1;
        this.pause();
      }
    } else {
      this.frameIndex = next;
    }
    this.render();
  }

  render() {
    const frame = this.animation?.frames?.[this.frameIndex];
    if (!frame) return;
    const path = frame.path;
    this.image.src = `${this.baseUrl}${path}`;
    this.image.alt = `${this.manifest.characterName || this.manifest.characterId} ${this.actionName}`;
    this.onFrame({
      action: this.actionName,
      frameIndex: this.frameIndex,
      frameCount: this.animation.frames.length,
      path,
      fps: this.fps,
      loop: this.shouldLoop,
    });
  }

  async preloadCurrent() {
    const frames = this.animation?.frames || [];
    await Promise.all(
      frames.map(
        (frame) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = `${this.baseUrl}${frame.path}`;
          }),
      ),
    );
  }
}
