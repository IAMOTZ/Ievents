import jwt from 'jsonwebtoken';
import db from '../models';

const { events } = db;

export const isUser = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRETE, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          status: 'failed',
          message: 'Failed to authenticate token',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      status: 'failed',
      message: 'No access-token provided',
    });
  }
};

export const isAdmin = (req, res, next) => {
  const { role } = req.decoded;
  if (role.toLowerCase() === 'admin' || role.toLowerCase() === 'superadmin') {
    next();
  } else {
    res.status(401).json({
      status: 'failed',
      message: 'You are unauthorized to perform this action',
    });
  }
};

export const isSuperAdmin = (req, res, next) => {
  const { role } = req.decoded;
  if (role.toLowerCase() === 'superadmin') {
    next();
  } else {
    res.status(401).json({
      status: 'failed',
      message: 'You are unauthorized to perform this action',
    });
  }
}

export const isEventOwner = async (req, res, next) => {
  const userId = req.decoded.id;
  const eventId = req.params.id;
  const event = await events.findById(Number(eventId));
  if (!event) {
    return res.status(400).json({
      status: 'failed',
      message: 'event does not exist',
    });
  } else if (event.userId !== userId) {
    res.status(401).json({
      status: 'failed',
      message: 'Unauthorised to perform this action',
    });
  } else {
    res.locals.event = event;
    next();
  }
}