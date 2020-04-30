import React from "react"
import Tooltip from "react-simple-tooltip"


const App = () => (
    <div style={{position: "relative"}}>
      <Tooltip
        style={{position: "absolute", top: "50%", right: "0"}}
        content="😎"
      />
    </div>
  )