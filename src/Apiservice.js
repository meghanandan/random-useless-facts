import axios from "axios"

const Apiservice = () => {

    return axios.get(
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    )

}

export default Apiservice