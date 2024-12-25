from fastapi import FastAPI
import crud
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 0：未执行 1：执行中 2：已经执行
status_map = {"not_executed": "0", "executing": "1", "executed": "2"}


@app.get("/event_list")
def get_list(user_info: str, status: str):
    if status == "not_executed":
        # 如果有执行中的，则不再执行
        executing = crud.get_items(user_info, status_map["executing"])
        if len(executing) > 0:
            return []

    # 获取未执行的数据
    result = crud.get_items(user_info, status_map[status])

    return result


@app.put("/status")
def finished_item(id: str, status: str):
    """将已经完成事件的状态更新"""
    result = crud.set_status(item_id=id, status=status_map[status])

    return result


@app.get("/")
def index():
    return "i am raining."
