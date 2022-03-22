import PIL
import matplotlib.pyplot as plt
import os
class Imagen:
    
    def __init__(self,pix,ancho,alto):
     
        ancho=int(ancho)
        alto=int(alto)
        for i in range(len(pix)):
            pix[i]=int(pix[i])
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
                img.putpixel((i,j),(r[j*ancho+i],g[j*ancho+i],b[j*ancho+i]))
        self.color={"r":r,
                    "g":g,
                    "b":b}
        img.save("./IMIAED/packages/imagenE.png")
    
    def vectorizacion(ruta):
        img = PIL.Image.open(ruta)
        size = img.size
        print("Esto es -------------: ",size)
        r= list(range(size[1]*size[0]))
        g=list(range(size[1]*size[0]))
        b=list(range(size[1]*size[0]))
        for i in range(size[0]):
            for j in range(size[1]):
                p=img.getpixel((i,j))
                r[j*size[0]+i] = p[0]
                g[j*size[0]+i] = p[1]
                b[j*size[0]+i] = p[2]
        s=[]
        for i in range(len(r)):
            s.append(r[i])
            s.append(g[i])
            s.append(b[i])
            s.append(255)
        ancho = size[0]
        alto = size[1]
        img=PIL.Image.new('RGB', (ancho,alto))
        for i in range(ancho):
            for j in range(alto):
                img.putpixel((i,j),(r[j*ancho+i],g[j*ancho+i],b[j*ancho+i]))
        img.save("./IMIAED/packages/imagenF.png")
    
        return s 

 
    