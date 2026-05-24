from sqlmodel import Field, SQLModel, create_engine
from sqlmodel import Field, SQLModel, Relationship


class Organisation(SQLModel, table=True):
     id: int | None = Field(default=None, primary_key=True)
     name : str
     ordinateurs: list["Ordinateur"] = Relationship(back_populates="organisation") 



class Ordinateur(SQLModel, table=True):

    id: int | None = Field(default=None, primary_key=True)

    cpu_model: str
    cpu_arch: str
    cpu_cores: str

    ram_total: str
    ram_used: str
    ram_model: str

    interface: str
    mac_address: str

    os: str
    kernel: str

    serial_number: str = Field(unique=True)
    organisation_id: int | None = Field(default=None, foreign_key="organisation.id")
    organisation:Organisation | None = Relationship(back_populates="ordinateurs")

class Utilisateur(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)

    nom : str
    prenom : str
    numero_badge: str = Field(unique=True)
