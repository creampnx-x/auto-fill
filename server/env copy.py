SQLALCHEMY_DATABASE_URL = (
    "mssql+pyodbc://user:password@host/database"
    "?driver=ODBC+Driver+18+for+SQL+Server&TrustServerCertificate=yes"
)

SQLALCHEMY_DATABASE_URL_LOCAL = "sqlite://local.db"