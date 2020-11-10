# react-teams-graph-upload-as-pdf

## Summary
This SPFx webpart (or TeamsTab) enables a user to upload a supported () file type via drag and drop while the uploaded file will be converted as PDF.
In SharePoint context it uploads to the default drive (library) while in Teams context it uses the current channel as a Folder name in the default drive.
It uses the following capabilities (mostly) on behalf of Microsoft Graph:
* Use HTML5 drag and drop event handling
* Writing normal files smaller 4MB
* Retrieving files with format=pdf conversion

## react-teams-graph-upload-as-pdf in action
![Empty Drag&Drop zone](https://mmsharepoint.files.wordpress.com/2020/11/01emptywebpartzone-1.png)
![File upload via drag and drop](https://mmsharepoint.files.wordpress.com/2020/11/02dropafile-1.png)
![Progress](https://mmsharepoint.files.wordpress.com/2020/11/03progresscomponents.png)
![Result](https://mmsharepoint.files.wordpress.com/2020/11/04finalresult.png)

A detailed functionality and technical description can be found in the [author's blog post](https://mmsharepoint.wordpress.com/2020/11/10/a-simple-spfx-file-upload-by-dragdrop-including-pdf-conversion/)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
react-teams-graph-upload-as-pdf| Markus Moeller ([@moeller2_0](http://www.twitter.com/moeller2_0))

## Version history

Version|Date|Comments
-------|----|--------
1.0|November 10, 2020|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

## Features

This webpart illustrates the following concepts:

- Use HTML5 drag and drop event handling
- [Writing normal files smaller 4MB](https://docs.microsoft.com/en-us/graph/api/driveitem-put-content?view=graph-rest-1.0&tabs=http)
- Retrieving files with [format=pdf](https://docs.microsoft.com/en-us/graph/api/driveitem-get-content-format?view=graph-rest-1.0&tabs=http) conversion
- [FluentUI Progress Indicator](https://developer.microsoft.com/en-us/fluentui#/controls/web/progressindicator)

