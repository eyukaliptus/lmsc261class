from tkinter import *
from time import *

window = Tk()

def update():
    time_string = strftime('%H:%M:%S %p')
    time_label.config(text=time_string)

    time_label.after(1000, update)
            
def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb
time_label = Label(window, font=('calibri', 40, 'bold'), background=(rgb_to_hex((100, 200, 150))), foreground='white')
def color(value):
    scaled = int(value * 2)
    time_label.config(background=(rgb_to_hex((scaled, 200 , scaled))))

time_label.pack()
slider = Scale(window, command=color)
slider.pack()

update()

window.mainloop()