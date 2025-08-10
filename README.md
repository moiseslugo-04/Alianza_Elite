![Capa Alianza Elite](/public/desktop.png)

# Alianza Elite - Página Web React

Este é o site oficial da **Alianza Elite**, desenvolvido com React. O projeto foi criado para oferecer uma experiência multilíngue e uma gestão eficiente do estado global, além de contar com funcionalidades essenciais como contato, galeria e carrossel melhorado.

---

## Principais características

- **React com Hooks personalizados**  
  Foram criados custom hooks para gerenciar:

  - `useI18n`: Gestão do idioma (internacionalização) do site.
  - `useContact`: Lógica para o formulário de contato.
  - `useGallery`: Gestão e apresentação da galeria de imagens.
  - `useScroll`: Novo hook para gerenciar eventos e estados relacionados ao scroll de forma eficiente.

- **Context API para estado global**  
  O estado global é gerenciado com React Context para compartilhar dados e funções entre componentes sem necessidade de prop drilling.

- **Persistência do idioma com LocalStorage**  
  O idioma selecionado pelo usuário é salvo no `localStorage`, permitindo que a preferência seja mantida entre sessões e recarregamentos.

- **Carrossel com barra de scroll**  
  O carrossel de imagens agora inclui uma barra de scroll para melhorar a navegação e a experiência do usuário.

- **Redução de código repetido**  
  Foi realizada uma refatoração para eliminar código duplicado e melhorar a manutenção do projeto.

- **Imagem de capa**  
  Foi adicionada uma imagem de capa para melhorar a apresentação visual do site.

---

## Instalação

1. Clonar o repositório:

```bash
git clone https://github.com/tu-usuario/alianza-elite.git
cd alianza-elite
```
