# RogersCamView

**A simple, fast, surveillance client.**

I wrote this because I have a monitor in my living room which I use to view my perimeter. I originally had an RTSP viewer which was decoding four h264 streams, it paused and crashed and the Intel Compute Stick running the viewer would overheat.

I switched to a raspberry pi 3b+ and I have had the same problem.  Decoding 4 1080p h264 streams over wifi is CPU and network intensive.  The streams would pause for 3-5 seconds and it was just not great.

This application is designed to pull a jpeg/png via API call from surveillance cams or DVR systems. Using a one second update time, it completely solved all my problems and is far more responsive to my previous solutions.

## To Use

Run the application.

## Trouble Shooting

1. If for some reason it won't work. Delete the config file which is in your userData folder.
2. Since this is built with electronjs and nodejs this will probably do more than jpegs or pngs. 

## Thanks

- [matt@matthewrogers.org]

## License

[GNU GPL v3](LICENSE.md)
