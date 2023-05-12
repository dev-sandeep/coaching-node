import { throttle } from "lodash";

function ThrottleComp() {
  const handleChange = throttle((event) => {
    console.log(event.target.value);
  }, 1000);

  return <input type="text" onChange={handleChange} />;
}

export default ThrottleComp;