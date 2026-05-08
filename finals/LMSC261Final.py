from tkinter import *
from time import *

window = Tk()
window.title("Clock")

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb

def update():

    time_now = localtime()
    time_string = strftime('%H:%M:%S %p', time_now)
    
    seconds = time_now.tm_sec
    dynamic_color = rgb_to_hex((seconds * 4, 100, 150))
    
    time_label.config(text=time_string, background=dynamic_color)
    
    time_label.after(1000, update)

time_label = Label(window, 
                   font=('Papyrus', 100, 'bold'), 
                   foreground='White', 
                   padx=20, pady=20)
time_label.pack()

update()
window.mainloop()