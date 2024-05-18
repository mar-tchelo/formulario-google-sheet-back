// Form.js
const form = document.querySelector("form");
const button = document.querySelector("button");

const formApiUrl = "https://api.sheetmonkey.io/form/5yREQQpqyiWMV1z3cvFQvs";


// Adiocionar Loanding
const addLoading = () => {
  button.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
};

// Remover Loanding
const removeLoading = () => {
  button.innerHTML = `Enviar`;
};

const handleSubmit = (event) => {
  event.preventDefault();
  addLoading();

  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;

  submitForm(name, email)
   .then(() => {
      //limpar inputs
      form.reset();

      //remover loanding
      removeLoading();

      // Foco no input name após envio
      document.querySelector("input[name=name]").focus();

    })
   .catch((error) => {
      console.log("Erro ao enviar formulário", error);
    });
};

form.addEventListener("submit", handleSubmit);

// FormApi.js
const submitForm = (name, email) => {
  return fetch(formApiUrl, {
    method: "post",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
   .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }
      return response.json();
    })
   .then((data) => {
      console.log("Formulário enviado com sucesso", data);
    })
   .catch((error) => {
      console.log("Erro ao enviar formulário", error);
    });
};