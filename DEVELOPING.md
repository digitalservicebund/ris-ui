# Development Notes

**Security note: Do not forget to run the `lefthook` setup below, including the setup of `talisman`. This ensures that secrets are caught before reaching the remote repository.**

## Git Hooks

The repository contains Git hooks which support

- preventing accidentally pushing secrets and sensitive information

### Git Hooks Setup

In order to make use of the repository's Git hooks,

- Install [`Lefthook`](https://github.com/evilmartians/lefthook)

needs to be installed, which, in turn, makes use of the following CLI tools:

- [`talisman`](https://thoughtworks.github.io/talisman/docs) - scans for secrets

Once these tools are available, install the hooks via

```bash
lefthook install
```
And now you’re set up to run the security checks before each commit.
