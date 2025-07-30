# Backend - Agente Navegação

API FastAPI com Python 3.13 usando uv para gerenciamento de dependências.

## Tecnologias

- Python 3.13
- FastAPI
- Pydantic
- Uvicorn
- Docker & Docker Compose
- uv (gerenciador de pacotes)

## Endpoints

- `GET /` - Informações da API
- `GET /navigate` - Retorna mensagem "works"

## Executando Localmente

### Com uv
```bash
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Com Docker
```bash
# Build e execução
docker-compose up --build

# Apenas execução
docker-compose up
```

## Testando

```bash
# Teste do endpoint navigate
curl http://localhost:8000/navigate

# Resposta esperada:
# {"message": "works"}
```

## Estrutura do Projeto

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
