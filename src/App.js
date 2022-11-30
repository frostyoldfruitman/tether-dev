import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { shadows } from '@mui/system';

import capyImage from './/capy.jpeg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Tether
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container compontent='master' maxWidth = "fill"
      sx= {{
        backgroundColor: '#e0f2f1',
        maxHeight: "fill"
      }}>

        <Box height={3}>
        </Box>

      
      <Container componet='header' maxWidth = "xl" maxHeight = "l"
      sx= {{
        backgroundImage: `URL(${capyImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius:10,
        padding:10,
        marginTop:3,
        boxShadow:5
      }}>
        <Box>
        <Typography variant="h2" color="white" align="center">
          Welcome to
        </Typography>
        <Typography variant="h1" color="white" align="center"
        sx={{
          marginTop: 8
        }}>
          Tether
        </Typography>
        <Typography variant="h4" color="white" align="center"
        sx={{
          marginTop: 8
        }}>
          Tether is a place for everday people to influence the world around them and have extrodinary experiences. Sign up below to take the first step in earning more money from your social media presence. 
        </Typography>
        </Box>
      </Container>
      <Container componet='header' maxWidth = "xl" maxHeight = "l"
      sx= {{
        backgroundColor:'#80cbc4',
        borderRadius:10,
        padding:10,
        marginTop:3,
        boxShadow:5
      }}>

        <Box>
        <Typography variant="h3" color="white" align="center">
          About us
        </Typography>
        <Typography variant="body1" color="white" align="center" marginTop={2}>
        Tether provides a free and easy to use, creator focused, marketplace to connect consumers/creators to brands. The problem Tether is solving: giving micro, nano influencers and the general public access to brand deals without having PR representation. The future of advertising is “relatability”. Seeing your friend with only 500 followers post at a new coffee shop is much more relatable than a post coming from a high profile influencer. Tether's target market is anyone with less than 100k followers.

I specifically ran into the problem of not wanting to give profits to a PR firm while influencing. I have 60k followers which is right at the threshold in the influencer community where you decide on PR firm representation. Otherwise, you wait for brands to come to you or reach out directly. Tether is bridging the gap of month-long email chains, negotiating contracts for small influencers and raising paid influencer opportunities for the general public. 

In the Tether you can sign (easy to read) contracts, message brands, apply for brand partnerships, receive and send payments, and look through an extensive database of user metrics. 

Our revenue steam will come from transaction fees we will charge the brand when paying out influencer contracts in the app. Additionally there will be ad revenue and revenue from brands promoting their campaigns.

Our marketing will primarily be on Tik Tok and instagram. I will have influencers show first hand accounts of getting paid and having a partnership in Tether to show how easy it is to make money through our app. Additionally there will be a creative marketing campaign as well as paid ad space in Tik Tok and Instagram.

Competition in the overall influencer marketing and marketplace space is vast, however none of the competitors are targeting small influencers and the general public. Additionally a competitor, GRIN, charges 30k per year for a PR firm to use their services. Tether will be free and open to the public.

Our Team consists of the CEO, Matthew Kappas. Matthew has a full time job and professional background in Finance, part time influencer, and an undergraduate degree form Boston University. The CTO is Graham Kutchek. Graham has a professional background in Tech, working as a data architect at Amazon, and an undergraduate degree form UC Berkeley. Our professional advisor is Jodi Hassan. Jodi helped found Allison Broad PR in New York which is a top 3 PR firm in the US.
        </Typography>
        </Box>
      </Container>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:'#b2dfdb',
            borderRadius:10,
            padding:5,
            boxShadow:5
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              {/* <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      </Container>
    </ThemeProvider>
  );
}