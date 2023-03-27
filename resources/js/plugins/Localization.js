import { createI18n } from 'vue-i18n'
import English from "../Languages/English";
import Japanese from "../Languages/Japanese";

const messages = {
    en : English,
    jp : Japanese
}

const local = createI18n({
    locale : 'en    ',
    fallbackLocale: 'en',
    messages
})

export default local
