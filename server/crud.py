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
    # bill_items = database.query_sql(
    #     text('select * from "view_invoiceTocaiwukaipiao";')
    #     # todo code
    #     # text(
    #     #     'select * from "view_invoiceTocaiwukaipiao" where item_id=:item_id'
    #     # ).bindparams(item_id=item_id)
    # )

    bill_items = [
        {
            "id": "4CAD2EAE-78BF-48B4-9AB4-DDB5B4AAA595",
            "mid": "3e013dfd-0071-4896-a751-8758bfbf5274",
            "mingcheng": "专业技术服务",
            "jiancheng": "研发和技术服务",
            "guige": "",
            "danwei": "",
            "shuliang": "54.82",
            "danjia": "100",
        },
        {
            "id": "4CAD2EAE-78BF-48B4-9AB4-DDB5B4AAA595",
            "mid": "3e013dfd-0071-4896-a751-8758bfbf5274",
            "mingcheng": "专业技术服务",
            "jiancheng": "研发和技术服务",
            "guige": "",
            "danwei": "",
            "shuliang": "54.82",
            "danjia": "100",
        },
    ]

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
