import querystring from 'querystring';

export default function handler(req, res) {
  const client_id = '579778cdb1a24df0b84b496fc7a5f33e'; // Your Spotify Client ID
  const redirect_uri = 'https://inst-377-project-sigma.vercel.app/concert-tool.html';
  const scope = 'user-top-read';

  const queryParams = querystring.stringify({
    response_type: 'token',
    client_id,
    scope,
    redirect_uri
  });

  res.redirect('https://accounts.spotify.com/authorize?' + queryParams);
}
