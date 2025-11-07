# Angular 18 Features
Released: April–May 2024
Focus: Performance, developer experience, and zoneless architecture
✨ Major Features


Zoneless Change Detection (Experimental)<img width="1536" height="1024" alt="Designer (5)" src="https://github.com/user-attachments/assets/a0660960-9a30-46eb-977b-97aee54d7dfe" />


Removes dependency on zone.js
Uses provideExperimentalZonelessChangeDetection() and signals
Benefits: Faster rendering, better debugging, improved stack traces [angularminds.com]



Partial Hydration Strategy

Improves SSR performance by hydrating only necessary parts of the DOM [angularminds.com]



Control State Change Events

New events for form controls to track state changes more precisely [geeksforgeeks.org]



Route Redirects as Functions

Allows dynamic route redirection logic [angularminds.com]



Fallback Content for ng-content

Enables default content when no projection is provided [geeksforgeeks.org]



Improved Angular CLI

Native Tailwind CSS support, SCSS setup, SSR/SSG prompts [dev.to]



Standalone Components

No need for NgModules; simplifies architecture [dev.to]



Signals API

Reactive primitives for state management (alternative to RxJS) [dev.to]




# Angular 19 Features
Released: November 2024
Focus: SSR, hydration, reactivity, and tooling
✨ Major Features


Incremental Hydration (Experimental)

Hydrates parts of the DOM progressively for faster SSR [angularminds.com]



Route-Level Render Modes

Customize rendering strategy per route (e.g., SSR, SSG) [angularminds.com]



Linked Signals

Writable signals that recompute based on source signal changes [angular.love]



Resource API

Handles async data within signal graphs (e.g., loading states) [biztechcs.com]



Standalone Defaults

All components, directives, and pipes are standalone by default [biztechcs.com]



Signal-Based Inputs and Queries

New decorators for inputs and queries using signals (e.g., @InputSignal) [biztechcs.com]



Hot Module Replacement (HMR)

Faster development experience with live updates [angularminds.com]



Two-Dimensional Drag and Drop

New UI capability for advanced interactions [angularminds.com]

# New Directives & Attributes in Angular 18/19
✅ Built-in Attribute Directives

ngClass – Conditional class binding
ngStyle – Dynamic inline styles
ngModel – Two-way data binding for forms [geeksforgeeks.org]

🛠️ Custom Attribute Directives (Angular 18+)

Example: appHighlight
TypeScript@Directive({ selector: '[appHighlight]' })export class HighlightDirective {  constructor(private el: ElementRef) {    this.el.nativeElement.style.backgroundColor = 'yellow';  }}Show more lines
Usage:
Interactivity on code previews is coming soon<p appHighlight>Highlight me!</p>```[8](https://angular.dev/guide/directives/attribute-directives)Show more lines


🧱 Structural Directives

Angular 18/19 continues support for:

*ngIf, *ngFor, *ngSwitch
Custom structural directives for role-based rendering or dynamic DOM manipulation [tutscoder.com]


🚀 Migration Guide: Angular 17 → 18 → 19
🔄 Step-by-Step Upgrade Commands
✅ Upgrade to Angular 18
Shellng update @angular/core@18 @angular/cli@18Show more lines

Ensure:

Node.js ≥ v18.19.0
TypeScript ≥ v5.4
Zone.js ≥ v0.14.x


Review changes to:

NgSwitch now uses === instead of ==
paramsInheritanceStrategy default is now emptyOnly [geeksforgeeks.org]



✅ Upgrade to Angular 19
Shellng update @angular/core@19 @angular/cli@19Show more lines

Ensure:

Node.js ≥ v20.11.1
TypeScript ≥ v5.6


Key changes:

Standalone by default: Remove standalone: false from components
Replace BrowserModule.withServerTransition() with APP_ID token
Use withNavigationErrorHandler() instead of Router.errorHandlerturn2search20 [dev.to]




![Uploading Designer (5).png…]()


