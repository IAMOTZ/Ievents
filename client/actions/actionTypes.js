// User action types
export const ADDING_USER_STARTED = 'ADDING_USER_STARTED';
export const ADDING_USER_RESOLVED = 'ADDING_USER_RESOLVED';
export const ADDING_USER_REJECTED = 'ADDING_USER_REJECTED';
export const STOP_ASYNC_ADDING_USER = 'STOP_ASYNC_ADDING_USER';

export const LOGGING_USER_STARTED = 'LOGGING_USER_STARTED';
export const LOGGING_USER_RESOLVED = 'LOGGING_USER_RESOLVED';
export const LOGGING_USER_REJECTED = 'LOGGING_USER_REJECTED';
export const STOP_ASYNC_LOGGING_USER = 'STOP_ASYNC_LOGGING_USER';
export const LOG_OUT = 'LOG_OUT';

export const ADDING_ADMIN_STARTED = 'ADDING_ADMIN_STARTED';
export const ADDING_ADMIN_RESOLVED = 'ADDING_ADMIN_RESOLVED';
export const ADDING_ADMIN_REJECTED = 'ADDING_ADMIN_REJECTED';
export const STOP_ASYNC_ADDING_ADMIN = 'STOP_ASYNC_ADDING_ADMIN';

export const CHANGING_PASSWORD_STARTED = 'CHANGING_PASSWORD_STARTED';
export const CHANGING_PASSWORD_RESOLVED = 'CHANGING_PASSWORD_RESOLVED';
export const CHANGING_PASSWORD_REJECTRED = 'CHANGING_PASSWORD_REJECTRED';
export const STOP_ASYNC_CHANGING_PASSWORD = 'STOP_ASYNC_CHANGING_PASSWORD';

export const DELETING_ACCOUNT_STARTED = 'DELETING_ACCOUNT_STARTED';
export const DELETING_ACCOUNT_RESOLVED = 'DELETING_ACCOUNT_RESOLVED';
export const DELETING_ACCOUNT_REJECTED = 'DELETING_ACCOUNT_REJECTED';
export const STOP_ASYNC_DELETING_ACCOUNT = 'STOP_ASYNC_DELETING_ACCOUNT';

// Center action types
export const FETCHING_CENTERS_STARTED = 'FETCHING_CENTERS_STARTED';
export const FETCHING_CENTERS_RESOLVED = 'FETCHING_CENTERS_RESOLVED';
export const FETCHING_CENTERS_REJECTED = 'FETCHING_CENTERS_REJECTED';
export const STOP_ASYNC_FETCHING_CENTERS = 'STOP_ASYNC_FETCHING_CENTERS';

export const ADDING_CENTER_STARTED = 'ADDING_CENTER_STARTED';
export const ADDING_CENTER_RESOLVED = 'ADDING_CENTER_RESOLVED';
export const ADDING_CENTER_REJECTED = 'ADDING_CENTER_REJECTED';
export const STOP_ASYNC_ADDING_CENTER = 'STOP_ASYNC_ADDING_CENTER';

export const UPDATING_CENTER_STARTED = 'UPDATING_CENTER_STARTED';
export const UPDATING_CENTER_RESOLVED = 'UPDATING_CENTER_RESOLVED';
export const UPDATING_CENTER_REJECTED = 'UPDATING_CENTER_REJECTED';
export const SET_CENTER_TO_UPDATE = 'SET_CENTER_TO_UPDATE';
export const SET_CENTER_TO_TRANSACT = 'SET_CENTER_TO_TRANSACT';
export const STOP_ASYNC_UPDATING_CENTER = 'STOP_ASYNC_UPDATING_CENTER';

// Event action types
export const FETCHING_EVENTS_STARTED = 'FETCHING_EVENTS_STARTED';
export const FETCHING_EVENTS_RESOLVED = 'FETCHING_EVENTS_RESOLVED';
export const FETCHING_EVENTS_REJECTED = 'FETCHING_EVENTS_REJECTED';
export const STOP_ASYNC_FETCHING_EVENTS = 'STOP_ASYNC_FETCHING_EVENTS';

export const ADDING_EVENT_STARTED = 'ADDING_EVENT_STARTED';
export const ADDING_EVENT_RESOLVED = 'ADDING_EVENT_RESOLVED';
export const ADDING_EVENT_REJECTED = 'ADDING_EVENT_REJECTED';
export const SET_CENTER_TO_BOOK = 'SET_CENTER_TO_BOOK';
export const STOP_ASYNC_ADDING_EVENT = 'STOP_ASYNC_ADDING_EVENT';

export const UPDATING_EVENT_STARTED = 'UPDATING_EVENT_STARTED';
export const UPDATING_EVENT_RESOLVED = 'UPDATING_EVENT_RESOLVED';
export const UPDATING_EVENT_REJECTED = 'UPDATING_EVENT_REJECTED';
export const SET_EVENT_TO_UPDATE = 'SET_EVENT_TO_UPDATE';
export const STOP_ASYNC_UPDATING_EVENT = 'STOP_ASYNC_UPDATING_EVENT';

export const DELETING_EVENT_STARTED = 'DELETING_EVENT_STARTED';
export const DELETING_EVENT_RESOLVED = 'DELETING_EVENT_RESOLVED';
export const DELETING_EVENT_REJECTED = 'DELETING_EVENT_REJECTED';
export const STOP_ASYNC_DELETING_EVENT = 'STOP_ASYNC_DELETING_EVENT';

// Transaction action types(Transactions are events that belong to the same center)
export const FETCHING_TRANSACTIONS_STARTED = 'FETCHING_TRANSACTIONS_STARTED';
export const FETCHING_TRANSACTIONS_RESOLVED = 'FETCHING_TRANSACTIONS_RESOLVED';
export const FETCHING_TRANSACTIONS_REJECTED = 'FETCHING_TRANSACTIONS_REJECTED';
export const STOP_ASYNC_FETCHING_TRANSACITONS = 'STOP_ASYNC_FETCHING_TRANSACITONS';

export const CANCELING_TRANSACTION_STARTED = 'CANCELING_TRANSACTION_STARTED';
export const CANCELING_TRANSACTION_RESOLVED = 'CANCELING_TRANSACTION_RESOLVED';
export const CANCELING_TRANSACTION_REJECTED = 'CANCELING_TRANSACTION_REJECTED';
export const STOP_ASYNC_CANCELING_TRANSACTION = 'STOP_ASYNC_CANCELING_TRANSACTION';
