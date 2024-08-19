from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory='Templates')
templates.env.cache = None

@app.get('/')
async def index():
    return {'hellow': 'world'}

@app.get('/about')
async def about():
    return 'An Exceptional Company'

@app.get('/home')
async def home(request: Request):
    try:
        return templates.TemplateResponse("home.html", {"request": request})
    except Exception as e:
        print(f"Error rendering template: {e}")
        return {"error": str(e)}
    
@app.get('/projects')
async def projects(request: Request):
    try:
        return templates.TemplateResponse("projects.html", {"request": request})
    except Exception as e:
        print(f"Error rendering template: {e}")
        return {"error": str(e)}
    
@app.get('/connect')
async def projects(request: Request):
    try:
        return templates.TemplateResponse("connect.html", {"request": request})
    except Exception as e:
        print(f"Error rendering template: {e}")
        return {"error": str(e)}
    
@app.get('/login')
async def projects(request: Request):
    try:
        return templates.TemplateResponse("login.html", {"request": request})
    except Exception as e:
        print(f"Error rendering template: {e}")
        return {"error": str(e)}