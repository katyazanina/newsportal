// import { defineAsyncComponent } from "vue"

const globalComponents = ["ALink", "ATitle"];

const useGlobalComponents = (app) => {
	globalComponents.forEach((component) => {
		app.component(
			component,
			defineAsyncComponent(() => import(`./${component}.vue`))
		);
	});
};

export { useGlobalComponents };
