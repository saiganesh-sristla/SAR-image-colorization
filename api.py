import asyncio
import base64

import torch
from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from torchvision import io
from torchvision.transforms.functional import resize

from output import colorize


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_headers=['*'],
    allow_methods=['*'],
    allow_credentials=True
)


@app.get('/')
async def home():
    return FileResponse('index.html')


async def read_sar_img(file):
    bytes = await file.read()
    arr = torch.frombuffer(bytes, dtype=torch.uint8)
    return resize(io.decode_image(arr, io.ImageReadMode.GRAY), [256, 256])


def encode_to_b64(color_img):
    arr = io.encode_png(color_img)
    bytes = arr.numpy().tobytes()
    return base64.b64encode(bytes).decode()


@app.post('/')
async def sar_to_color(files: list[UploadFile]):
    sar_img_lst = await asyncio.gather(*[read_sar_img(file) for file in files])

    sar_imgs = torch.stack(sar_img_lst)
    color_imgs = colorize(sar_imgs)

    return JSONResponse([encode_to_b64(color_img) for color_img in color_imgs])
