import {Route} from "@angular/router";

export interface ModulesRouteInterface extends Route {
  title: string,
  path: string,
  data: {
    icon: string,
    title: string
    [key: string | symbol]: any;
  };
}
