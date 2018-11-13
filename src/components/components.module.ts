import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project';
import { CounterComponent } from './counter/counter';
@NgModule({
	declarations: [ProjectComponent,
    CounterComponent],
	imports: [],
	exports: [ProjectComponent,
    CounterComponent]
})
export class ComponentsModule {}
