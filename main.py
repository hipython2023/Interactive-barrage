from flask import *
from pickle import *

app = Flask(__name__)

try:
    with open("弹幕.pickle","rb") as f:
        #TODO1:使用load()方法从f 中读取数据赋值给 danmu_list
        danmu_list = load(f)
except:
    danmu_list=[]
    
@app.route("/")
def index():
    
    #TODO2:将弹幕列表 danmu_list 赋值给变量 list 传递到html页面
    return render_template("danmu.html",list = danmu_list)

@app.route("/show")
def show():
    danmu = request.values.get("danmu")
    danmu_list.append(danmu)
    with open("弹幕.pickle","wb") as f:
        #TODO3:使用dump()方法将弹幕列表 danmu_list 写入f中 
        dump(danmu_list,f)
        
    # 重定向到"/"路由
    return redirect("/")

    
app.run("127.0.0.1",8000)
