/**
 * Sound manager - Audio completely silenced as per user request.
 */

class FairySoundManager {
  private isMuted: boolean = true;
  private isMusicPlaying: boolean = false;

  public setMuted(_muted: boolean) {
    this.isMuted = true;
    this.stopMusic();
  }

  public getIsMuted(): boolean {
    return true;
  }

  public getIsMusicPlaying(): boolean {
    return false;
  }

  public playChime(_freq?: number, _duration?: number, _volume?: number) {
    return;
  }

  public playMagicWand() {
    return;
  }

  public playCastleGateFanfare() {
    return;
  }

  public startMusic() {
    return;
  }

  public stopMusic() {
    this.isMusicPlaying = false;
  }

  public toggleMusic(): boolean {
    return false;
  }
}

export const soundManager = new FairySoundManager();
