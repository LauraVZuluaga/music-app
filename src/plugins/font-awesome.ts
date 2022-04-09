import { library } from "@fortawesome/fontawesome-svg-core";
import { faRadio, fas, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";

library.add(fas, faTwitter, faInstagram, faSearch, faRadio);

export { FontAwesomeIcon };