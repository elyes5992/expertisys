import React, { useState, useRef } from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, Button, Card, CardContent,Paper, Grid, TextField, Checkbox, FormControlLabel, CircularProgress, Alert, Select, MenuItem, InputLabel, FormControl, RadioGroup, Radio } from '@mui/material';
import emailjs from 'emailjs-com';

// Icons for service selection
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import LanIcon from '@mui/icons-material/Lan';
import AnimatedPage from '../components/AnimatedPage';

const steps = ['Vos Coordonnées', 'Détails du Projet', 'Confirmation'];

const servicesList = [
  { name: 'Ingénierie Mécanique Dynamique', icon: <SyncAltIcon /> },
  { name: 'Ingénierie Mécanique Statique', icon: <ArchitectureIcon /> },
  { name: 'Telco, IT & Cybersécurité', icon: <LanIcon /> },
  { name: 'Autre (à préciser)', icon: <Typography sx={{ fontWeight: 'bold' }}>?</Typography> },
];

const Formulaire = () => {
  const form = useRef();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    user_name: '',
    user_email: '',
    company: '',
    phone: '',
    // Step 2
    selected_services: [],
    project_type: '', // <-- NEW FIELD
    project_timeline: '', // <-- NEW FIELD
    project_budget: '', // <-- NEW FIELD
    project_description: '',
  });
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceName) => {
    setFormData((prev) => {
      const newServices = prev.selected_services.includes(serviceName)
        ? prev.selected_services.filter((s) => s !== serviceName)
        : [...prev.selected_services, serviceName];
      return { ...prev, selected_services: newServices };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_DEVIS_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    const templateParams = {
        ...formData,
        selected_services: formData.selected_services.join(', ')
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        setLoading(false);
        setSubmissionStatus('success');
        handleNext();
      }, (error) => {
        setLoading(false);
        setSubmissionStatus('error');
      });
  };
  
  const getStepContent = (step) => {
    switch (step) {
      case 0: // Contact Info
        return (
          <Grid container spacing={3}>
            <Grid size={{xs:12 ,sm:6}} ><TextField required fullWidth label="Nom complet" name="user_name" value={formData.user_name} onChange={handleInputChange} /></Grid>
            <Grid   size={{xs:12 ,sm:6}}><TextField required fullWidth label="Adresse Email" name="user_email" type="email" value={formData.user_email} onChange={handleInputChange} /></Grid>
            <Grid size={{xs:12 ,sm:6}}><TextField fullWidth label="Entreprise (Optionnel)" name="company" value={formData.company} onChange={handleInputChange} /></Grid>
            <Grid size={{xs:12 ,sm:6}}><TextField fullWidth label="Téléphone (Optionnel)" name="phone" value={formData.phone} onChange={handleInputChange} /></Grid>
          </Grid>
        );
      case 1: // Enhanced Project Details
        return (
          <>
            <Typography variant="h6" gutterBottom>1. Quels services vous intéressent ?</Typography>
            <Grid container spacing={2}>
              {servicesList.map((service) => (
                <Grid size={{xs:12 ,sm:6}} key={service.name}>
                  <Card 
                    onClick={() => handleServiceToggle(service.name)}
                    sx={{ display: 'flex', alignItems: 'center', p: 2, cursor: 'pointer', border: '2px solid', borderColor: formData.selected_services.includes(service.name) ? 'secondary.main' : 'grey.300', transition: 'border-color 0.3s, transform 0.2s', '&:hover': { transform: 'scale(1.03)', borderColor: 'secondary.light' } }}
                  >
                    <Checkbox checked={formData.selected_services.includes(service.name)} />
                    <Box color="primary.main" mx={1}>{service.icon}</Box>
                    <Typography>{service.name}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            {/* --- START: NEW FIELDS --- */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid size={{xs:12 ,md:6}}>
                    <FormControl fullWidth required>
                        <InputLabel id="project-type-label">2. Type de Projet</InputLabel>
                        <Select labelId="project-type-label" name="project_type" value={formData.project_type} label="2. Type de Projet" onChange={handleInputChange}>
                            <MenuItem value="Nouvelle Conception / Développement">Nouvelle Conception / Développement</MenuItem>
                            <MenuItem value="Optimisation de Système Existant">Optimisation de Système Existant</MenuItem>
                            <MenuItem value="Analyse / Simulation / Validation">Analyse / Simulation / Validation</MenuItem>
                            <MenuItem value="Consulting / Expertise Technique">Consulting / Expertise Technique</MenuItem>
                            <MenuItem value="Autre">Autre</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={{xs:12 ,md:6}}>
                    <FormControl fullWidth>
                        <InputLabel id="project-budget-label">4. Budget Estimé (Optionnel)</InputLabel>
                        <Select labelId="project-budget-label" name="project_budget" value={formData.project_budget} label="4. Budget Estimé (Optionnel)" onChange={handleInputChange}>
                            <MenuItem value="Non défini">Non défini</MenuItem>
                            <MenuItem value="< 5 000 €">&lt; 5 000 DT</MenuItem>
                            <MenuItem value="5 000 € - 20 000 €">5 000 DT - 20 000 DT</MenuItem>
                            <MenuItem value="20 000 € - 50 000 €">20 000 DT - 50 000 DT</MenuItem>
                            <MenuItem value="> 50 000 €">&gt; 50 000 DT</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={{xs:12 }}>
                    <FormControl component="fieldset">
                        <Typography variant="h6" component="legend" sx={{ mb: 1 }}>3. Échéance du Projet</Typography>
                        <RadioGroup row name="project_timeline" value={formData.project_timeline} onChange={handleInputChange}>
                            <FormControlLabel value="Urgent (< 1 mois)" control={<Radio />} label="Urgent (< 1 mois)" />
                            <FormControlLabel value="1-3 mois" control={<Radio />} label="1-3 mois" />
                            <FormControlLabel value="3-6 mois" control={<Radio />} label="3-6 mois" />
                            <FormControlLabel value="Flexible (> 6 mois)" control={<Radio />} label="Flexible (> 6 mois)" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            {/* --- END: NEW FIELDS --- */}
            
            <TextField
              fullWidth
              multiline
              rows={5}
              label="5. Décrivez plus en détail votre projet ou besoin"
              name="project_description"
              value={formData.project_description}
              onChange={handleInputChange}
              sx={{ mt: 4 }}
            />
          </>
        );
      case 2: // Confirmation
        return (
            <Box textAlign="center">
                <Typography variant="h5" gutterBottom>Prêt à envoyer votre demande ?</Typography>
                <Typography color="text.secondary">Veuillez vérifier vos informations avant de soumettre. Notre équipe vous contactera dans les plus brefs délais.</Typography>
                {submissionStatus === 'error' && <Alert severity="error" sx={{mt: 2}}>Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</Alert>}
            </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <AnimatedPage>
      <Container component="main" maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Paper elevation={4} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4 }}>
          <Typography component="h1" variant="h3" align="center" gutterBottom>
            Demander un Devis
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}><StepLabel>{label}</StepLabel></Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <Box textAlign="center" py={5}>
              <Typography variant="h4" gutterBottom>Merci pour votre demande !</Typography>
              <Typography>Votre devis a été envoyé avec succès. Nous reviendrons vers vous très prochainement.</Typography>
            </Box>
          ) : (
            <form onSubmit={sendEmail}>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mr: 1 }}>
                    Retour
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                    <Button variant="contained" type="submit" disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : 'Soumettre la Demande'}
                    </Button>
                ) : (
                    <Button variant="contained" onClick={handleNext}>
                        Suivant
                    </Button>
                )}
              </Box>
            </form>
          )}
        </Paper>
      </Container>
    </AnimatedPage>
  );
};

export default Formulaire;