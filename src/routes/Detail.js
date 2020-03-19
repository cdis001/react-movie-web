import React, { useEffect } from 'react'

const Detail = props => {
  useEffect(() => {
    console.log(props.location.state)
    if (props.location.state === undefined) {
      props.history.push('/')
    }
  }, [])

  return <span>{props.location.state.title}</span>
}

export default Detail
