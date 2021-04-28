
import { NgModule } from '@angular/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';

@NgModule({
  exports: [
    NzSpinModule,
    NzFormModule,
    NzTableModule,
    NzEmptyModule,
    NzIconModule,
    NzMenuModule,
    NzImageModule,
    NzAvatarModule,
    NzButtonModule,
    NzLayoutModule,
    NzBackTopModule,
    NzDividerModule,
    NzCarouselModule,
    NzProgressModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzNoAnimationModule,
    NzTransButtonModule,
  ]
})
export class DemoNgZorroAntdModule {

}
