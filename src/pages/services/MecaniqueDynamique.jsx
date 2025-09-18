import React from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Card, Button, CardContent, Paper, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import Page Components
import AnimatedPage from '../../components/AnimatedPage';
import dynamicMechanicsBg from '../../assets/mobilites.jpg';

// Import Icons for the new feature grid
import GpsFixedIcon from '@mui/icons-material/GpsFixed'; // Liaisons au sol
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'; // Comportement dynamique
import InsightsIcon from '@mui/icons-material/Insights'; // Études élastocinématiques
import SpeedIcon from '@mui/icons-material/Speed'; // Analyse de stabilité
import TuneIcon from '@mui/icons-material/Tune'; // Optimisation
import AddRoadIcon from '@mui/icons-material/AddRoad'; // Roulages numériques

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Accélération
import SavingsIcon from '@mui/icons-material/Savings'; // Réduction des coûts
import BugReportIcon from '@mui/icons-material/BugReport'; // Détection précoce
import VisibilityIcon from '@mui/icons-material/Visibility'; // Meilleure compréhension
import HubIcon from '@mui/icons-material/Hub'; // Intégration fluide

const applications = [
    { icon: <GpsFixedIcon fontSize="large" />, text: "Conception et validation de liaisons au sol" },
    { icon: <DirectionsCarIcon fontSize="large" />, text: "Simulation du comportement dynamique des véhicules" },
    { icon: <InsightsIcon fontSize="large" />, text: "Études élastocinématiques" },
    { icon: <SpeedIcon fontSize="large" />, text: "Analyse de stabilité, maniabilité, confort" },
    { icon: <TuneIcon fontSize="large" />, text: "Optimisation des géométries de train roulant" },
    { icon: <AddRoadIcon fontSize="large" />, text: "Simulation de roulages numériques" },
];

const benefits = [
    { icon: <RocketLaunchIcon />, text: "Accélération du cycle de développement" },
    { icon: <SavingsIcon />, text: "Réduction des coûts de prototypage physique" },
    { icon: <BugReportIcon />, text: "Détection précoce des défauts" },
    { icon: <VisibilityIcon />, text: "Meilleure compréhension du comportement réel" },
    { icon: <HubIcon />, text: "Intégration fluide avec FEA, CFD..." },
];

const MecaniqueDynamique = () => {
    return (
        <AnimatedPage>
            {/* 1. New Visual Header */}
            <Box
                sx={{
                    pt: 12, pb: 12,
                    background: `linear-gradient(rgba(13, 71, 161, 0.8), rgba(0, 33, 113, 0.8)), url(${dynamicMechanicsBg})`,
                    backgroundSize: 'cover', backgroundPosition: 'center', color: 'white'
                }}
            >
                <Container maxWidth="lg">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Ingénierie Mécanique Dynamique
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            Calcul Multi-Body Simulation (MBS)
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ my: 6 }}>
                {/* 2. Introduction Text */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 6, textAlign: 'center', fontStyle: 'italic' }}>
                        Le calcul multi-corps permet d'anticiper le comportement réel d'un système en mouvement avant les essais physiques, optimisant ainsi les performances, le confort et la sécurité.
                    </Typography>
                </motion.div>
                
                {/* 3. New "Applications" Feature Grid */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h3" color="primary" gutterBottom textAlign="center" sx={{ mb: 4 }}>Nos Applications</Typography>
                    <Grid container spacing={3}>
                        {applications.map((item, index) => (
                            <Grid size={{xs:12 ,sm:6, md:4}} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.15, delay: 0 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    style={{ height: '100%' }}
                                >
                                    <Paper 
                                                                            elevation={2} 
                                                                            sx={{ 
                                                                                p: 3, 
                                                                                textAlign: 'center', 
                                                                                height: '100%', 
                                                                                borderRadius: 3,
                                                                                // --- ADDED GLOW EFFECT ---
                                                                                transition: 'border-color 0.3s ease, box-shadow 0.3s ease', border: '2px solid transparent', '&:hover': { borderColor: 'secondary.main', boxShadow: '0 10px 30px -10px rgba(79, 195, 247, 0.5)' }
                                                                            }}>
                                                                            <Box color="primary.main" mb={2}>{item.icon}</Box>
                                                                            <Typography variant="h6" component="h3">{item.text}</Typography>
                                                                        </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                
                <Divider sx={{ my: 6 }} />

                {/* 4. Enhanced "Benefits" and "Value Added" Section */}
                <Grid container spacing={5} alignItems="center">
                    <Grid size={{xs:12 ,md:6}}  >
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <Typography variant="h3" color="primary" gutterBottom>Bénéfices Clés</Typography>
                            <List>
                                {benefits.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon sx={{ color: 'secondary.main' }}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '1.1rem' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </motion.div>
                    </Grid>
                    <Grid size={{xs:12 ,md:6}}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <Card sx={{ p: 3, borderRadius: 4, bgcolor: 'primary.dark', color: 'white' }}>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom>Notre Valeur Ajoutée</Typography>
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                                        Avec une expertise issue de projets pour les principaux équipementiers et constructeurs européens, nos ingénieurs EXPERTISYS vous accompagnent dans l'analyse, la modélisation et l'optimisation de vos systèmes mécaniques dynamiques, en intégrant les meilleures pratiques du secteur.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* 5. CTA Section (Unchanged, but path corrected) */}
            <Box sx={{ py: 8, bgcolor: 'secondary.light', mt: 5, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ color: 'primary.dark', fontWeight: 'bold' }} gutterBottom>
                        Un Projet en Tête ?
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
                        Notre expertise en simulation dynamique peut transformer votre conception. Parlons-en.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        component={RouterLink} 
                        to="/Formulaire" // Corrected path
                        sx={{ py: 1.5, px: 5 }}
                    >
                        Obtenir un Devis Personnalisé
                    </Button>
                </Container>
            </Box>
        </AnimatedPage>
    );
}

export default MecaniqueDynamique;