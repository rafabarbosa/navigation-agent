# Frontend - Agente Navegação

Interface de usuário React para o sistema de navegação inteligente, desenvolvida com Vite para uma experiência de desenvolvimento rápida e eficiente.

## 🚀 Tecnologias

- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.0.4** - Build tool moderna e rápida
- **Axios 1.11.0** - Cliente HTTP para comunicação com APIs
- **ESLint** - Linting de código para qualidade e consistência

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Ou usando yarn
yarn install
```

## 🛠️ Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build de produção
npm run preview

# Executar linting
npm run lint
```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```
O servidor de desenvolvimento será iniciado em `http://localhost:5173`

### Produção
```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos do componente principal
│   ├── main.jsx         # Ponto de entrada da aplicação
│   ├── index.css        # Estilos globais
│   └── assets/          # Recursos estáticos
├── public/              # Arquivos públicos
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
├── eslint.config.js     # Configuração do ESLint
└── README.md           # Esta documentação
```

## 🔧 Configurações

### Vite
- Configurado para React com Fast Refresh
- HMR (Hot Module Replacement) habilitado
- Build otimizado para produção

### ESLint
- Regras específicas para React
- Plugin para React Hooks
- Plugin para React Refresh

## 🌐 Integração com Backend

O frontend está configurado para se comunicar com o backend FastAPI através do Axios. Certifique-se de que o backend esteja rodando na porta 8000.

## 📝 Desenvolvimento

### Adicionando Novas Dependências
```bash
npm install nome-do-pacote
```

### Estrutura de Componentes
- Mantenha componentes reutilizáveis em `src/components/`
- Use CSS modules ou styled-components para estilos
- Siga as convenções de nomenclatura do React

### Linting
O projeto usa ESLint para manter a qualidade do código. Execute regularmente:
```bash
npm run lint
```

## 🚀 Deploy

Para fazer deploy em produção:

1. Execute o build:
```bash
npm run build
```

2. Os arquivos otimizados estarão em `dist/`

3. Sirva os arquivos estáticos com seu servidor web preferido

## 📚 Recursos Adicionais

- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do Axios](https://axios-http.com/)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
