# StackX - Básico - Ponto de entrada

Olá!

Este é seu primeiro contato com versionamento na StackX educação!

O propósito dessa atividade é entender como funciona o processo de clone do git.

## Baixando e Instalando no Windows

* Baixe em [https://git-scm.com/download/win](https://git-scm.com/download/win)
* Instale usando os padrões pré-selecionados
* Após a instalação, abra o Git Bash para seguir as etapas de configuração

## Baixando e Instalando no Linux 

* Debian/Ubuntu
```bash
$ apt install git
```

Fedora
```bash
$ yum install git
```

Arch Linux
```bash
$ pacman -S git
```

## Configuração inicial do Git

O Git quer saber quem ele deve escrever como o committer das alterações, etc.
Para fazer isso, configure o nome de usuário e o e-mail do usuário no Git com os seguintes comandos:

1. `git config --global user.name "Seu nome"`
2. `git config --global user.email "seu-endereco@email.com`

### Configuração do editor

Às vezes, o Git precisa que você edite um arquivo que ele cria, por exemplo, a mensagem de um commit que você criou.
Como padrão, o Git é configurado com VIM, mas acaba tendo uma curva de aprendizado maior, então você pode utilizar a ferramenta de sua preferência:

Se você quiser usar o nano editor baseado em cli:
- `git config --global core.editor nano`

Para quem utiliza Windows:
- `git config --global core.editor notepad`

Ou, alternativamente, outras ferramentas que você já conhece:

- `git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"`
- `git config --global core.editor "atom --wait"`
- `git config --global core.editor "code --wait"`

### Criando apelidos/atalhos (Aliases)

Você pode configurar atalhos como tal:
* `git config --global alias.lol 'log --oneline --graph --all'`

Isso pode ser útil quando você olha para o gráfico do Git.
Cole isso em seu terminal e experimente com `git lol`.

---

Por hora é isso!

Até o próximo exercício.

### Alteração solicitada na tarefa CRIAÇÃO DE PERFIL NO GIT
Criar perfil no GitHub, clonar um repositório da StackX e abrir um PR submetendo uma alteração.
