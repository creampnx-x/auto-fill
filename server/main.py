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
def get_list(user_info: str):
    """获取还没有执行的事件"""
    list = crud.get_items("test_user")

    return list


@app.post("/finished")
def finished_item():
    """将已经完成事件的状态更新"""
    result = crud.set_status("item_id")

    return result


@app.get("/")
def index():
    return "i am cxdraining."
