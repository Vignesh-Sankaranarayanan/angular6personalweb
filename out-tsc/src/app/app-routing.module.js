"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var coding_component_1 = require("./coding/coding.component");
var experience_component_1 = require("./experience/experience.component");
var published_component_1 = require("./published/published.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'coding', component: coding_component_1.CodingComponent },
    { path: 'experience', component: experience_component_1.ExperienceComponent },
    { path: 'projects', component: published_component_1.PublishedComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map