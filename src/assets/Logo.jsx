import * as React from "react"
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={29}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={19} r={9} stroke="#1AEA22" strokeWidth={2} />
    <circle cx={22} cy={19} r={9} stroke="#EA1414" strokeWidth={2} />
    <circle cx={16} cy={10} r={9} stroke="#2429A9" strokeWidth={2} />
  </svg>
)
export default Logo
