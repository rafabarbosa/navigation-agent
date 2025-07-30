# 🧭 Agente Navegação

Sistema de navegação inteligente com arquitetura moderna, composto por uma API REST em FastAPI (backend) e uma interface React (frontend).

## 📋 Visão Geral

O **Agente Navegação** é uma aplicação web completa que combina uma API robusta em Python com uma interface moderna em React. O projeto está estruturado em duas partes principais:

- **Backend**: API REST com FastAPI e Python 3.13
- **Frontend**: Interface React com Vite

## 🏗️ Arquitetura

```
agente-navegacao/
├── backend/             # API FastAPI
│   ├── main.py         # Aplicação principal
│   ├── pyproject.toml  # Configuração Python
│   ├── Dockerfile      # Containerização
│   └── README.md       # Documentação backend
├── frontend/           # Interface React
│   ├── src/            # Código fonte
│   ├── package.json    # Dependências Node.js
│   ├── vite.config.js  # Configuração Vite
│   └── README.md       # Documentação frontend
└── README.md          # Esta documentação
```

## 🚀 Tecnologias Utilizadas

### Backend
- **Python 3.13** - Linguagem principal
- **FastAPI** - Framework web moderno e rápido
- **Pydantic** - Validação de dados
- **Uvicorn** - Servidor ASGI
- **Docker & Docker Compose** - Containerização
- **uv** - Gerenciador de pacotes Python

### Frontend
- **React 19.1.0** - Biblioteca JavaScript
- **Vite 7.0.4** - Build tool moderna
- **Axios 1.11.0** - Cliente HTTP
- **ESLint** - Linting de código

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ (para frontend)
- Python 3.13+ (para backend)
- Docker (opcional, para containerização)

### Backend

#### Instalação
```bash
cd backend
uv sync
```

#### Execução
```bash
# Com uv
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Com Docker
docker-compose up --build
```

### Frontend

#### Instalação
```bash
cd frontend
npm install
```

#### Execução
```bash
npm run dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173`

## 🌐 Endpoints da API

- `GET /` - Informações da API
- `GET /navigate` - Retorna mensagem "works"

### Testando a API
```bash
curl http://localhost:8000/navigate
# Resposta: {"message": "works"}
```

## 🔧 Scripts Disponíveis

### Backend
```bash
# Executar com uv
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Executar com Docker
docker-compose up
```

### Frontend
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build
npm run preview

# Linting
npm run lint
```

## 🐳 Docker

### Executar tudo com Docker
```bash
# Backend
cd backend
docker-compose up --build

# Frontend (em outro terminal)
cd frontend
npm run dev
```

## 📁 Estrutura Detalhada

### Backend
```
backend/
├── main.py              # Aplicação FastAPI
├── pyproject.toml       # Configuração do projeto
├── uv.lock              # Lock file das dependências
├── Dockerfile           # Configuração do Docker
├── docker-compose.yml   # Configuração do Docker Compose
├── .dockerignore        # Arquivos ignorados no Docker
└── README.md           # Documentação
```

### Frontend
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
└── README.md           # Documentação
```

## 🔗 Comunicação entre Serviços

- **Backend**: Executa na porta `8000`
- **Frontend**: Executa na porta `5173`
- **Comunicação**: Frontend se comunica com backend via Axios

## 🚀 Deploy

### Backend
```bash
cd backend
docker-compose up --build -d
```

### Frontend
```bash
cd frontend
npm run build
# Servir arquivos em dist/
```

## 🧪 Desenvolvimento

### Adicionando Novas Funcionalidades

1. **Backend**: Adicione endpoints em `main.py`
2. **Frontend**: Crie componentes em `src/components/`
3. **Teste**: Use curl para API, browser para frontend

### Boas Práticas

- Mantenha a separação entre frontend e backend
- Use ESLint no frontend para qualidade de código
- Documente novos endpoints no backend
- Teste ambos os serviços antes de fazer commit

## 📚 Documentação Adicional

- [Backend README](./backend/README.md) - Documentação detalhada do backend
- [Frontend README](./frontend/README.md) - Documentação detalhada do frontend

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma [issue](../../issues) no GitHub
- Consulte a documentação específica de cada módulo
- Verifique os logs de erro em ambos os serviços 