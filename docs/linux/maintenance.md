# Maintenance

## Update

```shell:no-line-numbers
sudo apt upgrade && apt update -y
```

::: tip

* `apt` based operating systems are for e.g. Debian, Ubuntu, etc.
* `yum` based operating systems are for e.g. CentOS, OracleLinux, etc.
:::

:::: code-group
::: code-group-item APT

```shell:no-line-numbers
sudo apt upgrade
sudo apt update -y
```

:::
::: code-group-item YUM

```shell:no-line-numbers
sudo yum check-update
sudo yum update -y
```

:::
::::
