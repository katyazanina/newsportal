import { defineAsyncComponent } from "vue"

const appComponents = [
	"AppHeader",
	"AppFooter",
	"AppNav"
]

const useAppComponents = (app) => {
	appComponents.forEach(component => {
		app.component(component, defineAsyncComponent(() =>
			import(`./${component}.vue`)
		));
	})
}
export { useAppComponents }
