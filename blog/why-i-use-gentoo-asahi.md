# Why I use Gentoo Asahi

2026-06-15

People keep asking so here's the whole thing.

## 9 months ago

macOS 26 came out and my laptop got *really* unusable. Browser and terminal open and I'm already sitting at 6 gigs of RAM, swap going crazy. I have an M1 Air with 8 gigs and it used to be plenty, but suddenly it became not enough? I wasn't buying a new laptop because Apple decided the OS needed to be fatter, so I started looking at alternatives.

## Asahi

I'd heard of it but assumed it was broken and experimental. Looked more carefully and people were actually daily driving it, so I tried Fedora Asahi. Nice installer, held my hand through everything, I had a desktop in an hour and it worked.

I had absolutely no idea what I was doing though.

## The Hyprland phase

I put Hyprland on because I saw an *incredibly* cool screenshot of someone using Hyprland and Asahi Reddit ([here's](https://www.reddit.com/r/AsahiLinux/comments/1jxdtp5/asahi_linux_with_hyprland_is_the_sht/) the link!). I was copying random peoples dotfiles without understanding a single line. Something breaks? No idea how to fix it :) I didn't even know what Wayland was vs X11, I just knew Hyprland was the fancy thing!

Spent months googling error messages and hoping someone had the exact same problem. Sometimes they did. Sometimes I'd find a post from 2019 about a completely different distro and try to make it work anyway.

But I was learning stuff without realizing it. I didn't choose to learn how PipeWire works but when your speakers stop making sound you figure it out. Same with fonts, same with environment variables. You learn Linux by having things break and being too stubborn to give up.

## Getting comfortable with Fedora

After a few months I knew my way around and Fedora was working well. I used it for about 6 months total and it's a great distro! The Asahi integration is **solid** and updates just worked!

But the more I learned the more I wanted to go deeper. I kept hitting things where the answer was "that's not how Fedora does it" or there was some abstraction layer I couldn't get past. dnf wasn't slow... but it wasn't fast enough for my liking. Lot of packages just weren't in the repos, which made me very familiar with building from source (foreshadowing?). I started feeling like I was on someone else's personalized system rather than *mine*.

## Gentoo

I saw someone on Reddit running Gentoo Asahi on their M1 and my first reaction was that's insane and stupid why would anyone do that. But they were talking about picking every single package, configuring everything themselves, compiling their own kernel, never having packages that weren't in the repos(!). Knowing exactly what's on your computer because you put it there yourself - something that I had been seeking since leaving macOS.

Around the same time I needed DP alt mode for an external monitor and the Fedora kernel didn't support it. Someone pointed me to the fairydust kernel, so I decided to clone it, configured it a bit, ran make, went and did some random work, came back, installed it, rebooted, plugged in my monitor and... it didn't work. But then I did that whole thing again with different configuration and low and behold - the monitor worked!

I always thought compiling a kernel was this terrifying thing only kernel developers did. It was just configure, make, wait, install, and its done. After that I figured Gentoo was probably not as scary or dumb as I thought.

## Actually switching

The Gentoo install was *way* more involved than Fedora. Partitioning manually, downloading a stage3 tarball, chrooting in, setting up portage, picking USE flags, editing make.conf, compiling @world. Took most of a day.

But at no point was I actually stuck. Every step made sense. After 6 months of Linux I understood enough to follow the handbook. It wasn't easy but it was just methodical. Do this, then this, then this.

First boot was a terminal blinking at me. No desktop, no file manager, nothing. Just a cursor.

## The window manager journey

Started with Sway because it was the obvious choice and I knew tiling from Hyprland. Worked fine-ish.

Then I found dwm and the suckless philosophy. Configuring software by editing C header files and recompiling sounded weird until I tried it. You edit config.h, run make, and you get a binary that does exactly what you told it to. No runtime config files, no plugins, no lua scripts.

Since I was on Wayland I went with dwl instead. Same idea, built on wlroots. It fit perfectly with Gentoo - the whole OS is "edit config, compile, done" and now my window manager worked the same way.

## Now

Gentoo Asahi with dwl and the fairydust kernel on a MacBook Air. RAM at idle is around 400 megs instead of 4 gigs(!). Battery is better than macOS was at the end. Everything is fast.

The best part is when something breaks I can fix it because I'm the one who set it up. I can just look at the config, look at the logs, figure it out.

The whole thing started because Apple made macOS too heavy for 8 gigs of RAM. Going from not knowing what a terminal was to compiling my own kernel in 8 months was a weird ride.

```
$ uname -r
6.18.10-asahi-fairydust-g61b6e714dd19
```
