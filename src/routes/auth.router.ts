import express from 'express';

import * as auth from 'handlers/auth';
import { handleError, handleResponse } from 'helpers/response';

const router = express.Router();

router.post('/login', async (req, rep) => {
    const res = await auth.login(req.body);
    if (res.error) rep.status(res.error.status || 500);
    else if (res.data) rep.status(res.data.status || 200);
    rep.json(res);
});

export default router;