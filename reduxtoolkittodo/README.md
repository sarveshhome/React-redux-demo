# Redux

### Flow of Data (Redux)

Component → dispatch(action) → reducer → store updates → UI re-renders




### Redux


`yarn add @reduxjs/toolkit`

`yarn add redux`

`yarn add react-redux`



### 🔑 Summary
```
Term	                Meaning
useDispatch	            Gives access to dispatch function (to send actions)

dispatch(action)    	Triggers a reducer to update the store

reducers	            Handle actions and return the new state

store	                Holds the state, updated by reducers
```