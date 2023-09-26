import { Component, HostBinding, Input, WritableSignal, signal } from "@angular/core";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  @Input()
  public darkMode: WritableSignal<boolean> = signal<boolean>(false);
}
