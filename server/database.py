from sqlalchemy import TextClause, create_engine, false, true
import env

engine = create_engine(env.SQLALCHEMY_DATABASE_URL)
connection = engine.connect()


def query_sql(sql: TextClause):
    result = connection.execute(sql)

    return result.mappings().all()


def excute_sql(sql: TextClause):
    try:
        connection.execute(sql)
        connection.commit()
    except:
        return false

    return true
