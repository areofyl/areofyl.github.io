# Why I use Gentoo Asahi

2026-06-15

I get asked this a lot so I figured I'd just write the whole story down. It's not that interesting honestly, it's mostly just me being frustrated with macOS and then stumbling into Linux, but here it is.

## macOS was fine until it wasn't

So I have an M1 MacBook Air with 8 gigs of RAM. For a while macOS was totally fine on it. It ran well, battery was good, no complaints. Then macOS 26 dropped and everything went downhill. RAM usage shot up to the point where just having a browser and a terminal open was using like 6 gigs. The whole machine started feeling sluggish and swap was going crazy. 8 gigs used to be enough and suddenly it wasn't, because Apple decided the OS itself needed half of it.

I tried the usual stuff. Closed apps, turned off background processes, all that. It helped a little but the base RAM usage of the OS was just too high now. I wasn't about to buy a new laptop because Apple made their software fatter, so I started looking at other options.

## Discovering Linux on Apple Silicon

I'd heard of Asahi Linux before but I always figured it was too experimental and probably broken. Turns out it had gotten way better than I expected. People were daily driving it on M1 machines and saying it worked fine. So I thought ok, let me try it.

I went with Fedora Asahi because it was the "recommended" option and it had a nice installer that held your hand through everything. And it did work. I had a desktop, I had a browser, things were functional. But I had absolutely no idea what I was doing.

## Being completely lost

I was basically a blind man doing a maze. I installed Hyprland because I saw it on Reddit and it looked cool, but I didn't understand any of the config. I was copy pasting stuff from other people's dotfiles without knowing what any of it did. When something broke I had no idea how to fix it. I didn't even really understand the difference between Wayland and X11 at first, I just knew Hyprland was "the cool one".

I spent a lot of time in that phase just googling error messages and hoping someone on a forum had the same problem. Sometimes they did and sometimes they didn't. It was frustrating but I was also learning stuff without realizing it. Like I didn't set out to learn how Linux audio works but when your speakers don't work you figure it out pretty fast.

## Outgrowing Fedora

I used Fedora Asahi for about 6 months and honestly it's a great distro. It works well, the Asahi integration is solid, and for most people it's probably the right choice. But after a while I started wanting more control over my system. Fedora makes a lot of decisions for you and that's the point, but I kept running into things where I wanted to change how something worked and the answer was always "that's not how Fedora does it" or there was some abstraction layer in the way.

DNF was slow, stuff would update and break my setup, and I couldn't really customize things at the level I wanted to. It's not that Fedora was bad, it just wasn't for me anymore. I felt like I was using someone else's system instead of my own. Everything was preconfigured and I was just poking at the edges of it.

## The Reddit post

Then I saw a Reddit post about someone running Gentoo Asahi on their M1 and my first reaction was "that's insane, why would anyone do that". But I kept reading and they were talking about how they picked every package, configured everything themselves, compiled their own kernel. And it sounded... kind of great actually?

Around the same time I needed DP alt mode (video out over USB-C) and the Fedora Asahi kernel didn't support it yet. Someone pointed me to the fairydust kernel. So I cloned it, configured it, ran `make`, and... it compiled. And it worked. I plugged in my monitor and it just showed up.

That was a huge moment for me. I always thought compiling a kernel was this terrifying expert-level thing that would definitely break your computer. But it was really just `make menuconfig`, pick some options, `make`, `make install`. It took a while to compile but it wasn't hard. After that I was like, ok if I can do this then Gentoo probably isn't as scary as I thought.

## Actually switching to Gentoo

So I backed up my stuff and installed Gentoo Asahi. The install process is way more involved than Fedora obviously. You're partitioning, extracting a stage3 tarball, chrooting, setting up portage, picking USE flags, compiling `@world`. It took me most of a day. But by the end of it I understood my system way better than I ever did on Fedora because I had to set up every piece of it myself.

The first boot into a working Gentoo system was really satisfying. Just a terminal, nothing else. I got to pick what went on from there. No desktop environment I didn't ask for, no services I didn't need, nothing.

## The window manager journey

I started with Sway because it was the obvious Wayland compositor choice and I already kinda knew how tiling worked from Hyprland. It was fine, it worked, but after about a week I found out about dwm and the whole suckless philosophy. The idea of configuring your software by editing C header files and recompiling it was weird to me at first but then I tried it and I loved it.

Since I was on Wayland and not X11, I went with dwl instead of dwm. Same concept but built on wlroots. You edit `config.h`, you run `make`, you get a binary that does exactly what you configured. No runtime config files, no lua scripts, no plugin system. Just C. If you want to change a keybind you change a line in a header file and recompile in two seconds.

That fit perfectly with how Gentoo already worked. The whole OS is "edit config, compile, done". dwl was just the same thing for the window manager. Suckless software and Gentoo are the same philosophy at different scales and once I realized that everything clicked.

## Now

And here I am :) Gentoo Asahi with dwl and the fairydust kernel on a MacBook Air. My RAM usage at idle is like 400 megs instead of 4 gigs. The battery life is actually better than macOS was giving me at the end. Everything is fast, I understand every piece of my system, and when something breaks I can fix it because I'm the one who set it up.

Looking back, the whole thing started because Apple made macOS too heavy for 8 gigs of RAM. Kind of funny that their decision to bloat their OS is what pushed me to learn all of this. No regrets though. This is the best my laptop has ever felt.

```
$ uname -r
6.18.10-asahi-fairydust-g61b6e714dd19
```
