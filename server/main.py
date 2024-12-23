from operator import le
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


@app.get("/event_list")
def get_list(user_info: str, status: str):
    """获取还没有执行的事件"""
    # todo code
    # if status == "not_executed":
    #     executing = crud.get_items(user_info, "executing")
    #     if len(executing) > 0:
    #         return []

    result = crud.get_items(user_info, status)
    
    return result


@app.put("/status")
def finished_item(id: str, status: str):
    """将已经完成事件的状态更新"""
    result = crud.set_status(item_id=id, status=status)

    return result


@app.get("/")
def index():
    return "i am raining."
