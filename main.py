basic.clear_screen()
basic.show_string("Hide-ball")
location = 2
dd = 0
dd2 = 0
led.plot(2, 4)

def on_forever():
    global location
    if input.button_is_pressed(Button.A) and location > 0:
        led.toggle(location, 4)
        location += -1
        led.plot(location, 4)
        basic.pause(100)
    elif input.button_is_pressed(Button.B) and location < 4:
        led.toggle(location, 4)
        location += 1
        led.plot(location, 4)
        basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    global dd
    dd = randint(0, 4)
    for index1 in range(4):
        led.plot(dd, index1)
        basic.pause(1000)
        led.toggle(dd, index1)
    if dd == location:
        while True:
            basic.show_icon(IconNames.NO)
basic.forever(on_forever2)

def on_forever3():
    global dd2
    if dd == dd2:
        dd2 = randint(0, 4)
    for index2 in range(4):
        led.plot(dd2, index2)
        basic.pause(1000)
        led.toggle(dd2, index2)
    if dd2 == location:
        while True:
            basic.show_icon(IconNames.NO)
basic.forever(on_forever3)
