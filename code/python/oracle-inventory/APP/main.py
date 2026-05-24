from __future__ import annotations

import logging
from pathlib import Path
from typing import Annotated

from fastapi import FastAPI, Form, HTTPException, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlmodel import Session, SQLModel, create_engine, select

from models import Ordinateur, Organisation, Utilisateur


BASE_DIR = Path(__file__).resolve().parent
DATABASE_URL = f"sqlite:///{BASE_DIR / 'database.db'}"

app = FastAPI()
app.mount("/static", StaticFiles(directory=BASE_DIR / "static"), name="static")

templates = Jinja2Templates(directory=BASE_DIR / "templates")
engine = create_engine(DATABASE_URL, echo=True)

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


def create_db_and_tables() -> None:
    SQLModel.metadata.create_all(engine)


def render_template(request: Request, template_name: str, **context: object):
    return templates.TemplateResponse(
        template_name,
        {"request": request, **context},
    )


create_db_and_tables()


@app.post("/endpoint")
async def endpoint(request: Request):
    try:
        datas = await request.json()
        ordinateur = Ordinateur(
            serial_number=datas["serial_number"],
            cpu_model=datas["cpu"]["model"],
            cpu_arch=datas["cpu"]["architecture"],
            cpu_cores=str(datas["cpu"]["cores"]),
            ram_total=datas["ram"]["total"],
            ram_used=datas["ram"]["used"],
            ram_model=datas["ram"]["model"],
            interface=datas["network"]["interface"],
            mac_address=datas["network"]["mac_address"],
            os=datas["system"]["os"],
            kernel=datas["system"]["kernel"],
        )
    except KeyError as error:
        raise HTTPException(status_code=400, detail=f"Champ manquant: {error}") from error

    with Session(engine) as session:
        existing = session.exec(
            select(Ordinateur).where(Ordinateur.serial_number == ordinateur.serial_number)
        ).first()

        if existing:
            return {"status": "already_exists", "serial_number": ordinateur.serial_number}

        session.add(ordinateur)
        session.commit()

    logger.info("Ordinateur ajoute: %s", ordinateur.serial_number)
    return {"status": "created", "serial_number": ordinateur.serial_number}


@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return render_template(request, "index.html", nom="etudiant")


@app.get("/items")
async def items():
    return {"message": "Route de test FastAPI"}


@app.get("/ordinateur", response_class=HTMLResponse)
async def afficher_ordinateurs(request: Request):
    with Session(engine) as session:
        ordinateurs = session.exec(select(Ordinateur)).all()

    return render_template(request, "ordinateur.html", ordinateurs=ordinateurs)


@app.get("/utilisateurs", response_class=HTMLResponse)
async def afficher_utilisateurs(request: Request):
    with Session(engine) as session:
        utilisateurs = session.exec(select(Utilisateur)).all()

    return render_template(request, "utilisateurs.html", utilisateurs=utilisateurs)


@app.get("/nouvel_utilisateur", response_class=HTMLResponse)
async def nouvel_utilisateur(request: Request):
    return render_template(request, "nouvel_utilisateur.html")


@app.post("/form", response_class=HTMLResponse)
async def form(
    request: Request,
    nom: Annotated[str, Form()],
    prenom: Annotated[str, Form()],
    numero_badge: Annotated[str, Form()],
):
    with Session(engine) as session:
        utilisateur = session.exec(
            select(Utilisateur).where(Utilisateur.numero_badge == numero_badge)
        ).first()

        if utilisateur is None:
            utilisateur = Utilisateur(nom=nom, prenom=prenom, numero_badge=numero_badge)
            session.add(utilisateur)
            session.commit()
        else:
            logger.info("Badge deja utilise: %s", numero_badge)

        utilisateurs = session.exec(select(Utilisateur)).all()

    return render_template(request, "utilisateurs.html", utilisateurs=utilisateurs)


@app.get("/ordinateur-organisation", response_class=HTMLResponse)
async def ordinateur_organisation(request: Request):
    with Session(engine) as session:
        ordinateurs = session.exec(select(Ordinateur)).all()
        organisations = session.exec(select(Organisation)).all()

    return render_template(
        request,
        "ordinateur_organisation.html",
        ordinateurs=ordinateurs,
        organisations=organisations,
    )
