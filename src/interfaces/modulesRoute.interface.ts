import {LoadChildren, Route} from "@angular/router";

export interface ModulesRouteInterface extends Route {
  title: string,
  path: string,
  loadChildren: LoadChildren;
  data: {
    icon: string,
    title: string
    [key: string | symbol]: any;
  };
}
