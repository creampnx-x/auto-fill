from sqlalchemy import TextClause, create_engine
import env

engine = create_engine(env.SQLALCHEMY_DATABASE_URL_LOCAL)
connection = engine.connect()


def query_sql(sql: TextClause):
    result = connection.execute(sql)

    return result.mappings().all()


def excute_sql(sql: TextClause):
    try:
        connection.execute(sql)
        connection.commit()
    except:
        return False

    return True
