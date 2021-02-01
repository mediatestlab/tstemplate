# React Native TypeScript template

## Purpose

Intention of this template is to start new RN/TS projects faster.
Therefore there are several commonly used repositories pre-installed into this template. These packages are of course personal choices that has proven to be useful in my workflow.\
\- ATA

## Todo

- [x] basic TypeScript template with typesync
- [x] Styled Components: CSS support for React Native
- [x] [React Native Vector Icons](#react-native-vector-icons)
- [x] Full screen and [responsive dimensions](#responsive-dimensions)
- [x] [Orientation Locker](#responsive-dimensions)
- [ ] React Navigation
- [ ] Async Storage: for device/user specific settings
- [ ] Internationalization (i18n) and localization
- [ ] Database integration (Firebase)

## OS support

This version is for now **Android** only. For **iOS** version you need Mac device with _Xcode_ installed.
How ever all instructions (if needed) are provided via link in repository information section (Mac installation).

---

### React Native Vector Icons

[Mac installation](https://www.npmjs.com/package/react-native-vector-icons#option-manually)

---

### Responsive dimensions

Previously at least Android device rotation detection failed frequently. Despite two packages, **React Native Orientation Locker** and **React Native Responsive Dimensions**, installed you couldn't be sure that rotation gets detected. Fortunately **useWindowDimensions** hook in React-Native fixed this issue. **RN Orientation Locker** is still needed if you want to prevent user from changing orientation.

---

### Notes to myself

- Redux isn't always needed so I'll make another repository for it.

---

## License

[MIT License](https://choosealicense.com/licenses/mit/)\
&copy; 2021, ATA (ata@mediatestlab.com)\
MediaTestLab ([mediatestlab.com](http://www.mediatestlab.com/))
