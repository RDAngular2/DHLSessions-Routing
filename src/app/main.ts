import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {ApplicationWithRoutingModule} from "./application.module";

platformBrowserDynamic().bootstrapModule(ApplicationWithRoutingModule)
    .then(success => console.log(`Application bootstrap succeeded`))
    .catch(error => console.log(error));

