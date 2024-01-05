import React from "react";
import { Box, Paper, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import TextField from "@mui/material/TextField";

export default function Memories() {
  return (
    <Box sx={{ p: 1, m: 3 }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={5} sx={{ height: 85 }}>
            <Grid container>
              <Grid
                item
                
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h1 style={{}}>MEMORIES</h1>

                  <Button
                    sx={{
                      backgroundColor: "rgb(214, 45, 127) ",
                      color: "white",
                    }}
                  >
                    Logout
                  </Button>
                </div>
              </Grid>
              <Grid item>
                <Button />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ maxWidth: "100%", maxHeight: "", backgroundColor: "" }}
      >
        <Grid
          item
          sx={{
            maxWidth: "70%",
            backgroundColor: "",
            height: "100%",
            display: "",
            flexDirection: "",
          }}
        >
          <Grid container sx={{ backgroundColor: "" }}>
            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1575096644764-7219277185bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Switerzland
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1547131303-543b40443e96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN3aXR6ZXJsYW5kJTIwd2ludGVyfGVufDB8fDB8fHww"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Antarctica
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Switzerland Valley
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZL4DRKv3TTQMqz_LY6JH1QzJ-53Z10jSuFg&usqp=CAU"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Spain
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwz7DFRZP-gQSmgf8iinjQW-oQuOdANGCwOEW5eRQupcNoeuPbrKbbWupc0cq6DiFeGU&usqp=CAU"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Europe
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/id/1508305542/photo/wide-angle-view-of-the-eiffel-tower-from-rue-de-luniversit%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=vCGtbFaAyzM7zs4cqObbTvH8SISOiCi99r2nfXLMHtA="
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Paris
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1590119227988-a20d53ce33c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                   Thailand
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card elevation={5} sx={{ maxWidth: 300, p: 1, m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8fDA%3D"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dubai
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ width: "30%", backgroundColor: "" }}>
          <Grid container sx={{ backgroundColor: "" }}>
            <Grid item xs={12} sx={{ placeSelf: "center" }}>
              <Paper elevation={5} sx={{ height: 210, m: 3 }}>
                <Box
                  component="form"
                  sx={{
                    m: 1,
                    p: 1,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    label="Search Memories"
                    variant="outlined"
                  />
                </Box>

                <Box
                  component="form"
                  sx={{
                    m: 1,
                    p: 1,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    label="Search Tags"
                    variant="outlined"
                  />
                </Box>

                <Button
                  sx={{
                    width: "95%",
                    marginLeft: 2,
                    bottom: 3,
                    backgroundColor: "rgb(51, 84, 167)",
                  }}
                  variant="contained"
                >
                  Search
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} sx={{ placeSelf: "center" }}>
              <Paper elevation={5} sx={{ height: 380, m: 3 }}>
                <h1 sx={{ textAlign: "center" }}>Creating a Memory</h1>
                <Box
                  component="form"
                  sx={{
                    m: 1,
                    p: 1,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                  />
                </Box>

                <Box
                  component="form"
                  sx={{
                    m: 1,
                    p: 1,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "100%", height: "60px" }}
                    id="outlined-basic"
                    label="Message..."
                    variant="outlined"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    m: 1,
                    p: 1,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "100%", height: "60px" }}
                    id="outlined-basic"
                    label="Tags"
                    variant="outlined"
                  />
                </Box>
                <input style={{ marginLeft: 17 }} type="file"></input>
                {/* <div style={{display:"flex",justifyContent:"",top:10}}> */}

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    sx={{
                      width: "30%",
                      p: 1,
                      m: 2,
                      backgroundColor: "rgb(51, 84, 167)",
                    }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                  <Button
                    sx={{ width: "30%", p: 1, m: 2, backgroundColor: "purple" }}
                    variant="contained"
                  >
                    Clear
                  </Button>
                </Box>

                {/* </div> */}
              </Paper>
            </Grid>

            <Grid item xs={12} sx={{ placeSelf: "center" }}>
              <Paper elevation={5} sx={{ height: 50, m: 3 }}></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
