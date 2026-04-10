import tkinter as tk
root = tk.Tk()
root.geometry("400x400")

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb

root.config(background=(rgb_to_hex((100, 200, 150))))

def labubu(value):
    root.config(background=(rgb_to_hex((int(value), 200, int(value)))))


slider = tk.Scale(root, command=labubu)
slider.pack()

root.mainloop()














root.mainloop()
