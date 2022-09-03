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

document.addEventListener("click", (e) => {
	e.preventDefault()

	const [formEsquerda, formDireita] = pegaValoresInput()

	const isSubmit = e.target.id == "submit"
	const isReset = e.target.id == "reset"
	const isDadoReset = e.target.id == "dado-reset"

	if (isSubmit) {
		transportaDados()
	}

	if (isReset) {
		limpaFormEsquerda()
	}

	if (isDadoReset) {
		limpaFormDireita()
	}
})
