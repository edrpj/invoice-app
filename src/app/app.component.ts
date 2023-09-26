import { Component, HostBinding, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public darkMode: WritableSignal<boolean> = signal<boolean>(false);

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
