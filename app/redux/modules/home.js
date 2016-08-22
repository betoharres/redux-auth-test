import { fromJS } from 'immutable'

const initialState = fromJS({
  title: 'Teste'
})

export default function home (state = initialState) {
 return state
}
