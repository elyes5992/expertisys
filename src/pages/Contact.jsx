import React, { useRef, useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Alert } from '@mui/material';
import emailjs from 'emailjs-com';
import AnimatedPage from '../components/AnimatedPage';


const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        // --- IMPORTANT ---
        // Go to https://www.emailjs.com/
        // 1. Create an account.
        // 2. Add a new service (e.g., Gmail).
        // 3. Create a new email template.
        // 4. Find your credentials in Account > API Keys.
        // Replace the placeholder values below.

        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const userID = 'YOUR_USER_ID';

        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                setError(false);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setError(true);
                setIsSent(false);
            });
    };

    return (
        <AnimatedPage>
             <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign:'center' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Contactez-nous
                    </Typography>
                    <Typography variant="h5">
                        Nous sommes à votre écoute pour tous vos projets.
                    </Typography>
                </Container>
            </Box>
            <Container maxWidth="md" sx={{ my: 5 }}>
                <Typography variant="h4" align="center" gutterBottom>Envoyez-nous un message</Typography>
                <Box ref={form} component="form" onSubmit={sendEmail} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12 ,md:6}}>
                            <TextField
                                autoComplete="given-name"
                                name="from_name"
                                required
                                fullWidth
                                id="firstName"
                                label="Votre Nom"
                                autoFocus
                            />
                        </Grid>
                        <Grid size={{xs:12 ,md:6}}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Adresse Email"
                                name="from_email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid size={{xs:12 }}>
                            <TextField
                                required
                                fullWidth
                                name="subject"
                                label="Sujet"
                                id="subject"
                            />
                        </Grid>
                        <Grid size={{xs:12}}>
                            <TextField
                                required
                                fullWidth
                                name="message"
                                label="Votre Message"
                                id="message"
                                multiline
                                rows={6}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, py: 1.5 }}
                    >
                        Envoyer le Message
                    </Button>
                    {isSent && <Alert severity="success">Votre message a été envoyé avec succès !</Alert>}
                    {error && <Alert severity="error">Une erreur est survenue. Veuillez réessayer.</Alert>}
                </Box>
            </Container>
        </AnimatedPage>
    );
};

export default Contact;