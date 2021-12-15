import { StepLabel, Stepper, Typography, Step } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
	const [etapaAtual, setEtapaAtual] = useState(0);
	const [dadosColetados, setDados] = useState({});

	useEffect(() => {
		// eslint-disable-next-line 
		if (etapaAtual === formulario.length - 1) {
			aoEnviar(dadosColetados);
		}
	});

	const formulario = [
		<DadosUsuario aoEnviar={coletarDados} />,
		<DadosPessoais aoEnviar={coletarDados} />,
		<DadosEntrega aoEnviar={coletarDados} />,
		<Typography variant="h5" align="center">
			Obrigado pelo Cadastro!
		</Typography>,
	];

	function coletarDados(dados) {
		setDados({ ...dadosColetados, ...dados });
		proximo();
	}

	function proximo() {
		setEtapaAtual(etapaAtual + 1);
	}

	return (
		<Fragment>
			<Stepper activeStep={etapaAtual}>
				<Step>
					<StepLabel>Login</StepLabel>
				</Step>
				<Step>
					<StepLabel>Pessoal</StepLabel>
				</Step>
				<Step>
					<StepLabel>Entrega</StepLabel>
				</Step>
				<Step>
					<StepLabel>Finalização</StepLabel>
				</Step>
			</Stepper>
			{formulario[etapaAtual]}
		</Fragment>
	);
}

export default FormularioCadastro;
