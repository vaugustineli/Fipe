import axios from "axios";
import { push } from "connected-react-router";

export const fetchMarcas = () => async (dispatch) => {
	const response = await axios.get (
		"https://parallelum.com.br/fipe/api/v1/carros/marcas")
	dispatch(setMarcas(response.data.nome))
}

const setMarcas = (allMarcas) => ({
	type: "SET_MARCAS",
	payload: {
		allMarcas
	}
})