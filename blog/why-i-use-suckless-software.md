# Why I use suckless software

2026-05-15

I use dwl, which is basically dwm but for Wayland. My text editor sef is built the same way. Most of my tools follow the same pattern. People ask me why I use this stuff when there are "better" options with more features, so here's my answer.

## What suckless software actually is

If you haven't heard of it, suckless is a group of developers who make really small programs. dwm is a window manager that's like 2000 lines of C. st is a terminal emulator. dmenu is a menu. They're all tiny and they all work the same way: you configure them by editing a C header file called `config.h` and recompiling.

There's no config file you edit at runtime. No plugin system. No lua scripting. You literally change a line of C code and run `make`. Your config IS the program.

## Why that's actually great

The first time I heard about this I thought it was the dumbest thing ever. Why would I recompile my window manager to change a keybind? That sounds terrible. But then I actually tried it.

Changing a keybind in dwl is: open `config.h`, find the keybind line, change it, run `make`. That takes maybe 5 seconds. Compare that to something like Hyprland where you edit a config file, save it, and hope the hot reload picks it up correctly. Or something like i3 where you have to learn a whole config language.

With suckless stuff there's no config language to learn. It's just C. A keybind is a struct with a modifier, a key, and a function pointer. You can read it and immediately understand what it does. There's nothing to parse, nothing to interpret, no syntax to get wrong.

## You understand the whole thing

dwl is small enough that you can actually read the whole source code. I have. It's not easy but it's possible. Try doing that with KDE or GNOME or even something like Hyprland. You can't, there's just too much code.

When something breaks in dwl I can grep through the source and usually figure out what's going on. When something broke in Hyprland I had no idea where to even start looking. The codebase was huge and I didn't understand any of it.

There's something really nice about using software that you can hold in your head. You know what it does because you've read it. You know what it doesn't do because there's not enough code to hide anything.

## The config.h philosophy

I build my own stuff this way now too. My music player hum uses `config.h` for keybinds and settings. Want different keys? Change the table, recompile, done. No need to write a parser for some config format. No need to handle syntax errors in a config file. No need to reload config at runtime. Just compile it in.

This sounds inflexible but in practice you change your config like once a month after the initial setup. And when you do it takes 2 seconds to recompile. The tradeoff is totally worth it for how much simpler the code gets.

## It's not for everyone

I get that this isn't for most people. If you want a system that works out of the box and has a settings GUI, suckless software is not that. You have to be comfortable editing C, compiling stuff, and reading source code. That's a real barrier.

But for me it's perfect. I already write C, I already use Gentoo where the whole OS works by "edit config, compile, done", and I like understanding my tools. Suckless software is just the natural endpoint of wanting to know exactly what your computer is doing :)

## What I actually use

- **dwl** for my window manager (dwm for Wayland)
- **hum** for music (TUI player I made, config.h style)
- **sef** for simple text editing (my own editor, same approach)
- My entire machine! (Gentoo is basically the most suckless OS)

The suckless website has a lot of other stuff too if you're curious. Most of it is good, some of it is a bit too minimal even for me. But the core idea of small programs you can understand is something I think more software should aim for.
