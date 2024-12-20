from sqlalchemy import text
import database


def get_items(user_info: str):
    # fixme: 添加一个id字段，执行状态字段，执行用户字段
    r = database.query_sql(text('select * from "view_invoiceTocaiwu"'))

    return r


def set_status(item_id: str):
    running_status = database.excute_sql(
        text(
            'update "view_invoiceTocaiwu" set status=1 where item_id="' + item_id + '";'
        )
    )

    return running_status
