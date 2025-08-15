let currentStep = 1;

function nextStep() {
  document.querySelector('.pw-info').style.display = "none"; // Esconde a recepção
  document.getElementById(`step-${currentStep}`).style.display = "none";
  currentStep++;
  document.getElementById(`step-${currentStep}`).style.display = "block";
}

//A função showResult() gera uma senha de 12 caracteres usando letras (maiúsculas e minúsculas), números e símbolos.
function showResult() {
  document.getElementById(`step-${currentStep}`).style.display = "none";
  document.getElementById("result").style.display = "block";

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
  let password = "";
  for (let i = 0; i < 12; i++) {
    const rand // random (função para gerar um número aleatório(sorteado))
    = Math.floor(Math.random() * charset.length);
    password += charset[rand];
  }
  document.getElementById("generatedPassword").innerText = password;
}

function goToCustomStep() { //Senha personalizada caso o usuário não tenha gostado da senha gerada
    document.getElementById("result").style.display = "none";
    document.getElementById("step-5").style.display = "block";
}
function generateCustomPassword() {
  const len = document.getElementById("len").value;
  const includeUpper = document.getElementById("upper").checked;
  const includeLower = document.getElementById("lower").checked;
  const includeNumber = document.getElementById("number").checked;
  const includeSymbol = document.getElementById("symbol").checked;

  let charset = "";
  if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumber) charset += "0123456789";
  if (includeSymbol) charset += "!@#$%&*";

  if (charset === "") {
    document.getElementById("pw").innerText = "Selecione ao menos uma opção!";
    return;
  }

  let password = "";
  for (let i = 0; i < len; i++) {
    const rand = Math.floor(Math.random() * charset.length);
    password += charset[rand];
  }

  document.getElementById("pw").innerText = password;
}

function copyGeneratedPassword() {
    let senha = document.getElementById('generatedPassword').textContent;

    navigator.clipboard.writeText(senha)
        .then(() => {
            alert("Senha copiada para a área de transferência!");
        })
        .catch(err => {
            console.error("Erro ao copiar: ", err);
        });
}

document.getElementById('btnCopiar').addEventListener('click', function() {
    let texto = document.getElementById('pw').textContent;

    navigator.clipboard.writeText(texto)
        .then(() => {
            document.getElementById('mensagem').textContent = "Copiado para a área de transferência!";
            
            // limpa a mensagem depois de 2 segundos
            setTimeout(() => {
                document.getElementById('mensagem').textContent = "";
            }, 2000);
        })
        .catch(err => {
            console.error("Erro ao copiar: ", err);
        });
});




