import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import actions from './actions';


export const PostsContext = createContext({});

export const usePostsContext = () => useContext(PostsContext);

const PostsContextProvider = ({children}) => {

	const [state, setState] = useState({posts: [], stories: []});

	const [fetchDataLoader, setFetchDataLoader] = useState(false);

	const updateState = useCallback((updatedData, toClear = false) => {
		setState((prevState => (toClear ? {} : {...prevState, ...updatedData})))
	}, [setState]);

	const enhancedActions = useMemo(() => actions(state, updateState, {setFetchDataLoader}), [state, updateState]);


	const value = useMemo(() => ({
		actions: enhancedActions,
		state,
		loaders: {fetchDataLoader}
	}), [enhancedActions, state, fetchDataLoader]);

	return <>
		<PostsContext.Provider value={value}>
			{children}
		</PostsContext.Provider>
	</>
};

export default PostsContextProvider;
