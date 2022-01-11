import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { PropertyListComponent } from './containers/property-list/property-list.component';
const components = [
  NavbarComponent,
  FooterComponent,
  PropertyCardComponent,
  PropertyListComponent,
];
@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class SharedModule {}
