from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

doc_desc = """
String Chopper cuts your string and returns every third letter in the string.
"""

app = FastAPI(title='String Chopper', description=doc_desc)

app.mount('/public', StaticFiles(directory='public'), name='public')

class Request(BaseModel):
    string_to_cut: str

class Response(BaseModel):
    """Response returns a string with only every third letter included"""
    return_string: str

@app.get('/')
async def home():
    return FileResponse('public/home.html')

@app.post('/test', response_model=Response)
async def cut_thirds(req: Request):
    mangled = req.string_to_cut[2::3]
    return {'return_string': mangled}
