# RogersCamView

**A simple, fast, surveillance client (Ubiquiti UBNT Cameras).**

### Tested On: Win64 / OSX Darwin (MAC) / Linux / RaspberryPI

I wrote this because I have a monitor in my living room which I use to view my perimeter. I originally had an RTSP viewer which was decoding four h264 streams, it paused and crashed and the Intel Compute Stick running the viewer would overheat.

I switched to a raspberry pi 3b+ and I have had the same problem.  Decoding 4 1080p h264 streams over wifi is CPU and network intensive.  The streams would pause for 3-5 seconds and it was just not great.

This application is designed to pull a jpeg/png via API call from UBNT surveillance cams directly. Using a one second update time, it completely solved all my problems and is far more responsive to my previous solutions.


### Raspberry PI 
1. Download the prebuilt release [https://github.com/RamboRogers/rogerscamview/releases/download/1.3/RogersCamView-linux-arm-RaspberryPI.zip]
2. Extract using unzip.  
  `unzip RogersCamView-linux-arm-RaspberryPI.7z`
3. Then `chmod +x RogersCamView` to make it executable.
4. Then execute or click on it `./RogersCamView`
>NOTE: The raspberry PI needs to use electron version 3.0.13, if you want to build from source you need to adjust the package.json for this.

## To Use

1. Run the application.
2. Set the URLs and refresh rate.

![config](https://github.com/RamboRogers/rogerscamview/blob/master/images/config.png)

3. View cameras

![cameras](https://github.com/RamboRogers/rogerscamview/blob/master/images/cams.png)

## Trouble Shooting

1. If for some reason it won't work. Delete the config file which is in your userData folder.
2. Since this is built with electronjs and nodejs this will probably do more than jpegs or pngs.

## Use Anonymous Snaps

Since Ubiquiti enabled anonymous snaps on the cameras I've coded out the DVR support. Anonymous snaps are faster and easier to configure.

Use your cameras IP like this `http://192.168.1.3/snap.jpeg` and you should see a snap in your browser.  Use these URLs to populate the URLs for this system.


## Thanks

- [matt@matthewrogers.org]

## License

[GNU GPL v3](LICENSE.md)
