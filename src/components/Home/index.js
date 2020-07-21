import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { MainContainer, ContainerTitle, Title, Subtitle, ContainerForm, Form } from "../../style";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { fetchMarcas } from "../../action/marca";
import MenuItem from '@material-ui/core/MenuItem';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allMarcas: [],
			selectMarcas: "",
		};
	}

	componentDidMount(){
		this.props.fetchMarcas();
	}

	handleChange = async (event) => {
    	const details = event.target.value;
    	const response = await axios.get(details);
    	this.setState({ selectMarcas:response.data.nome });
  	};

	render() {
		const { selectMarcas } = this.state;
		return (
			<MainContainer>
				
				<ContainerTitle>
					<Title> Tabela Fipe </Title>
					<Subtitle> Consulte o valor de um carro de forma gratuita </Subtitle>
				</ContainerTitle>

				<ContainerForm>
					<FormControl variant="outlined">
						<InputLabel>Marca do Veículo</InputLabel>
        				<Select
          					name="selectMarcas"
          					value={selectMarcas}
          					onChange={this.handleChange}>
          					{this.state.allMarcas.map((arrayMarcas) => (
          						<MenuItem value={arrayMarcas.nome}>
          							{arrayMarcas.nome}
          						</MenuItem>
          						))}
          					

        				</Select>

        			</FormControl>
					
					<Button onClick={this.props.GoToFipePage}>Consultar preço</Button>
    			
    			</ContainerForm>
			</MainContainer>
			);
	};

};

const mapStateToProps = (state) => ({
		allMarcas: state.arrayMarcas
})

const mapDispatchToProps = (dispatch) => ({
	fetchMarcas: () => dispatch(fetchMarcas()),
	GoToFipePage: () => dispatch(push(routes.fipePage))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);