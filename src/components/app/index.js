import { defineAsyncComponent } from "vue"

const appComponents = [
	"AppHeader",
	"AppFooter",
	"AppNavButton"
]

const useAppComponents = (app) => {
	appComponents.forEach(component => {
		app.component(component, defineAsyncComponent(() =>
			import(`./${component}.vue`)
		));
	})
}
export { useAppComponents }
