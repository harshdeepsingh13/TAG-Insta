import {AppContainer, FetchDataLoader} from "./AppStyles";
import Posts from "./components/Posts";
import Header from "./components/Header";
import {usePostsContext} from "./contexts/PostsContext";
import {useEffect, useRef} from "react";
import Stories from "./components/Stories";
import Loader from "./components/Loader";
import {Container} from "react-bootstrap";

function App() {

	const {state: {posts, stories}, actions, loaders} = usePostsContext();


	let isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) {
			actions.fetchData();
			isMounted.current = true;
		}
	}, []);

	return (
		<AppContainer>
			<Header/>
			<Container>
				{
					loaders.fetchDataLoader &&
					<FetchDataLoader>
						<Loader/>
					</FetchDataLoader>
				}
				<Stories stories={stories}/>
				<Posts posts={posts}/>
			</Container>
		</AppContainer>
	);
}

export default App;
