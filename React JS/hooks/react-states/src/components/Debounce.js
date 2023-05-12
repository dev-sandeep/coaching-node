import { debounce } from "lodash";

function DebounceComp() {

  const handleChange = debounce((e)=>{
    console.log(e.target.value);
  },1000)
  
  return <input type="text" onChange={handleChange} />;
}

export default DebounceComp;