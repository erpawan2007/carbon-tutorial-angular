import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { GridModule, TableModule } from 'carbon-components-angular';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { RepoPageComponent } from './repo-page/repo-page.component';

import { LinkModule, PaginationModule } from 'carbon-components-angular';

@NgModule({
  declarations: [RepoPageComponent, RepoTableComponent],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    GridModule,
    TableModule,
    LinkModule,
    PaginationModule
  ]
})
export class RepositoriesModule { }
