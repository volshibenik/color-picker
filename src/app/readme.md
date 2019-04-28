# viewEncaps

1. none - стили компонента применяются ко всей странице
2. native/shadowDom - походу стили применяются к компоненту и его детям (создаётся шедоу дом рут и три)
3. emulated - стили только к компоненту путём -> [content id=9].kk

# DOM

https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866

## Separate rendering and data, always put rendering logic into directive;

# view container

```html
<ng-container #vc></ng-container>
```

@ViewChild('vc', **{read: ViewContainerRef}**) viewContainer;

viewContainer.createEmbeddedView(TemplateRef) //declared below

```html
<ng-template #t><span>I am span</span></ng-template>
```

@ViewChild('t', **{read: TemplateRef}**) template: TemplateRef; //or

@ViewChild(**TemplateRef**) template: TemplateRef;

## Embedded and Host Views

viewContainer can create embedded views from templates (as a part of it) and also host views, that can be standalone. Example is App view. Host views are made: vC.createComponent(componentFactory).
Comp Factories are made like this:

```javascript
constructor(private resolver: componentFactoryResolver){
  const factory = this.resolver.resolveComponentFactory(CompClass);
  ...
  this.vc.createComponent(factory)
}
```

for factories to work we need to add componentns to entryComps[] in module.

# renderer

use it to change dom elems props, but not DOM hierarchy. Instead, use methods above (viewContainerr)

# Change Detection

During CD Angular evals all bindings to create DOM. In dev ot's twice, so we get error valueChangedAfterItWasEval if we bind Date.now() f.ex.

to avoid change detection it's possible to run let's say heavy computation outside angular zone

```javascript
constructor(zone: ngZone)
zone.runOutsideAngular(() => setInterval())
```

#fn checkAndUpdateView
in core.js bundle, just put breakpoint to see all change detection in action

#DOM
https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02
templateRef can be accessed via @viewChild and then used to create view by: 
```javascript
let view = this.tpl.createEmbeddedView(null);
```
Embedded views are linked to template and host views - to component.
Host views are created when components are dynamically instantiated.
```javascript
constructor(private injector: Injector,
            private r: ComponentFactoryResolver) {
    let factory = this.r.resolveComponentFactory(ColorComponent);
    let componentRef = factory.create(injector);
    let view = componentRef.hostView;
}
``` 
don't forget entry components in that case.
Once view is created - add it in viewContainer.
Good candidate for this is ng-container


#Dynamic comps 
https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
