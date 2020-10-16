const defaults = {
  context: {
    groupId: "acct_123",
  },
};

export default {
  accountCreated: {
    event: "Account Created",
    data: {
      account_name: "Initech",
    },
    ...defaults,
  },

  accountDeleted: {
    event: "Account Deleted",
    data: {
      account_name: "Initech",
    },
    ...defaults,
  },
  signedUp: {
    event: "Signed Up",
    data: {
      type: "organic",
      first_name: "Peter",
      last_name: "Gibbons",
      email: "pgibbons@initech.com",
      phone: "410-555-9412",
      username: "pgibbons",
      title: "Mr",
    },
    ...defaults,
  },
  signedIn: {
    event: "Signed In",
    data: {
      username: "pgibbons",
    },
    ...defaults,
  },
  signedOut: {
    event: "Signed Out",
    data: {
      username: "pgibbons",
    },
    ...defaults,
  },
  inviteSent: {
    event: "Invite Sent",
    data: {
      invitee_email: "pgibbons@gmail.com",
      invitee_first_name: "Peter",
      invitee_last_name: "Gibbons",
      invitee_role: "Owner",
    },
    ...defaults,
  },
  accountAddedUser: {
    event: "Account Removed User",
    data: {
      role: "Owner",
    },
    ...defaults,
  },
  trialStarted: {
    event: "Trial Started",
    data: {
      trial_start_date: 1535429387,
      trial_end_date: 1535429387,
      trial_plan_name: "Business",
    },
    ...defaults,
  },
  trialEnded: {
    event: "Trial Ended",
    data: {
      trial_start_date: 1535429387,
      trial_end_date: 1535429387,
      trial_plan_name: "Business",
    },
    ...defaults,
  },
};
