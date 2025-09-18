import React from 'react';
import {
    Container, Typography, Box, Grid, List, ListItem, ListItemIcon,
    ListItemText, Card, CardContent, Divider, Accordion, AccordionSummary, AccordionDetails,Button
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import dynamicMechanicsBg from '../../assets/telco.jpg';
import { motion } from 'framer-motion';
import {Link as RouterLink} from 'react-router-dom';

// --- ICONS ---
// You can choose icons that best represent each category
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EngineeringIcon from '@mui/icons-material/Engineering'; // Ingénierie
import DnsIcon from '@mui/icons-material/Dns'; // Déploiement
import AccountTreeIcon from '@mui/icons-material/AccountTree'; // Pilotage
import FiveGIcon from '@mui/icons-material/FiveG'; // 5G
import SecurityIcon from '@mui/icons-material/Security'; // Cybersécurité
import CloudQueueIcon from '@mui/icons-material/CloudQueue'; // Cloud
import MediationIcon from '@mui/icons-material/Mediation'; // Conseil
import SchoolIcon from '@mui/icons-material/School'; // Formation

import AnimatedPage from '../../components/AnimatedPage';

// Helper component for scroll animations
const AnimatedCard = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only animates once
        threshold: 0.1,    // Trigger when 10% of the element is visible
    });

    return (
        <Box
            ref={ref}
            sx={{
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
            }}
        >
            {children}
        </Box>
    );
};


