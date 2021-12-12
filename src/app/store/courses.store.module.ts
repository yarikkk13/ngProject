import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CourseStoreEffects } from './effects/courses.effects';
import { courseReducer } from './reducers/courses.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('courseStore', courseReducer),
    EffectsModule.forFeature([CourseStoreEffects])
  ],
  providers: [CourseStoreEffects]
})
export class CoursesStoreModule {}
