import nc from 'next-connect';
import session from '../../../middleware/ironSession';
import { logout } from '../../../controllers/auth.controller';

const handler = nc({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end('internal server error');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('route is not found');
  },
  attachParams: true,
})
  .use(session)
  .get(logout);

export default handler;

//
