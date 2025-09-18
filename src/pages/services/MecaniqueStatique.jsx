import React from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Card, Button, CardContent, Paper, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import Page Components
import AnimatedPage from '../../components/AnimatedPage';
import staticMechanicsBg from '../../assets/mec-stat.png';

// Import Icons for the new feature grids
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DataObjectIcon from '@mui/icons-material/DataObject'; // Corrected Icon
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const applications = [
    { icon: <AnalyticsIcon fontSize="large" />, text: "Calculs statiques / dynamiques / vibratoires (NVH)" },
    { icon: <GraphicEqIcon fontSize="large" />, text: "Analyse modale / réponse fréquentielle" },
    { icon: <CarCrashIcon fontSize="large" />, text: "Simulation de crash ou impact (Abaqus)" },
    { icon: <HealthAndSafetyIcon fontSize="large" />, text: "Fatigue et durabilité (life prediction)" },
    { icon: <DataObjectIcon fontSize="large" />, text: "Contact et non-linéarités matériaux" }, // Corrected Icon
    { icon: <ThermostatIcon fontSize="large" />, text: "Calculs thermomécaniques (freinage)" },
];

const beneficesStatique = ["Validation de la robustesse structurelle", "Réduction des coûts de prototypage", "Gain de temps dans le développement", "Optimisation du dimensionnement", "Conformité aux normes de sécurité"];
const beneficesVibratoire = ["Identification précoce des risques de résonance", "Amélioration de la durabilité des composants", "Amélioration du confort d'utilisation", "Compréhension du comportement dynamique"];
const beneficesAcoustique = ["Amélioration du confort acoustique", "Réduction des nuisances sonores", "Positionnement haut de gamme du produit", "Intégration fluide multi-physique"];

const MecaniqueStatique = () => {
    return (
        <AnimatedPage>
            {/* 1. Visual Header */}
            <Box
                sx={{
                    pt: 12, pb: 12,
                    background: `linear-gradient(rgba(13, 71, 161, 0.8), rgba(0, 33, 113, 0.8)), url(${staticMechanicsBg})`,
                    backgroundSize: 'cover', backgroundPosition: 'center', color: 'white'
                }}
            >
                <Container maxWidth="lg">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Ingénierie Mécanique Statique
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            Analyses Statique, Vibratoire et Acoustique
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ my: 6 }}>
                {/* 2. Introduction Text */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 6, textAlign: 'center', fontStyle: 'italic' }}>
                        Le calcul statique consiste à déterminer les efforts internes et les déplacements subis par une structure soumise à des charges statiques, garantissant sa robustesse et sa fiabilité.
                    </Typography>
                </motion.div>

                {/* 3. "Applications" Feature Grid */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h3" color="primary" gutterBottom textAlign="center" sx={{ mb: 4 }}>Nos Applications</Typography>
                    <Grid container spacing={3}>
                        {applications.map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                {/* --- START OF CHANGE: Added hover animation --- */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.1, delay:  0 }}
                                    whileHover={{ scale: 1.02, y: -5 }} // Zoom in and lift up on hover
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
                                {/* --- END OF CHANGE --- */}
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                
                <Divider sx={{ my: 6 }} />

                {/* 4. "Benefits" Section with 3 Columns */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h3" color="primary" gutterBottom textAlign="center" sx={{ mb: 4 }}>Bénéfices pour Vos Projets</Typography>
                    <Grid container spacing={4}>
                        {/* Column 1: Statique */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            {/* --- START OF CHANGE: Added hover animation --- */}
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.15, delay: 0 }} 
                                whileHover={{ scale: 1.02, y: -5 }} // Zoom in and lift up on hover
                                style={{ height: '100%' }}>
                                <Card sx={{ 
                                    height: '100%', 
                                    borderRadius: 3, 
                                    p: 1,
                                    // --- ADDED GLOW EFFECT ---
                                    transition: 'box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        boxShadow: '0px 10px 25px rgba(79, 195, 247, 0.3)', // light blue glow
                                    }
                                }}>
                                    <CardContent><Typography variant="h5" gutterBottom>Calcul Statique</Typography><List dense>{beneficesStatique.map((item, i) => (<ListItem key={i}><ListItemIcon sx={{minWidth: 32}}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon><ListItemText primary={item} /></ListItem>))}</List></CardContent></Card>
                            </motion.div>
                             {/* --- END OF CHANGE --- */}
                        </Grid>
                        {/* Column 2: Vibratoire */}
                        <Grid size={{ xs: 12, md: 4 }}>
                             {/* --- START OF CHANGE: Added hover animation --- */}
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.15, delay: 0 }} 
                                whileHover={{ scale: 1.02, y: -5 }} // Zoom in and lift up on hover
                                style={{ height: '100%' }}>
                                <Card sx={{ 
                                    height: '100%', 
                                    borderRadius: 3, 
                                    p: 1,
                                    // --- ADDED GLOW EFFECT ---
                                    transition: 'box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        boxShadow: '0px 10px 25px rgba(79, 195, 247, 0.3)', // light blue glow
                                    }
                                }}>
                                    <CardContent><Typography variant="h5" gutterBottom>Analyse Vibratoire</Typography><List dense>{beneficesVibratoire.map((item, i) => (<ListItem key={i}><ListItemIcon sx={{minWidth: 32}}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon><ListItemText primary={item} /></ListItem>))}</List></CardContent></Card>
                            </motion.div>
                            {/* --- END OF CHANGE --- */}
                        </Grid>
                        {/* Column 3: Acoustique */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            {/* --- START OF CHANGE: Added hover animation --- */}
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.15, delay: 0 }} 
                                whileHover={{ scale: 1.02, y: -5 }} // Zoom in and lift up on hover
                                style={{ height: '100%' }}>
                                <Card sx={{ 
                                    height: '100%', 
                                    borderRadius: 3, 
                                    p: 1,
                                    // --- ADDED GLOW EFFECT ---
                                    transition: 'box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        boxShadow: '0px 10px 25px rgba(79, 195, 247, 0.3)', // light blue glow
                                    }
                                }}>
                                    <CardContent><Typography variant="h5" gutterBottom>Analyse Acoustique</Typography><List dense>{beneficesAcoustique.map((item, i) => (<ListItem key={i}><ListItemIcon sx={{minWidth: 32}}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon><ListItemText primary={item} /></ListItem>))}</List></CardContent></Card>
                            </motion.div>
                            {/* --- END OF CHANGE --- */}
                        </Grid>
                    </Grid>
                </Box>

                {/* 5. Prominent "Value Added" Section */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <Card sx={{ mt: 6, p: 3, borderRadius: 4, bgcolor: 'primary.dark', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Notre Valeur Ajoutée</Typography>
                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                                Avec une expertise issue de projets pour les principaux équipementiers et constructeurs européens, nos ingénieurs EXPERTISYS vous accompagnent dans l'analyse, la modélisation et l'optimisation de vos systèmes mécaniques Statique, en intégrant les meilleures pratiques du secteur.
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            </Container>

            {/* 6. CTA Section */}
            <Box sx={{ py: 8, bgcolor: 'secondary.light', mt: 5, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ color: 'primary.dark', fontWeight: 'bold' }} gutterBottom>
                        Un Projet en Tête ?
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
                        Notre expertise en analyses statiques peut garantir la robustesse de votre produit. Parlons-en.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        component={RouterLink} 
                        to="/Formulaire"
                        sx={{ py: 1.5, px: 5 }}
                    >
                        Obtenir un Devis Personnalisé
                    </Button>
                </Container>
            </Box>
        </AnimatedPage>
    );
}

export default MecaniqueStatique;