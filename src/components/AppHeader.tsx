import {
  ActionIcon,
  useMantineColorScheme,
  Header,
  Burger,
  Text,
  useMantineTheme,
  Group,
  createStyles
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoonStars, IconSearch, IconUser } from "@tabler/icons";
import RB from "../../public/resources/bundle/resourceBundle.json";

const useStyles = createStyles((theme) => ({
  headerDiv: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  }
}));

const AppHeader = ({ asideOpened, setAsideOpened }) => {
  const mantineTheme = useMantineTheme();
  console.log(mantineTheme);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const largerThanXSmall = useMediaQuery(
    "(max-width: " + mantineTheme.breakpoints.xs + "px)"
  );
  const { classes } = useStyles();

  return (
    <Header height={70} p="sm" className="rtv-header" pl="lg">
      <div className={classes.headerDiv}>
        {largerThanXSmall && (
          <Burger
            opened={asideOpened}
            onClick={() => setAsideOpened((o) => !o)}
            size="sm"
            color={mantineTheme.colors.gray[6]}
            mr="xl"
          />
        )}

        <Text
          sx={{
            fontFamily: mantineTheme.other.logoFontFamily,
            fontWeight: "bold",
            fontSize: "2.6rem",
            letterSpacing: "0.4rem",
            cursor: "pointer"
          }}
          // variant="gradient"
          // gradient={{ from: mantineTheme.colors.dark[2], to: mantineTheme.colors.dark[7], deg: 45 }}
          color={
            dark ? mantineTheme.colors.dark[2] : mantineTheme.colors.dark[7]
          }
          title={RB.logo.title.appLogo}
        >
          {RB.logo.label.appLogo}
        </Text>
        <Group ml="auto" spacing="sm">
          {!largerThanXSmall && (
            <ActionIcon
              variant="default"
              // onClick={() => toggleColorScheme()}
              title="Search for any movie, tv series, anime, etc"
            >
              <IconUser size={18} />
            </ActionIcon>
          )}

          {!largerThanXSmall && (
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          )}
          <ActionIcon
            variant="default"
            // onClick={() => toggleColorScheme()}
            title="Search for any movie, tv series, anime, etc"
          >
            <IconSearch size={18} />
          </ActionIcon>
        </Group>
      </div>
    </Header>
  );
};

export default AppHeader;
