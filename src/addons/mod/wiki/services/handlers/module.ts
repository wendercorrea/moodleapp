// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable, Type } from '@angular/core';
import { CoreModuleHandlerBase } from '@features/course/classes/module-base-handler';
import { CoreCourseModuleHandler } from '@features/course/services/module-delegate';
import { makeSingleton } from '@singletons';
import { ADDON_MOD_WIKI_MODNAME, ADDON_MOD_WIKI_PAGE_NAME } from '../../constants';
import { ModFeature, ModPurpose } from '@addons/mod/constants';

/**
 * Handler to support wiki modules.
 */
@Injectable({ providedIn: 'root' })
export class AddonModWikiModuleHandlerService extends CoreModuleHandlerBase implements CoreCourseModuleHandler {

    name = 'AddonModWiki';
    modName = ADDON_MOD_WIKI_MODNAME;
    protected pageName = ADDON_MOD_WIKI_PAGE_NAME;

    supportedFeatures = {
        [ModFeature.GROUPS]: true,
        [ModFeature.GROUPINGS]: true,
        [ModFeature.MOD_INTRO]: true,
        [ModFeature.COMPLETION_TRACKS_VIEWS]: true,
        [ModFeature.GRADE_HAS_GRADE]: false,
        [ModFeature.GRADE_OUTCOMES]: false,
        [ModFeature.BACKUP_MOODLE2]: true,
        [ModFeature.SHOW_DESCRIPTION]: true,
        [ModFeature.RATE]: false,
        [ModFeature.COMMENT]: true,
        [ModFeature.MOD_PURPOSE]: ModPurpose.COLLABORATION,
    };

    /**
     * @inheritdoc
     */
    async getMainComponent(): Promise<Type<unknown>> {
        const { AddonModWikiIndexComponent } = await import('../../components/index');

        return AddonModWikiIndexComponent;
    }

}

export const AddonModWikiModuleHandler = makeSingleton(AddonModWikiModuleHandlerService);
