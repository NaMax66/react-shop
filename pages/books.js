import axios from "axios"
import {getBaseUrl} from "../utils"
console.log(getBaseUrl())
export default function({data}) {
return <>
        <h1>Books will be here</h1>
        <p>{data[0].title}</p>
      </>
}

export async function getStaticProps(context) {
  let { data } = await axios.get(getBaseUrl() + "/api/books")
  return {
    props: {
      data
    }
  }
}
