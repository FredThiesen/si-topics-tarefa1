const pegaValoresInput = () => {
	const dadosEsquerda = document.getElementById("form-dados-esquerda")
	const dadosDireita = document.getElementById("form-dados-direita")

	const dadosEsquerdaArray = Array.from(dadosEsquerda)
	const dadosDireitaArray = Array.from(dadosDireita)

	const dadosEsquerdaValues = dadosEsquerdaArray.map((input) => input.value)
	const dadosDireitaValues = dadosDireitaArray.map((input) => input.value)

	return [dadosEsquerdaValues, dadosDireitaValues]
}

const transportaDados = () => {
	const [dadosEsquerdaValues, dadosDireitaValues] = pegaValoresInput()

	dadosDireitaValues.forEach((value, index) => {
		if (dadosDireitaValues[index] !== "Limpar") {
			dadosDireitaValues[index] = dadosEsquerdaValues[index]
		}
	})

	const dadosDireita = document.getElementById("form-dados-direita")
	const dadosDireitaArray = Array.from(dadosDireita)

	dadosDireitaArray.forEach((input, index) => {
		console.log(input)
		input.value = dadosDireitaValues[index]
	})
}

const limpaFormDireita = () => {
	const dadosDireita = document.getElementById("form-dados-direita")
	const dadosDireitaArray = Array.from(dadosDireita)

	dadosDireitaArray.forEach((input, index) => {
		if (input.value !== "Limpar") {
			input.value = ""
		}
	})
}

const limpaFormEsquerda = () => {
	const dadosEsquerda = document.getElementById("form-dados-esquerda")
	const dadosEsquerdaArray = Array.from(dadosEsquerda)

	dadosEsquerdaArray.forEach((input, index) => {
		if (input.value !== "Cancelar" && input.value !== "Gravar") {
			input.value = ""
		}
	})
}

const postFormulario = async () => {
	const dadosEsquerda = document.getElementById("form-dados-esquerda")

	const requestBody = {
		nome: dadosEsquerda[0].value,
		dataNascimento: dadosEsquerda[1].value,
		email: dadosEsquerda[2].value,
		senha: dadosEsquerda[3].value,
		sexo: dadosEsquerda[4].value,
		telefoneResidencial: dadosEsquerda[5].value,
		fumante: dadosEsquerda[6].value,
		municipioOrigem: dadosEsquerda[7].value,
	}
	console.log("mandando post com body:", requestBody)

	const response = await fetch("http://localhost:4000/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(requestBody),
	})

	const data = await response.json()
	console.log("resposta do post:", data)
	populaDadosDireita(data)
}

const populaDadosDireita = (data) => {
	const dadosDireita = document.getElementById("form-dados-direita")

	dadosDireita[0].value = data.usuario.nome
	dadosDireita[1].value = data.usuario.dataNascimento
	dadosDireita[2].value = data.usuario.email
	dadosDireita[3].value = data.usuario.senha
	dadosDireita[4].value = data.usuario.sexo
	dadosDireita[5].value = data.usuario.telefoneResidencial
	dadosDireita[6].value = data.usuario.fumante
	dadosDireita[7].value = data.usuario.municipioOrigem
}

document.addEventListener("click", (e) => {
	e.preventDefault()

	const [formEsquerda, formDireita] = pegaValoresInput()

	const isSubmit = e.target.id == "submit"
	const isReset = e.target.id == "reset"
	const isDadoReset = e.target.id == "dado-reset"

	if (isSubmit) {
		// transportaDados()
		postFormulario()
	}

	if (isReset) {
		limpaFormEsquerda()
	}

	if (isDadoReset) {
		limpaFormDireita()
	}
})
