import { throttle } from "lodash";

function ThrottleComp() {
  const handleChange = throttle((event) => {
    console.log(event.target.value);
  }, 100);

  return <input type="text" onChange={handleChange} />;
}

export default ThrottleComp;