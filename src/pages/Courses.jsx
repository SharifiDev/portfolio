import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
  Divider,
  Chip,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SchoolRounded } from "@mui/icons-material";

import { courses } from "../constants/courses";

const Courses = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme()
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
        backgroundColor:theme.palette.mode == 'dark'?'#111827':'#F3F4F6'
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Slide
          direction="down"
          in={loading}
          style={{
            transitionDelay: loading ? "100ms" : "0ms",
          }}
        >
          <Divider
            textAlign="center"
            sx={{
              "&::before, &::after": {
                borderColor: "primary.main",
              },
              mb: 3,
            }}
          >
            <Chip
              icon={<SchoolRounded />}
              color="primary"
              label={
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ textAlign: "center" }}
                >
                  نمونه کارهای من
                </Typography>
              }
              sx={{ p: 3 }}
            />
          </Divider>
        </Slide>

        <Grid
          container
          sx={{ mx: 3, display: "flex", justifyContent: "center" }}
        >
          {courses.map((course, index) => (
            <Grid
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{ px: 2, mb: 2 }}
            >
              <Slide
                direction="up"
                in={loading}
                style={{
                  transitionDelay: loading ? `${index + 3}99ms` : "0ms",
                }}
              >
                <Card
                  sx={{
                    maxWidth:495,
                    backgroundColor: "steelblue",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"

                      image={course.image}
                      alt={course.title}
                    />

                  </CardActionArea>
                  <CardActions sx={{background:theme.palette.mode == 'dark'? '#242A38':'white',}}>
                    <Button
                      href={course.link}
                      size="small"
                      color='text.primary'
                      target="_blank"
                    >
                      اطلاعات بیشتر
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Courses;
