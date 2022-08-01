import { defineAsyncComponent } from "vue"

const appComponents = [
    "TheHeader",
    "TheFooter",
]

const useAppComponents = (app) => {
    appComponents.forEach(component => {
        app.component(component, defineAsyncComponent(() =>
            import(`./${component}.vue`)
        ));
    })
}
export { useAppComponents }
