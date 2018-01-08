import express from 'express';
import handleImageUpload from './middlewares/fileUpload';
import controllers from './controllers/index';
import {
  isUser, isAdmin, isSuperAdmin, isEventOwner,
  validateSignUpInputs, validateSigninInputs,
  validateCreateAdminInputs, validateAddCenterInputs,
  validateUpdateCenterInputs, validateAddEventInputs,
  validateUpdateEventInputs,
} from './middlewares';

const router = express.Router();

router.post('/users',
  validateSignUpInputs,
  controllers.users.signup
);
router.post('/users/login',
  validateSigninInputs,
  controllers.users.signin,
);
router.post('/users/admin',
  isUser,
  isSuperAdmin,
  validateCreateAdminInputs,
  controllers.users.createAdmin
);
router.get('/centers',
  controllers.centers.getAll
);
router.get('/centers/:id',
  controllers.centers.getOne
);
router.get('/events',
  isUser,
  controllers.events.getAll
);
router.post('/events',
  isUser,
  validateAddEventInputs,
  controllers.events.create,
);
router.put('/events/:id',
  isUser,
  isEventOwner,
  validateUpdateEventInputs,
  controllers.events.update,
);
router.delete('/events/:id',
  isUser,
  isEventOwner,
  controllers.events.delete,
);
router.post('/centers',
  isUser,
  isAdmin,
  handleImageUpload(),
  validateAddCenterInputs,
  controllers.centers.create
);
router.put('/centers/:id',
  isUser,
  isAdmin,
  handleImageUpload(),
  validateUpdateCenterInputs,
  controllers.centers.update
);
router.get('/transactions',
  isUser,
  isAdmin,
  controllers.transactions.getAll
);
router.delete('/transactions/:id',
  isUser,
  isAdmin,
  controllers.transactions.delete
);

export default router;
