# Coding challenge - React-Native

This code was originally intended as a challenge to NewStore technical interview, it passed.

### User story
As a user I would like to search for TV show names so I can know more about the details of the TV show like summary, when it will be aired (if it’s still running), the average rating and also see a picture of the TV show.

---

## Summary

1. [Development](#development)
2. [Project](#project)
3. [Tests](#tests)
4. [Notes](#notes)

## Development

In order to develop on this project you need to have [yarn](https://yarnpkg.com/) installed.

After cloning the project (via HTTPS or SSH), you can install the deps with:

```zsh
$ yarn i
$ yarn i:pods
```

To run the project on a device/emulator while developing, run:

```zsh
$ yarn (android|ios) // based on the target os
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

```zsh
$ yarn t
```

To override existing snapshots, run:

```zsh
$ yarn t:u
```

## Notes

To access all available scripts, run:

```zsh
$ yarn run
```
