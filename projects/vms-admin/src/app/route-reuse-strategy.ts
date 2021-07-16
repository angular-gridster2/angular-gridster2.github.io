import {
    RouteReuseStrategy,
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
    RouterModule,
    Routes,
    UrlSegment,
    
} from '@angular/router';

export class RouteReuseService implements RouteReuseStrategy {
    
    storedRoutes = {};
    routeLeftFrom = ''
    
    shouldDetach(route: ActivatedRouteSnapshot): boolean{
        this.routeLeftFrom = route.routeConfig.path;
        return route.data.reuse || false
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void{
        let storedRoute = {
            snapshot: route,
            handle: handle
        }
        this.storedRoutes[route.routeConfig.path] = storedRoute;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean{
        if(this.storedRoutes[route.routeConfig.path] && route.routeConfig.data && route.routeConfig.data.reuseWhenLeftFrom.indexOf(this.routeLeftFrom)>-1)
            return true
        else return false
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null{
        if(!route.routeConfig || !this.storedRoutes[route.routeConfig.path])
            return null
        else return this.storedRoutes[route.routeConfig.path].handle
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean{
        return future.data.reuse || false
    }
}