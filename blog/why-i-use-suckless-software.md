# Why I use suckless software

2026-05-15

I use dwl (dwm for Wayland), my editor sef is built the same way, hum is built the same way, basically everything I make follows this pattern now. People ask me why so here goes.

## What even is suckless

Suckless is a group of devs who make really small programs. dwm is a window manager in like 2000 lines of C. st is a terminal. dmenu is a menu. They're all tiny and they all work the same way: you edit a C header file called `config.h` and recompile.

No config files. No plugins. No lua. You change a line of C and run `make`. Your config IS the program.

First time I heard about this I thought it was the dumbest idea ever. Recompile my window manager to change a keybind?? That sounds so annoying why would anyone do this.

Then I tried it lol.

## Ok it's actually great

Changing a keybind in dwl: open `config.h`, find the line, change it, `make`. That's it. Takes like 5 seconds.

Compare that to Hyprland where you edit a config file, save it, hope the hot reload picks it up correctly, and if it doesn't you gotta figure out the syntax error in hyprland.conf. Or i3 where you have to learn a whole config language. Or KDE where you click through 47 menus to find the one setting you want.

With suckless stuff it's just C. A keybind is literally a struct with a modifier, a key, and a function pointer. You look at it and you immediately know what it does. Nothing to parse, nothing to interpret, no special syntax. If you can read C you can read the config.

## You can read the whole thing

This is the part that really got me. dwl is small enough that you can actually sit down and read the entire source code. I've done it. It took a while but I've read every line. Try doing that with GNOME or KDE or even Hyprland. You can't, there's just way too much going on.

When something breaks in dwl I can grep through the source and usually figure out what's happening pretty quick. When stuff broke in Hyprland I would stare at the error message and have absolutely no idea where to even start looking. The codebase was massive and I understood maybe 5% of it.

There's something really cool about using software you can hold in your head. Like you KNOW what it does because you've read it. You KNOW what it doesn't do because there isn't enough code to hide anything in. It's a great feeling.

## I build everything this way now

Started with dwl and then realized this is just how I want all my software to work. So my music player hum uses `config.h` for keybinds and settings. My editor sef does too. Want different keys? Change the table, recompile, done.

Sounds super inflexible right? But think about it. How often do you actually change your keybinds? After the first week of setup, maybe once a month. And when you do it takes 2 seconds to recompile. In exchange you never have to write a config parser. You never have to handle config syntax errors. You never have to deal with runtime config reloading bugs. Just compile it in and forget about it.

I'll take that tradeoff every time.

## Yeah it's not for everyone

If you want stuff that works out of the box with a settings GUI and you never want to touch a terminal, suckless software is absolutely not for you and that's fine. You have to be comfortable editing C and compiling things and reading source code. That's a real barrier.

But I already write C all day. I already use Gentoo where the entire OS is "edit config, compile, done". I like knowing how my tools work. Suckless is just the logical endpoint of all of that :)

## What I actually use

- **dwl** for my window manager (dwm for Wayland)
- **hum** for music (TUI player I made, config.h style)
- **sef** for simple text editing (my own editor, same approach)
- My entire machine! (Gentoo is basically the most suckless OS)

Suckless.org has a bunch of other stuff too if you're curious. Most of it is good, some of it is honestly a bit too minimal even for me lol. But the core idea of small programs you can actually understand and hold in your head is something I wish more software aimed for.
