# commands

[![Build Status](https://travis-ci.org/com.grio/commands.svg?branch=master)](https://travis-ci.org/com.grio/commands)
[![Slack Status](https://join.atomist.com/badge.svg)](https://join.atomist.com)

This [Rug][rug] archive contains Atomist commands for Grio

[rug]: http://docs.atomist.com/

After you create a project with this generator, you may enjoy the compatible editors in [com.grio:rug-editors](https://github.com/com.grio/rug-editors).

## Rugs

### AddReadme

The AddReadme editor adds a GitHub-like `README.md` to a project.

#### Prerequisites

Before running this editor, you must have the following prerequisites
satisfied.

*   A source code repository

#### Parameters

To run this editor, you must supply the following parameters.

Name | Required | Default | Description
-----|----------|---------|------------
`project_name` | Yes | | A valid GitHub repository name.
`description` | No | My new project | A brief description of the project between 1 and 100 characters.

[semver]: http://semver.org

#### Running

Run it as follows:

```
$ cd to/the/repo
$ rug edit com.grio:commands:AddReadme \
    project_name=fun-project \
    description='A project that needs a README'
```

This will create a simple `README.md` file in the top-level directory
of the source code repository.  If you are happy with the change,
commit the changes.

## Support

General support questions should be discussed in the `#support`
channel on our community Slack team
at [atomist-community.slack.com][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/com.grio/commands/issues

## Development

You can build, test, and install the project locally with
the [Rug CLI][cli].

[cli]: https://github.com/atomist/rug-cli

```
$ rug test
$ rug install
```

To create a new release of the project, simply push a tag of the form
`M.N.P` where `M`, `N`, and `P` are integers that form the next
appropriate [semantic version][semver] for release.  For example:

[semver]: http://semver.org

```
$ git tag -a 1.2.3
```

The Travis CI build (see badge at the top of this page) will
automatically create a GitHub release using the tag name for the
release and the comment provided on the annotated tag as the contents
of the release notes.  It will also automatically upload the needed
artifacts.

---
Created by [Atomist][atomist].
Need Help?  [Join our Slack team][slack].

[atomist]: https://www.atomist.com/
[slack]: https://join.atomist.com/
