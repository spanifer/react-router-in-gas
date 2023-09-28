# react-router-in-gas
Apps script projects boilerplate including react and router in you local environment with clasp and packaged with parcel.

## All thanks to [Get __it Done!](https://www.youtube.com/@get__itdone7958) in [this video](https://www.youtube.com/watch?v=aq2B02DuCs0)
This google apps script boilerplate follow his solution. Make sure to check it out for an in depth guide.

## Install
1. Clone this repo
2. Install dependencies `npm i`
3. Review `package.json` scripts to login and create/clone apps script project. (follow google directions if it first time scripts access)
4. Alternatively run any [clasp commands](https://github.com/google/clasp#commands) with `npm run gclasp -- <args>`
5. Copy `dist/.clasp.json` to the root folder. Also make sure to `npm run gpull` if you cloned your ~gas~ project.

## Run
Start and build you project with `npm run start` and in a new/split terminal run `npm run gstart` to auto push updates to google.
