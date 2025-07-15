import { Routes } from '@angular/router';
import { InputPageComponent } from './page/input-page/input-page.component';
import { OutputPageComponent } from './page/output-page/output-page.component';
import { ModelPageComponent } from './page/model-page/model-page.component';
import { ViewChildPageComponent } from './page/view-child-page/view-child-page.component';
import { LinkSignalPageComponent } from './page/link-signal-page/link-signal-page.component';
import { ResourcePageComponent } from './page/resource-page/resource-page.component';
import { RxResourcePageComponent } from './page/rx-resource-page/rx-resource-page.component';
import { HttpResourcePageComponent } from './page/http-resource-page/http-resource-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signal/input', component: InputPageComponent },
  { path: 'signal/output', component: OutputPageComponent },
  { path: 'signal/model', component: ModelPageComponent },
  { path: 'signal/viewchild', component: ViewChildPageComponent },
  { path: 'signal/link-signal', component: LinkSignalPageComponent },
  { path: 'signal/resource', component: ResourcePageComponent },
  { path: 'signal/rx-resource', component: RxResourcePageComponent },
  { path: 'signal/http-resource', component: HttpResourcePageComponent }
];