const TelcoCyber = () => {
    // A more structured way to handle the services for easier mapping
    const telcoServices = [
        {
            icon: <EngineeringIcon color="primary" />,
            title: "Ingénierie Télécom & Conception Réseau",
            items: ["Études de faisabilité et dimensionnement radio (2G/3G/4G/5G)", "Conception radio (RF planning), optimisation et tuning", "Études d'ingénierie core network et transmission", "Rédaction de livrables techniques (NOP, CRO, rapports de couverture...)"]
        },
        {
            icon: <DnsIcon color="primary" />,
            title: "Déploiement & Intégration de Réseaux",
            items: ["Installation, mise en service et intégration d'équipements télécom", "Modernisation et swap de sites cellulaires (multi-technologies)", "Coordination de chantiers, audits qualité et recettes", "Support au lancement commercial (drive test, troubleshooting)"]
        },
        {
            icon: <AccountTreeIcon color="primary" />,
            title: "Pilotage de Projets Télécom",
            items: ["Management de projets de déploiement (PMO, reporting, KPI)", "Coordination multi-acteurs (MOE, MOA, opérateurs, équipementiers)", "Gestion de planning, risques, budget et conformité réglementaire"]
        },
        {
            icon: <FiveGIcon color="primary" />,
            title: "Expertise 5G & Nouvelles Générations",
            items: ["Études de cas d'usage 5G (IoT, smart city, edge computing)", "Évaluation de performances et scénarios d’optimisation", "Intégration de réseaux privés et slicing 5G", "Accompagnement à la transformation digitale mobile"]
        }
    ];

    const cyberServices = [
        {
            icon: <SecurityIcon color="primary" />,
            title: "Cybersécurité Télécom & IT",
            items: ["Analyse des risques et gestion de la sécurité des infrastructures télécom", "Sécurisation des réseaux mobiles et des communications critiques", "Mise en conformité (ISO 27001, GDPR, NIS2)", "SOC (Security Operations Center) as a Service", "Tests d'intrusion (pentests), audit de configuration, analyse des vulnérabilités"]
        },
        {
            icon: <CloudQueueIcon color="primary" />,
            title: "Infrastructures IT & Cloud",
            items: ["Architecture et déploiement de solutions cloud (privé, hybride, public)", "Administration systèmes (Linux, Windows), virtualisation (VMware, Proxmox...)", "Supervision, sauvegarde, PCA/PRA", "Services managés : infogérance, helpdesk, support utilisateurs", "DevOps & automatisation (CI/CD, Ansible, Terraform)"]
        },
        {
            icon: <MediationIcon color="primary" />,
            title: "Pilotage de Projets & Conseil",
            items: ["AMOA / AMOE pour projets télécoms, IT et sécurité", "Management de projets complexes (multi-sites, multi-acteurs)", "Accompagnement à la transformation digitale et à l'innovation", "Veille technologique et scénarios d'anticipation (smart city, 5G privée, IoT sécurisé)"]
        },
        {
            icon: <SchoolIcon color="primary" />,
            title: "Formation & Transfert de Compétences",
            items: ["Modules sur-mesure : réseaux, cybersécurité, cloud, 5G, architecture IT", "Formations certifiantes (en partenariat avec des organismes habilités)", "Coaching technique pour équipes internes et montée en compétences"]
        }
    ];

    return (
        <AnimatedPage>
            {/* --- HERO SECTION --- */}
           

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
                            Telco, IT & Cybersécurité
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            Votre Partenaire pour une Transformation Numérique Agile, Experte et Engagée
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ my: 6 }}>
                <Typography variant="h6" sx={{ mb: 6, fontWeight: 300, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                    À la croisée des télécoms, de l'IT et de la cybersécurité, EXPERTISYS vous accompagne dans vos projets de transformation numérique avec agilité, expertise et engagement.
                </Typography>
                
                <Grid container spacing={5}>
                    {/* --- LEFT COLUMN: TELCO & IT --- */}
                    <Grid size={{xs:12, lg:6}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography variant="h3" color="text.primary" align="center" gutterBottom>Telco & IT</Typography>
                            {telcoServices.map((service, index) => (
                                <AnimatedCard key={index}>
                                    <Accordion sx={{ 
                                        '&:before': { display: 'none' }, // removes the default top border
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        borderRadius: '8px !important', // !important to override MUI defaults
                                        transition: 'box-shadow 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                        }
                                    }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                {service.icon}
                                                <Typography variant="h6">{service.title}</Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ bgcolor: 'action.hover' }}>
                                            <List dense>
                                                {service.items.map((item, idx) => (
                                                    <ListItem key={idx}>
                                                        <ListItemIcon sx={{ minWidth: '32px' }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                                                        <ListItemText primary={item} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                </AnimatedCard>
                            ))}
                        </Box>
                    </Grid>

                    {/* --- RIGHT COLUMN: CYBERSECURITY & CLOUD --- */}
                    <Grid size={{xs:12, lg:6}}>
                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography variant="h3" color="text.primary" align="center" gutterBottom>Cybersécurité, Cloud & Conseil</Typography>
                            {cyberServices.map((service, index) => (
                                <AnimatedCard key={index}>
                                     <Accordion sx={{ 
                                        '&:before': { display: 'none' },
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        borderRadius: '8px !important',
                                        transition: 'box-shadow 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                        }
                                    }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                {service.icon}
                                                <Typography variant="h6">{service.title}</Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ bgcolor: 'action.hover' }}>
                                            <List dense>
                                                {service.items.map((item, idx) => (
                                                    <ListItem key={idx}>
                                                        <ListItemIcon sx={{ minWidth: '32px' }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                                                        <ListItemText primary={item} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                </AnimatedCard>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* --- MISSION STATEMENT CARD --- */}
                <Box sx={{ mt: 8 }}>
                    <AnimatedCard>
                        <Card sx={{ bgcolor: 'primary.dark', color: 'white', borderRadius: 2, boxShadow: 6 }}>
                            <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Typography variant="h5" component="blockquote" sx={{ fontStyle: 'italic', maxWidth: '900px', mx: 'auto' }}>
                                    “Être le partenaire de référence dans l'accompagnement des acteurs des télécommunications et de la mobilité, en leur apportant une expertise technique de haut niveau, une réactivité exemplaire, et une capacité d'innovation constante.”
                                </Typography>
                            </CardContent>
                        </Card>
                    </AnimatedCard>
                </Box>
            </Container>
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

export default TelcoCyber;