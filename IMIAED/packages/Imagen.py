import PIL
import os
class Imagen:
    def __init__(self,pix,ancho,alto):
        pix=pix.split(",")
        for i in range(len(pix)):
            pix[i]=int(pix[i])
        ancho=int(ancho)
        alto=int(alto)
        try:
            for i in os.listdir('gif_2'):
                os.remove("./IMIAED/packages/imagenE.png")
        except:
            pass
        
        img=PIL.Image.new('RGB', (ancho,alto))
        r=[]
        g=[]
        b=[]
        for i in range(0,len(pix),3):
            r.append(pix[i])
            g.append(pix[i+1])
            b.append(pix[i+2])
        for i in range(ancho):
            for j in range(alto):
                img.putpixel((i,j),(r[i*ancho+j],g[i*ancho+j],b[i*ancho+j]))
        
        self.img=img




        

