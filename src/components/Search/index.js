import {SearchInput, SearchLabel} from "./styles";
import {Row} from "react-bootstrap";
import {SpriteContainer} from "../../styles/globalStyles";

const Search = (props) => {
	return <Row>
		<SearchLabel htmlFor={"global-search"}>
			<SearchInput type={"text"} id={"global-search"} name={"global-search"} placeholder={"Search"}/>
		</SearchLabel>
	</Row>;
}

export default Search;
