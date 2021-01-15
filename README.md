# Whaler completion plugin

This plugin generate completion for whaler.

## Install

```sh
whaler plugins:install whaler-completion-plugin
```

## Bash

Make sure bash completion is installed.

### Linux

On a current Linux OS (in a non-minimal installation), bash completion should be available.

```sh
sudo apt-get install bash-completion
```

### Mac OS

Install with `brew` install bash-completion.

```sh
brew install bash-completion
```

Add the following to your `~/.bash_profile`:

```
if [ -f $(brew --prefix)/etc/bash_completion ]; then
. $(brew --prefix)/etc/bash_completion
fi
```

If you’re using `MacPorts` instead of `brew`, use the following steps instead:

```sh
sudo port install bash-completion
```

Add the following lines to `~/.bash_profile`:

```
if [ -f /opt/local/etc/profile.d/bash_completion.sh ]; then
    . /opt/local/etc/profile.d/bash_completion.sh
fi
```

> **NB!** You can source your `~/.bash_profile` or launch a new terminal to utilize completion.

## Usage

```sh
sudo sh -c 'echo | whaler completion > /etc/bash_completion.d/whaler'
```

> **NB!** Place the completion script in `/usr/local/etc/bash_completion.d/whaler` on a Mac OS.

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```