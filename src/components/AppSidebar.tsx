import {
  Text,
  Aside,
  MediaQuery,
  useMantineColorScheme,
  Stack,
  Group,
  UnstyledButton,
  createStyles
} from "@mantine/core";
import { IconSun, IconMoonStars, IconUser } from "@tabler/icons";
import { ThemeIcon } from "@mantine/core";
import resourceBundle from "../../public/resources/bundle/resourceBundle.json";

const useStyles = createStyles((theme) => ({
  rtvMenuItem: {
    letterSpacing: "0.12rem",
    padding: "1rem",
    "&:hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.dark[1]
    }
  }
}));

const AppSidebar = ({ opened }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const dark = colorScheme === "dark";
  let themeSwitchLabel = resourceBundle.button.label.darkMode;
  let themeSwitchTitle = resourceBundle.button.title.darkMode;
  if (dark) {
    themeSwitchLabel = resourceBundle.button.label.lightMode;
    themeSwitchTitle = resourceBundle.button.title.lightMode;
  }

  return (
    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
      <Aside hidden={!opened} p="md" pl="xl">
        <Stack spacing="s" align="stretch">
          <UnstyledButton
            title={resourceBundle.button.title.loginSignUp}
            className={classes.rtvMenuItem}
          >
            <Group>
              <ThemeIcon variant="light" size="md">
                <IconUser size={18} />
              </ThemeIcon>
              <Text>{resourceBundle.button.label.loginSignUp}</Text>
            </Group>
          </UnstyledButton>
          <UnstyledButton
            title={themeSwitchTitle}
            className={classes.rtvMenuItem}
          >
            <Group onClick={() => toggleColorScheme()}>
              <ThemeIcon variant="light" title="Toggle color scheme">
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </ThemeIcon>
              <Text>{themeSwitchLabel}</Text>
            </Group>
          </UnstyledButton>
        </Stack>
      </Aside>
    </MediaQuery>
  );
};

export default AppSidebar;
