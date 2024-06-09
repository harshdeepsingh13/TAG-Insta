import PostsContextProvider from "./PostsContext";

const GlobalContextProvider = ({children}) => {
	return <>
		<PostsContextProvider>
			{children}
		</PostsContextProvider>
	</>
};

export default GlobalContextProvider
