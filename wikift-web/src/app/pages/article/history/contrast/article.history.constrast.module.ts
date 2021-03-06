/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { ArticleHistoryConstrastComponent } from './article.history.constrast.component';
import { WikiftEditorConstrastModule } from '../../../../shared/directives/wikift-editor-constrast/wikift-editor-constrast.module';
import { ArticleService } from '../../../../../services/article.service';
import { ArticleHistoryService } from '../../../../../services/article.history.service';
import { ToastyModule } from 'ng2-toasty';

const ARTICLE_HISTORY_CONSTRAST_ROUTES: Routes = [
    { path: '', component: ArticleHistoryConstrastComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WikiftEditorConstrastModule,
        ModalModule.forRoot(),
        AlertModule.forRoot(),
        ToastyModule.forRoot(),
        RouterModule.forChild(ARTICLE_HISTORY_CONSTRAST_ROUTES)
    ],
    exports: [],
    declarations: [
        ArticleHistoryConstrastComponent
    ],
    providers: [
        ArticleService,
        ArticleHistoryService
    ],
})
export class ArticleHistoryConstrastModule { }
