import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';

import checkImage from '../Images/checkImage.png';

const Login: React.FC = () => {
  const styleForm = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    bgcolor: 'white',
  };
  return (
    <Grid container height="100vh" width="100vw" bgcolor="#c6d8ff">
      <Grid
        item
        md={7}
        sm={12}
        xs={false}
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box component="img" alt="Desenho-menina-marcando-um-botao-check" src={checkImage} width="70%" />
      </Grid>

      <Grid item md={5} sm={12} xs={12} alignItems="center" justifyContent="center" boxShadow={5}>
        <Box sx={styleForm}>
          <Avatar sx={{ bgcolor: '#4c80fc' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography variant="h4" margin={2} color="black">
            Faça seu login
          </Typography>

          <Box component="form" sx={{ marginRight: 2, marginLeft: 2 }}>
            <TextField margin="normal" type="email" id="email" label="Email" fullWidth />
            <TextField margin="normal" type="password" id="senha" label="Senha" fullWidth />
            <FormControlLabel
              sx={{ alignSelf: 'start', width: '100%' }}
              control={<Checkbox />}
              label="Permanecer conectado"
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{
              mb: 2,
              mt: 2,
              padding: '5px',
              borderRadius: '5px',
              width: '50%',
            }}
          >
            Login
            {/* Quando o botão login for pressionado,
            enviar uma mensagem de bem vindo para o usuario */}
          </Button>
          <Grid container justifyContent="space-around">
            <Grid item md={5} sm={8} xs={8}>
              <Link href="/Cadastro" variant="body2">
                Não tem uma conta? Cadastre-se
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
