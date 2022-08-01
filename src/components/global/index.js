import { defineAsyncComponent } from "vue"

const globalComponents = [
    "BLink",
]

const useGlobalComponents = (app) => {
    globalComponents.forEach(component => {
        app.component(component, defineAsyncComponent(() =>
            import(`./${component}.vue`)
        ));
    })
}
export { useGlobalComponents }
