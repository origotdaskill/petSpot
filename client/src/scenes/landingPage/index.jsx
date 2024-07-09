import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Pet Profiles",
    description:
      "Create detailed profiles for each of your pets. Share their photos and unique personalities with the world. Let your pets shine and connect with other pets and their owners who share similar interests.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Pet Feed",
    description:
      "Stay updated with a personalized feed featuring posts from your favorite pets and friends. Adorable pictures and helpful tips, your feed will always keep you entertained and informed.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Community Groups",
    description:
      "Join various community groups based on pet species, breeds, interests, or locations. Whether you have a playful puppy, a curious cat, or an exotic bird, there's a group for everyone. Share experiences, seek advice, and participate in engaging discussions with fellow pet enthusiasts.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Events & Meetups",
    description:
      "Never miss out on pet-related events and meetups in your area. From pet adoption fairs to training workshops and social gatherings, find and attend events that match your interests. Create lasting memories with your pets and make new friends along the way.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Pet Safety Feed",
    description:
      "Stay informed and keep your pets safe with real-time safety alerts. Post and receive feeds about lost pets in your area, pet food recalls, and other important news. Pet Spot ensures you have the information you need to protect your beloved companions.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Book Playdates",
    description:
      "Book a playdates for your pets with other members. Use feeds to let your pets interact, play, and make new friends, no matter the distance. It's a fun way to keep them socialized and entertained.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            About
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Welcome to Pet Spot, the ultimate social media platform for pet
            lovers! Discover, share, and celebrate the joy of having pets with
            like-minded individuals. Here are the six standout features that
            make Pet Spot the perfect community for you and your furry friends.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
