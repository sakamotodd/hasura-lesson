import { memo, VFC } from 'react'

interface Props {
  printMsg: () => void
}
// eslint-disable-next-line react/display-name
export const Child: VFC<Props> = memo(({ printMsg }) => {
  return (
    <>
      <p>Child Component</p>
      <button
        className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
        onClick={printMsg}
      >
        click
      </button>
    </>
  )
})
