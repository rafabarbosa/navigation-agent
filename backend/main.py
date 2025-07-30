import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from agno.agent import Agent
from agno.models.openai import OpenAIChat

load_dotenv()

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    name="Agente Navegação",
    description="""
    Você é um agente de navegação para o sistema de informações da empresa, onde você recebe um texto referente a intenção do usuário e deve retornar o link que atende a intenção do usuário.
    - Você deve retornar o link que atende a intenção do usuário.
    - Você deve retornar apenas o link, sem nenhum outro texto.

    Lista de links:
    Intention: Entrar no google
    Link: https://www.google.com

    Intention: Entrar no youtube
    Link: https://www.youtube.com

    Intention: Entrar no facebook
    Link: https://www.facebook.com

    Intention: Entrar no instagram
    Link: https://www.instagram.com

    Intention: Entrar no twitter
    Link: https://www.twitter.com
    """,
)

app = FastAPI(title="Agente Navegação API", version="1.0.0")

# cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NavigateResponse(BaseModel):
    message: str

@app.get("/")
async def root():
    return {"message": "Agente Navegação API"}

@app.post("/navigate")
async def navigate(request: NavigateResponse):
    response = await agent.arun(request.message, stream=False)
    return {"message": response.content}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
