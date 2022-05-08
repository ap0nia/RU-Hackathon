# QuickReview (QR): RU Hacks Project :)

## Introduction
Imagine you are in a school library, you are likely in a situation where you need to decide which book you want to read. However, it would be too much of a pain to go on the closest computer to look for the reviews, and you will probably wonder why there isn't a way to access the book info and reviews faster. Hence the birth of the QuickReview web app, or QR. 

## What it does
QuickReview is a web app that generates the QR codes and allows the owners to scan the codes and put basic information about the object (e.g. name and description), and other users to scan the QR codes to not only get the information about the objects but also be able to rate them and write reviews, so that other people can make better decisions when it comes to making choices.

## Technology used
Sveltekit, OpenScreen API, Auth0 API, Firebase, Stylus, TypeScript, Pug

## Challenges
When working with Auth0, we implemented the Auth0 API in the frontend, that caused some troubles for us since sometimes some of the variables on the page might flash “undefined” and changed to the real value in a second or so. Another challenge we ran into is that when using the Firebase Realtime Database, we had a little bit of trouble updating the list of assetIDs we have, and it was due to the way that we retrieved the data from the database. That is, instead of using the get() function, we used onValue() to create a listener, which caused the problem.
One non-technical challenge we ran into was the limit of the time. We actually haven't started brainstorming until three hours into the hackathon, and we found ourselves running short on time on the last day. So we pulled an all-nighter to make the app work, and we all know it will be worth it no matter the result, since we really grew a lot by learning new frameworks we have little experience of as well as different APIs provided by the sponsors.

## Future Plans
Add statistics of a QR code being scanned through tools like Google Analytics. We can also let creators understand how their QR code is being utilized. Besides, we can do a better job at promoting the QuickReview app with the target users.

## How to use this project
The web app is available on [QuickReview](https://quick-review.vercel.app/)
To use the app, generate a QR code by logging into the app, then scan the QR code to input related information

## License
MIT License

Copyright (c) 2022 QuickReview(QR) Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
