# RogersCamView

**A simple, fast, surveillance client (RTSP/JPG/PNG).**

### Tested On: Win64 / OSX Darwin (MAC) / Linux / RaspberryPI

I wrote this because I have a monitor in my living room which I use to view my perimeter. I originally had an RTSP viewer which was decoding four h264 streams, it paused and crashed and the Intel Compute Stick running the viewer would overheat.

I switched to a raspberry pi 3b+ and I have had the same problem.  Decoding 4 1080p h264 streams over wifi is CPU and network intensive.  The streams would pause for 3-5 seconds and it was just not great.

This application is designed to pull a jpeg/png via API call from surveillance cams directly or DVR systems. Using a one second update time, it completely solved all my problems and is far more responsive to my previous solutions.


### Raspberry PI 
1. Download the prebuilt release [https://github.com/RamboRogers/rogerscamview/releases/download/v1.2.0/RogersCamView-linux-arm-RaspberryPI.7z]
2. Extract using p7zip, you might need to apk install p7zip. 
  `7zr e RogersCamView-linux-arm-RaspberryPI.7z`
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

Since Ubiquiti enabled anonymous snaps on the cameras it makes it much easier to set this up.  Keep in mind if your camera ips are changing that they should be set to static or you should use a dhcp reservation to stop the shifting.

Use your cameras IP like this `http://192.168.1.3/snap.jpeg` and you should see a snap in your browser.  Use these URLs to populate the URLs for this system.

## Generate the URLs from your UBNT DVR
Here I will spell out how to do this on a UBNT DVR system.

1. Login to your DVR Systems HTTP interface.
2. Click on a camera and view the RTSP service to find the Camera ID and remove the _1 off the end. `rtsp://192.168.1.6:7447/5b8c2a92c2dc8705915ed88f_1`
_CAMERAID:_ **5b8c2a92c2dc8705915ed88f**
3. Click users in the DVR, then your account, then API access, enable API access and copy your key.
4. Use those two strings and shape them into this example to get the JPG stream.
`http://192.168.1.6:7080/api/2.0/snapshot/camera/CAMERAID?force=true&apiKey=YOURAPIKEY`
5. Fin.

## Thanks

- [matt@matthewrogers.org]

## License

[GNU GPL v3](LICENSE.md)
