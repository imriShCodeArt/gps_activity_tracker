import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName } from '../counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(setName('Sharon'))}
        >
          Increment
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}
