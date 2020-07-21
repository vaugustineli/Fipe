import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { MainContainer, ContainerTitle, Title, Subtitle, ContainerForm, Form } from "../../style";

class FipePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<MainContainer>
				
				<ContainerTitle>
					<Title> Tabela Fipe </Title>
					<Subtitle> Consulte o valor de um carro de forma gratuita </Subtitle>
				</ContainerTitle>

				<ContainerForm>

        <h1> Eu sou a FipePage </h1>

    		</ContainerForm>
			</MainContainer>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		GoToHome: () => dispatch(push(routes.root))
	}
}

export default connect(null, mapDispatchToProps)(FipePage);