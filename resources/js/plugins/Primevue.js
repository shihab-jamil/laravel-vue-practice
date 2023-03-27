import PrimeVue from 'primevue/config'

import app from "../app.js";

import Button from "primevue/button";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

import 'primevue/resources/themes/mdc-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

app.component('Button', Button)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)

app.use(PrimeVue)

