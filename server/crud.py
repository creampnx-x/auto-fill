from sqlalchemy import text, true
import database


def get_items(user_info: str, status: str):
    # fixme: 添加一个id字段，执行状态字段，执行用户字段
    # todo code:
    # text(
    #     'select * from "view_invoiceTocaiwu" where user=:user and status=:status'
    # ).bindparams(user=user_info, status=status)
    rs = database.query_sql(text('select * from "view_invoiceTocaiwu"'))
    if len(rs) == 0:
        return {}

    # item_id = str(r.get("id"))
    bill_items = database.query_sql(
        text('select * from "view_invoiceTocaiwukaipiao";')
        # todo code
        # text(
        #     'select * from "view_invoiceTocaiwukaipiao" where item_id=:item_id'
        # ).bindparams(item_id=item_id)
    )

    result = {"basic_info": rs[0], "items_info": bill_items}

    return result


def set_status(item_id: str, status: str):
    # todo code
    # text(
    #     'update "view_invoiceTocaiwu" set status=:status where item_id=:item_id;'
    # ).bindparams(status=status, item_id=item_id)
    # running_status = database.excute_sql(
    #     text(
    #         'update "view_invoiceTocaiwu";'
    #     )
    # )

    return true
