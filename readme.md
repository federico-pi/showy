# Coding Challenge - App - React-Native

App built as a challenge to NewStore technical interview.

### User story
As a user I would like to search for TV show names so I can know more about the details of the TV show like summary, when it will be aired (if it’s still running), the average rating and also see a picture of the TV show.

---

## Summary

1. [Development](#development)
2. [Project](#project)
3. [Tests](#tests)

## Development

In order to develop on this project you need to have [yarn](https://yarnpkg.com/) installed.

After the clone of the project (via HTTPS or SSH, it's your choose), you can install the deps with:

```bash
$ yarn install && cd ios && pod install && cd ..
```

To run the project on a device or emulator, run:

```bash
$ yarn (android|ios) // based on the target os.
```

## Project

The project structure is based on a model that promotes components cleanliness and scalability.

### Project Structure and common folders

    - /__tests__ *-> tests run here*
    - /__mocks__ *-> mock dependencies and data*
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

## Tests

All tests are written using jest.

To execute tests, run:

```bash
$ yarn test
```

To override existing snapshots, run:

```bash
$ yarn test -u
```

To access all available scripts, run:

```bash
$ yarn scripts
```
