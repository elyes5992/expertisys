import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../assets/logo1.png';

// Custom component for footer links to handle routing and styling
const FooterLink = ({ to, children }) => (
  <Link
    component={RouterLink}
    to={to}
    variant="body1"
    color="inherit"
    underline="none"
    sx={{
      display: 'block',
      mb: 1,
      transition: 'color 0.2s ease-in-out, padding-left 0.2s ease-in-out',
      '&:hover': {
        color: 'secondary.light',
        pl: 0.5, // Adds a slight indent on hover
      },
    }}
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.dark',
        color: 'rgba(255, 255, 255, 0.8)',
        py: { xs: 4, md: 8 },
        mt: 'auto',
        borderTop: '4px solid',
        borderColor: 'primary.main',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Column 1: Branding and Mission */}
          <Grid size={{xs:12 ,md:4}}>
            <Box mb={2}>
              <img src={logo} alt="Expertisys Logo" style={{ height: '50px' }} />
            </Box>
            <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
              EXPERTISYS
            </Typography>
            <Typography variant="body2">
              Votre partenaire en ingénierie de pointe, combinant excellence technique et innovation pour garantir la performance et la résilience de vos systèmes.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{xs:6 ,sm:6 ,md:2}}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Navigation
            </Typography>
            <FooterLink to="/">Accueil</FooterLink>
            <FooterLink to="/about">À Propos</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </Grid>

          {/* Column 3: Services */}
          <Grid size={{xs:6 ,sm:6 ,md:3}}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Nos Services
            </Typography>
            <FooterLink to="/services/mecanique-dynamique">Mécanique Dynamique</FooterLink>
            <FooterLink to="/services/mecanique-statique">Mécanique Statique</FooterLink>
            <FooterLink to="/services/telco-cybersecurite">Telco, IT & Cyber</FooterLink>
          </Grid>

          {/* Column 4: Contact Info */}
          <Grid size={{xs:12  ,md:3}}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Contactez-nous
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon sx={{ mr: 1.5, color: 'secondary.light' }} />
              <Link href="mailto:Contact@expertisys-tn.com" color="inherit" underline="hover">
                Contact@expertisys-tn.com
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1.5, color: 'secondary.light' }} />
              <Typography>(+216) XX XXX XXX</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box textAlign="center">
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            &copy; {new Date().getFullYear()} EXPERTISYS. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;