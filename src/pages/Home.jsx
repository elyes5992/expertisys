import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Paper, Divider, CardActionArea, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

// --- Your existing imports ---
import heroBg from '../assets/hero-image.jpg';
import poleStatiqueImg from '../assets/mec-stat.png';
import ArchitectureIcon from '@mui/icons-material/Architecture'; 
import poleMobilitesImg from '../assets/mobilites.jpg';
import poleTelcoImg from '../assets/telco.jpg';
import BuildIcon from '@mui/icons-material/Build';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AnimatedPage from '../components/AnimatedPage';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const stats = [
  { number: 15, suffix: '+', text: 'Ans d\'Expertise' },
  { number: 100, suffix: '%', text: 'Satisfaction Client' },
  { number: 200, suffix: '+', text: 'Projets Réalisés' },
  { number: 3, suffix: '', text: 'Pôles d\'Excellence' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      {/* --- START OF STRUCTURAL FIX --- */}
      {/* A new parent Box to correctly manage the overlap */}
      <Box sx={{ position: 'relative', mb: { xs: 20, md: 14 } }}> {/* Margin bottom creates space for the overlapping banner */}
        
        {/* HERO SECTION (now without the stats banner inside it) */}
        <Box
          sx={{
            pt: { xs: 12, md: 16 },
            pb: { xs: 12, md: 35 }, // Padding is now just for content, not for making space for the banner
            background: `linear-gradient(45deg, rgba(13, 71, 161, 0.9) 0%, rgba(0, 33, 113, 0.85) 100%), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <Typography variant="h1" component="h1" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, textShadow: '0px 4px 12px rgba(0,0,0,0.4)' }}>
                      EXPERTISYS
                  </Typography>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                  <Typography variant="h4" component="p" sx={{ mb: 1, fontWeight: 300, height: { xs: '90px', md: '60px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <TypeAnimation sequence={['Advanced Engineering Expertise', 2000, 'Simulation Numérique de Pointe', 2000, 'Solutions en Mobilité & IT', 2000]} wrapper="span" speed={50} repeat={Infinity} />
                  </Typography>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                      <Button
                          variant="contained"
                          component={Link} to="/Formulaire" size="large"
                          sx={{
                            px: 4, py: 1.5,
                            fontSize: '1rem',
                            background: `linear-gradient(45deg, ${'#4fc3f7'} 30%, ${'#0093c4'} 90%)`,
                            boxShadow: '0 3px 5px 2px rgba(79, 195, 247, .3)',
                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-3px)',
                                boxShadow: '0 6px 10px 4px rgba(79, 195, 247, .3)',
                            }
                          }}
                          endIcon={<ArrowForwardIcon />}
                      >
                          Demander un Devis
                      </Button>
                      <Button
                          variant="outlined"
                          size="large"
                          onClick={() => { const expertiseSection = document.getElementById('expertise-section'); if (expertiseSection) { expertiseSection.scrollIntoView({ behavior: 'smooth' }); } }}
                          sx={{
                            px: 4, py: 1.5,
                            fontSize: '1rem',
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(4px)',
                            transition: 'background-color 0.3s ease, border-color 0.3s ease',
                            '&:hover': {
                                borderColor: 'white',
                                bgcolor: 'rgba(255, 255, 255, 0.2)',
                            }
                          }}
                          endIcon={<ExpandMoreIcon />}
                      >
                          Explorer Nos Services
                      </Button>
                  </Box>
              </motion.div>
          </Container>
        </Box>
        
        {/* STATS BANNER (now a sibling of the hero, positioned correctly) */}
        <Container
            maxWidth="lg"
            sx={{
                position: 'absolute',
                bottom: 0, // Position at the bottom of the parent
                left: '50%',
                transform: 'translate(-50%, 50%)', // Pull it down to overlap
                zIndex: 2, // Ensure it's on top of the hero image but below potential navbars
            }}
        >
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
                <Paper
                    elevation={6}
                    sx={{ p: { xs: 2, md: 3 }, borderRadius: '12px', bgcolor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)'}}
                >
                    <Grid container spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                        {stats.map((stat, index) => (
                            // --- DEFINITIVE GRID SYNTAX FIX ---
                            <Grid size={{xs:6 ,md:3}} key={index} sx={{ textAlign: 'center' }}>
                                <Typography variant="h3" component="p" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
                                    <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyDelay={200} />
                                    {stat.suffix}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {stat.text}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </motion.div>
        </Container>
      </Box>
      {/* --- END OF STRUCTURAL FIX --- */}

      {/* Services Overview Section (no zIndex needed now) */}
      <Container id="expertise-section" sx={{ py: 8 }}>
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Nos Pôles d'Expertise
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          <Grid size={{xs:12 ,md:4}} >
            <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card sx={{ height: '100%', borderRadius: '16px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease', border: '2px solid transparent', '&:hover': { borderColor: 'secondary.main', boxShadow: '0 10px 30px -10px rgba(79, 195, 247, 0.5)' } }}>
                <CardActionArea onClick={() => navigate('/services/mecanique-dynamique')}>
                  <CardMedia component="img" height="200" image={poleMobilitesImg} alt="Ingénierie Mécanique" />
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <BuildIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                    <Typography variant="h4" component="h3" gutterBottom>Pôle Mobilités Mécaniques</Typography>
                    <Typography variant="body1" color="text.secondary">Expertise pointue pour constructeurs et équipementiers. Du cycle en V à la validation produit : carrosserie, powertrain et liaison au sol.</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
         
          <Grid size={{xs:12 ,md:4}}>
            <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card sx={{ height: '100%', borderRadius: '16px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease', border: '2px solid transparent', '&:hover': { borderColor: 'secondary.main', boxShadow: '0 10px 30px -10px rgba(79, 195, 247, 0.5)' } }}>
                <CardActionArea onClick={() => navigate('/services/mecanique-statique')}>
                  <CardMedia component="img" height="200" image={poleStatiqueImg} alt="Ingénierie Mécanique Statique" />
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <ArchitectureIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                    <Typography variant="h4" component="h3" gutterBottom>Pôle Statique & Structure</Typography>
                    <Typography variant="body1" color="text.secondary">Analyses structurelles par éléments finis (FEA), études de durabilité (fatigue) et analyses vibratoires (NVH) pour garantir la robustesse des produits.</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
           <Grid size={{xs:12 ,md:4}}>
            <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card sx={{ height: '100%', borderRadius: '16px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease', border: '2px solid transparent', '&:hover': { borderColor: 'secondary.main', boxShadow: '0 10px 30px -10px rgba(79, 195, 247, 0.5)' } }}>
                <CardActionArea onClick={() => navigate('/services/telco-cybersecurite')}>
                  <CardMedia component="img" height="200" image={poleTelcoImg} alt="Télécommunications et Cybersécurité" />
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <NetworkCheckIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                    <Typography variant="h4" component="h3" gutterBottom>Pôle Telco & IT</Typography>
                    <Typography variant="body1" color="text.secondary">Haut niveau d'expertise pour opérateurs et intégrateurs. Performance, résilience et conformité de l'architecture à la sécurisation des systèmes.</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>
      
      {/* "Why Choose Us?" Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 8 }}>Pourquoi Nous Choisir ?</Typography>
          <Grid container spacing={5}>
            <Grid size={{xs:12 ,md:4}}>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Box textAlign="center">
                  <EmojiEventsOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>Expertise de Pointe</Typography>
                  <Typography color="text.secondary">Nos ingénieurs mobilisent un savoir-faire de haut niveau pour relever les défis techniques les plus complexes et garantir des résultats optimaux.</Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{xs:12 ,md:4}}>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Box textAlign="center">
                  <RocketLaunchOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>Levier d'Innovation</Typography>
                  <Typography color="text.secondary">Notre maîtrise avancée de la simulation numérique constitue un véritable levier de performance et d'optimisation pour nos clients.</Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{xs:12 ,md:4}}>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                <Box textAlign="center">
                  <PeopleOutlineOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>Approche Partenaire</Typography>
                  <Typography color="text.secondary">Nous travaillons en étroite collaboration avec vous, de la conception à la validation, pour accompagner le développement complet de chaque produit.</Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </AnimatedPage>
  );
};

export default Home;