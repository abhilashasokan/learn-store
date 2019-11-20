import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileModule } from "./../profile/profile.module";
import { TasksModule } from "./../tasks/tasks.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfileModule, TasksModule]
})
export class AppStoreModule {}
