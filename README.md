# Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# Deleted parts from the Angular Course

## user.component.ts

```ts
// Decorator | The old way to create inputs
//-------------------------------------------
 @Input({ required: true }) id!: string;
 @Input({ required: true }) avatar!: string;
 @Input({ required: true }) name!: string;

  // New approach
  //-------------------------------------------
select = output<string>();

  // Signals | The new way to create inputs
  //-------------------------------------------
avatar = input.required<string>();
name = input.required<string>();

 imagePath = computed(() => {
     return 'assets/users/' + this.avatar();
 })
```
