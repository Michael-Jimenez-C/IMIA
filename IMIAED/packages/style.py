import tensorflow_hub as hub
import tensorflow as tf
from matplotlib import pyplot as plt 
import packages.Imagen as Imagen
import numpy as np
import cv2 
import os 
print(os.listdir("./"))

model = hub.load('http://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')

def load_image(img_path):
    img = tf.io.read_file(img_path)
    img = tf.image.decode_image(img, channels=3)
    img = tf.image.convert_image_dtype(img, tf.float32)
    img = img[tf.newaxis, :]
    return img

def filtro(img):
    content_image = load_image("./IMIAED/packages/imagenE.png")
    style_image = load_image('./IMIAED/packages/'+img)
    content_image.shape
    stylized_image = model(tf.constant(content_image), tf.constant(style_image))[0]
    try:
        for i in os.listdir('gif_2'):
            os.remove("./IMIAED/packages/imagenG.png")
    except:
        pass
    finally:
        cv2.imwrite("./IMIAED/packages/imagenG.png" ,cv2.cvtColor(np.squeeze(stylized_image)*255, cv2.COLOR_BGR2RGB))
        return Imagen.Imagen.vectorizacion("./IMIAED/packages/imagenG.png")
      