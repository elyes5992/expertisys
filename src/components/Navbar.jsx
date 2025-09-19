import React, { useState, useRef } from 'react';
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
  useTheme, 
  useMediaQuery, 
  IconButton, 
  Drawer, 
  Collapse,
  Divider
} from '@mui/material';
// --- MODIFIED --- Import useLocation
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Import Icons ---
import logo from '../assets/logo7.png'; 
import { KeyboardArrowDown, ExpandLess, ExpandMore } from '@mui/icons-material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import LanIcon from '@mui/icons-material/Lan';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// --- services array (no changes) ---
const services = [
  { name: 'Ingénierie Mécanique Dynamique', path: '/services/mecanique-dynamique', icon: <SyncAltIcon /> },
  { name: 'Ingénierie Mécanique Statique', path: '/services/mecanique-statique', icon: <ArchitectureIcon /> },
  { name: 'Telco, IT & Cybersécurité', path: '/services/telco-cybersecurite', icon: <LanIcon /> },
];

// --- Animation variants (no changes) ---
const popoverListVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const popoverItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const drawerListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const drawerItemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [servicesListOpen, setServicesListOpen] = useState(false);

  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  // --- NEW --- Detect if we are on the home page
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // --- handlers (no changes) ---
  const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);
  const handleNavigate = (path) => {
    navigate(path);
    handlePopoverClose();
    setIsDrawerOpen(false);
  };
   const handlePopoverLeave = () => {
    timeoutRef.current = setTimeout(() => {
      handlePopoverClose();
    }, 200);
  };
  const handlePopoverContentEnter = () => clearTimeout(timeoutRef.current);
  const openPopover = Boolean(anchorEl);

  // --- MobileDrawer (no changes required here) ---
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
          {[{ name: 'Accueil', path: '/' }, { name: 'A Propos', path: '/a propos' }].map((item) => (
            <motion.div key={item.name} variants={drawerItemVariants}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleNavigate(item.path)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
          
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

  // --- DesktopNav (with conditional styles) ---
  const DesktopNav = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {/* --- MODIFIED --- All buttons now have conditional color */}
      <Button color={isHomePage ? 'inherit' : 'primary'} component={Link} to="/" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
        Accueil
      </Button>
      
      <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <Button
          aria-owns={openPopover ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          color={isHomePage ? 'inherit' : 'primary'}
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
          {/* Popover content does not need color changes */}
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

      <Button color={isHomePage ? 'inherit' : 'primary'} component={Link} to="/a propos" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
        A Propos
      </Button>

      {/* --- MODIFIED --- Contact button has conditional variant and color */}
      <Button
        variant={isHomePage ? 'outlined' : 'contained'}
        color={isHomePage ? 'inherit' : 'primary'}
        component={Link}
        to="/contact"
        sx={{ ml: 2, fontSize: '1rem' }}
      >
        Contactez-nous
      </Button>
    </Box>
  );

  return (
    // --- MODIFIED --- AppBar now has conditional styling
    <AppBar 
      // Use 'absolute' on home page to overlay hero, 'sticky' everywhere else
      position={isHomePage ? 'absolute' : 'sticky'} 
      sx={{
        // On Home: transparent, no shadow. Other pages: original style.
        bgcolor: isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.79)',
        backdropFilter: isHomePage ? 'none' : 'blur(10px)',
        boxShadow: isHomePage ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
        // On Home: white text/icons. Other pages: let components decide (defaults to primary).
        color: isHomePage ? 'white' : 'inherit',
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link to="/">
            <Box component="img" sx={{ height: 80, cursor: 'pointer' }} alt="Expertisys Logo" src={logo} />
          </Link>

          {isMobile ? (
            <>
              <IconButton
                // --- MODIFIED --- Hamburger icon color is now conditional
                color={isHomePage ? 'inherit' : 'primary'}
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