import React from 'react';
import { Box, Container, Typography, Grid, Paper, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import Icons for values and process
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SecurityIcon from '@mui/icons-material/Security';

import AnimatedPage from '../components/AnimatedPage';
import heroBg from '../assets/hero-image.jpg'; // Re-using the hero background

const values = [
    { icon: <StarBorderIcon fontSize="large" />, title: 'Excellence', description: 'Nous visons les plus hauts standards de qualité dans chaque projet, en mobilisant une expertise de pointe.' },
    { icon: <LightbulbOutlinedIcon fontSize="large" />, title: 'Innovation', description: 'Nous intégrons les dernières avancées technologiques pour proposer des solutions performantes et pérennes.' },
    { icon: <SpeedIcon fontSize="large" />, title: 'Agilité', description: 'Notre réactivité et notre flexibilité nous permettent de nous adapter aux défis techniques les plus complexes.' },
    { icon: <HandshakeOutlinedIcon fontSize="large" />, title: 'Partenariat', description: 'Nous construisons des relations de confiance durables avec nos clients, basées sur l\'écoute et la collaboration.' },
];

const processSteps = [
    { icon: <ArchitectureIcon />, title: 'Conception & Architecture' },
    { icon: <IntegrationInstructionsIcon />, title: 'Développement & Intégration' },
    { icon: <PublishedWithChangesIcon />, title: 'Validation & Simulation' },
    { icon: <SecurityIcon />, title: 'Déploiement & Sécurisation' },
];

const About = () => {
    return (
        <AnimatedPage>
            {/* 1. Hero Section */}
            <Box
                sx={{
                    pt: 20, pb: 20,
                    background: `linear-gradient(rgba(13, 71, 161, 0.9), rgba(13, 71, 161, 0.9)), url(${heroBg})`,
                    backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center'
                }}
            >
                <Container maxWidth="md">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Typography variant="h1" component="h1" gutterBottom>Notre Mission</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 300 }}>
                            Combiner excellence technique, agilité et connaissance des environnements sensibles pour garantir la performance, la résilience et la conformité des systèmes de nos clients.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* 2. Our Values Section */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>Nos Valeurs Fondamentales</Typography>
                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid size={{xs:12 ,sm:6,md:3}} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{ height: '100%' }}
                                >
                                    <Card sx={{ p: 2, textAlign: 'center', height: '100%', borderRadius: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                                        <Box color="primary.main" mb={2}>{value.icon}</Box>
                                        <Typography variant="h5" component="h3" gutterBottom>{value.title}</Typography>
                                        <Typography color="text.secondary">{value.description}</Typography>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 3. Our Approach Section */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="md">
                    <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 8 }}>Notre Approche End-to-End</Typography>
                    <Box sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', bgcolor: 'primary.light', borderRadius: '2px', transform: 'translateX(-50%)' } }}>
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', mb: 4 }}>
                                    <Paper
                                        elevation={4}
                                        sx={{
                                            p: 3, width: { xs: 'calc(100% - 30px)', sm: 'calc(50% - 30px)' },
                                            textAlign: index % 2 === 0 ? 'right' : 'left',
                                            position: 'relative',
                                            borderRadius: 4,
                                            borderLeft: index % 2 !== 0 ? '4px solid' : 'none',
                                            borderRight: index % 2 === 0 ? '4px solid' : 'none',
                                            borderColor: 'secondary.main',
                                            '&::after': { content: '""', position: 'absolute', top: 'calc(50% - 10px)', [index % 2 === 0 ? 'right' : 'left']: '-26px', height: '20px', width: '20px', bgcolor: 'background.paper', border: '4px solid', borderColor: 'primary.light', borderRadius: '50%' }
                                        }}
                                    >
                                        <Box color="primary.main">{step.icon}</Box>
                                        <Typography variant="h6" component="h4">{step.title}</Typography>
                                    </Paper>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* 4. Call to Action Section */}
            <Box sx={{ py: 8, bgcolor: 'primary.dark', color: 'white' }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom>Prêt à transformer vos défis en succès ?</Typography>
                    <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
                        Contactez nos experts pour discuter de votre projet et découvrir comment notre ingénierie de pointe peut devenir votre plus grand atout.
                    </Typography>
                    <Button variant="contained" color="secondary" size="large" component={Link} to="/contact">
                        Parlons de votre projet
                    </Button>
                </Container>
            </Box>
        </AnimatedPage>
    );
};

export default About;