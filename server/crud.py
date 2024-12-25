from sqlalchemy import text

import database


def get_items(user_info: str, status: str):
    rs = database.query_sql(
        text(
            'select * from "view_invoiceTocaiwu" where kpsqr=:user and zhixing=:status'
        ).bindparams(user=user_info, status=status)
    )
    if len(rs) == 0:
        return {}

    item_id = str(rs[0].get("id"))
    bill_items = database.query_sql(
        text(
            'select * from "view_invoiceTocaiwukaipiao" where mid=:item_id'
        ).bindparams(item_id=item_id)
    )

    result = {"basic_info": rs[0], "items_info": bill_items}

    return result


def set_status(item_id: str, status: str):
    running_status = database.excute_sql(
        text(
            'update "view_invoiceTocaiwu" set zhixing=:status where id=:item_id;'
        ).bindparams(status=status, item_id=item_id)
    )

    return running_status
