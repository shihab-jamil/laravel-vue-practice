import './bootstrap';
import {createApp} from 'vue'
import local from "./plugins/Localization";
import App from './App.vue'

import Button from "primevue/button";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

import 'primevue/resources/themes/mdc-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import PrimeVue from "primevue/config";

const app = createApp(App)
app.use(local)

app.component('Button', Button)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)

app.use(PrimeVue)
app.mount("#app")

export default app
