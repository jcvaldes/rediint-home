import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { FilterPipe } from './filter.pipe';
import { NoimagePipe } from './noimage.pipe';
import { DomseguroPipe } from './domseguro.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    FilterPipe,
    NoimagePipe,
    DomseguroPipe,
    TimeAgoPipe,
  ],
  exports: [ImagePipe, FilterPipe, NoimagePipe, DomseguroPipe, TimeAgoPipe],
})
export class PipesModule {}
