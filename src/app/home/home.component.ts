import { Component, signal } from '@angular/core';
import { GreetingComponent } from "../components/greeting/greeting.component";
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Hello World from Home Component');

  keyUpHandler(event: KeyboardEvent): void {
    // Prevent the default action of the event
    event.preventDefault();
    // Log the event to the console
    console.log(event);
    // Update the homeMessage signal
    console.info('Key up event triggered');
    this.homeMessage.set(`Key up event triggered ${event.key}`);
  }
}
