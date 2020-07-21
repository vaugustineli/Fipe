import styled from 'styled-components';

export const MainContainer = styled.div`
	background-image: url("https://cdn.pixabay.com/photo/2014/08/26/13/52/parking-427955_1280.jpg");
	background-color: black;
	width: 84%;
	height: 100%;
	margin: 0px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const ContainerTitle = styled.div`
	width: 50%;
	height: 50%;
	margin: 1%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	color: white;
	margin-bottom: 2px;

`;

export const Subtitle = styled.p`
	color: white;
	margin-top: 2px;
`;

export const ContainerForm = styled.form`
	background: white;
	width: 30%;
	height: 50%;
	margin-bottom: 5p%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	border-radius: 5px;
	gap: 10px;
	padding: 1%;
`;