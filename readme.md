# NewStore Challenge - App - React-Native

App built as a challenge to NewStore technical interview

---

## Summary

1. [Development](#development)
2. [Project](#project)

## Development

In order to develop on this project you need to have [yarn](https://yarnpkg.com/) installed.

After the clone of the project (via HTTPS or SSH, it's your choose), you need to install the deps with:

```bash
$ yarn install
```

To run the project on a device/emulator while developing, run:

```bash
$ yarn (android|ios) // based on the target os.
```

If you want to know all the available scripts and what they do, run:

```bash
$ yarn scripts
```

### Project Structure and common folders

    - /components *-> react components*
    - /models *-> ts interfaces*
    - /api *-> all services that take care of the communication between the app and an API*
    - /assets *-> global static assets such as images, svgs, logos, etc.*
    - /core *-> entry-point of app. contains core components such as auth, update, onboarding, etc*
    - /features *-> specific features. each doent's share its components and its logic.*
    - /helpers *-> utilities, helpers, constants, and such*
    - /hooks *-> react custom hooks*
    - /shared *-> global shared and reusable components. layout, navigation, form, buttons.*
    - /styles *-> stylesheets, css*
