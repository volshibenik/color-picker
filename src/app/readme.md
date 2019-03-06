
# viewEncaps
1) none - стили компонента применяются ко всей странице
2) native/shadowDom - походу стили применяются к компоненту и его детям (создаётся шедоу дом рут и три
3) emulated - стили только к компоненту путём -> [content id=9].kk

# DOM
https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866

# view container
```html
<ng-container #vc></ng-container>
```

@ViewChild('vc', **{read: ViewContainerRef}**) viewContainer;

viewContainer.createEmbeddedView(TemplateRef)

```html
<ng-template #t><span>I am span</span></ng-template>
```
@ViewChild('t', **{read: TemplateRef}**) template: TemplateRef;
@ViewChild(**TemplateRef**) template: TemplateRef;
