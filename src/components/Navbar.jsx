import React, { useState,useRef } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  Popover, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Container, 
  ListItemIcon, 
  // --- NEW --- Imports for mobile responsiveness
  useTheme, 
  useMediaQuery, 
  IconButton, 
  Drawer, 
  Collapse,
  Divider
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Import Icons ---
import logo from '../assets/logoo.png'; 
import { KeyboardArrowDown, ExpandLess, ExpandMore } from '@mui/icons-material'; // --- NEW --- Added Expand icons
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import LanIcon from '@mui/icons-material/Lan';
import MenuIcon from '@mui/icons-material/Menu'; // --- NEW --- Hamburger menu icon
import CloseIcon from '@mui/icons-material/Close'; // --- NEW --- Close icon for drawer

// --- Updated services array (no changes here) ---
const services = [
  { name: 'Ingénierie Mécanique Dynamique', path: '/services/mecanique-dynamique', icon: <SyncAltIcon /> },
  { name: 'Ingénierie Mécanique Statique', path: '/services/mecanique-statique', icon: <ArchitectureIcon /> },
  { name: 'Telco, IT & Cybersécurité', path: '/services/telco-cybersecurite', icon: <LanIcon /> },
];

// --- Animation variants for the desktop popover (no changes here) ---
const popoverListVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const popoverItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- NEW --- Animation variants for the mobile drawer for extra "pazazz"
const drawerListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each item will animate 0.1s after the previous one
    },
  },
};

const drawerItemVariants = {
  hidden: { x: -30, opacity: 0 }, // Slide in from the left
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  // --- NEW --- State for mobile drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // --- NEW --- State for nested services list in mobile drawer
  const [servicesListOpen, setServicesListOpen] = useState(false);

  const timeoutRef = useRef(null);
  
  
  const navigate = useNavigate();

  // --- NEW --- MUI hooks to handle responsiveness
  const theme = useTheme();
  // This will be true if the screen width is less than the 'md' breakpoint (900px by default)
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // --- NEW --- Combined navigation handler to close popover and drawer
  const handleNavigate = (path) => {
    navigate(path);
    handlePopoverClose();
    setIsDrawerOpen(false); // Close drawer on navigation
  };

   const handlePopoverLeave = () => {
    timeoutRef.current = setTimeout(() => {
      handlePopoverClose();
    }, 200); // 200ms delay before closing
  };

  const handlePopoverContentEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  
  const openPopover = Boolean(anchorEl);

  // --- NEW --- Component for the animated mobile drawer menu
  const MobileDrawer = (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: '75%',
          maxWidth: '300px',
          bgcolor: 'rgba(255, 255, 255, 0.5)', 
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <motion.div
        variants={drawerListVariants}
        initial="hidden"
        animate="visible"
        style={{ flexGrow: 1 }}
      >
        <List>
          {/* Mapping main nav links */}
          {[{ name: 'Accueil', path: '/' }, { name: 'A Propos', path: '/a propos' }].map((item) => (
            <motion.div key={item.name} variants={drawerItemVariants}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleNavigate(item.path)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
          
          {/* --- NEW --- Collapsible services list for mobile */}
          <motion.div variants={drawerItemVariants}>
            <ListItemButton onClick={() => setServicesListOpen(!servicesListOpen)}>
              <ListItemText primary="Nos Services" />
              {servicesListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </motion.div>

          <Collapse in={servicesListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {services.map((service) => (
                <motion.div key={service.name} variants={drawerItemVariants}>
                   <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate(service.path)}>
                    <ListItemIcon sx={{ minWidth: '40px' }}>{service.icon}</ListItemIcon>
                    <ListItemText primary={service.name} />
                  </ListItemButton>
                </motion.div>
              ))}
            </List>
          </Collapse>
        </List>

        {/* --- NEW --- Contact button styled at the bottom */}
        <Box sx={{ p: 2, mt: 'auto' }}>
            <motion.div variants={drawerItemVariants}>
                <Button 
                    variant="contained" 
                    fullWidth 
                    onClick={() => handleNavigate('/contact')}
                >
                    Contactez-nous
                </Button>
            </motion.div>
        </Box>
      </motion.div>
    </Drawer>
  );

  // --- NEW --- Component for the desktop navigation links
  const DesktopNav = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button color="primary" component={Link} to="/" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
        Accueil
      </Button>
      
      
      <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <Button
          aria-owns={openPopover ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          color="primary"
          endIcon={<KeyboardArrowDown sx={{ transform: openPopover ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />}
          sx={{ fontWeight: 'bold', fontSize: '1rem' }}
        >
          Nos Services
        </Button>
        <Popover
          id="mouse-over-popover"
          open={openPopover}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          disableScrollLock={true} 
          // --- MODIFIED ---: Added mouse handlers to the Popover's Paper component
          PaperProps={{
            onMouseEnter: handlePopoverContentEnter,
            onMouseLeave: handlePopoverLeave,
            sx: {
              overflow: 'visible',
              pointerEvents: 'auto',
              marginTop: '10px',
              bgcolor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(15px)',
              borderRadius: '12px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            },
          }}
        >
          <motion.div variants={popoverListVariants} initial="hidden" animate="visible">
            <List sx={{ p: 1 }}>
              {services.map((service) => (
                <motion.div key={service.name} variants={popoverItemVariants}>
                  <ListItem disablePadding>
                    <ListItemButton 
                      onClick={() => handleNavigate(service.path)}
                      sx={{
                        borderRadius: '8px',
                        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          '& .MuiListItemIcon-root': { color: 'white' },
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: 'primary.main', transition: 'color 0.2s ease-in-out' }}>
                        {service.icon}
                      </ListItemIcon>
                      <ListItemText primary={service.name} />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </motion.div>
        </Popover>
      </Box>

      <Button color="primary" component={Link} to="/a propos" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
        A Propos
      </Button>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/contact"
        sx={{ ml: 2, fontSize: '1rem' }}
      >
        Contactez-nous
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'rgba(255, 255, 255, 0.79)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link to="/">
            <Box component="img" sx={{ height: 80, cursor: 'pointer' }} alt="Expertisys Logo" src={logo} />
          </Link>

          {/* --- NEW --- Conditional rendering based on screen size */}
          {isMobile ? (
            <>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="end"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
              {MobileDrawer}
            </>
          ) : (
            DesktopNav
          )}

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;