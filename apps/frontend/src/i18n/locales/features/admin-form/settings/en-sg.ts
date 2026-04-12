import { enSG as emailNotifications } from './email-notifications'
import { enSG as general } from './general'
import { enSG as payments } from './payments'
import { enSG as webhooks } from './webhooks'

export const enSG = {
  general,
  singpass: {
    title: 'Singpass',
  },
  secretKey: {
    errors: {
      invalidFile: 'Selected file seems to be invalid',
      invalidKey: 'The secret key provided is invalid',
    },
  },
  mutations: {
    missingFormId: 'No form ID was provided.',
    formStatus: {
      openStorageMode:
        'Your form is now open.\n\nStore your secret key in a safe place. If you lose your secret key, all your responses will be lost permanently.',
      open: 'Your form is now open.',
      closed: 'Your form is closed to new responses.',
    },
    submissionLimit: {
      withOrdinal:
        'Your form will now automatically close on the {{ordinal}} submission.',
      removed: 'The submission limit on your form is removed.',
    },
    multiLang: {
      enabled:
        'Multi-language enabled. Respondents can now select other languages to view your form in.',
      disabled: 'Multi-language disabled.',
    },
    supportedLanguages: {
      selectable:
        'Respondents will now be able to select and view your form in {{language}}.',
      hidden:
        '{{language}} is now hidden. Respondents will not be able to see it.',
    },
    saveDraft: {
      enabled: 'Saving of draft responses is now enabled on your form.',
      disabled: 'Saving of draft responses is now disabled on your form.',
    },
    captcha: {
      enabled: 'reCAPTCHA is now enabled on your form.',
      disabled: 'reCAPTCHA is now disabled on your form.',
    },
    issueNotification: {
      enabled:
        'Email notifications for issues reported are now enabled on your form.',
      disabled:
        'Email notifications for issues reported are now disabled on your form.',
    },
    formTitleUpdated: "Your form's title has been updated.",
    inactiveMessageUpdated: "Your form's inactive message has been updated.",
    emailsUpdated: 'Emails successfully updated.',
    esrvcIdUpdated: 'E-service ID successfully updated.',
    authType: {
      enabled: 'Singpass authentication successfully enabled.',
      disabled: 'Singpass authentication successfully disabled.',
      updated: 'Singpass authentication successfully updated.',
    },
    submitterId: {
      enabled: 'NRIC/FIN/UEN collection is now enabled on your form.',
      disabled: 'NRIC/FIN/UEN collection is now disabled on your form.',
    },
    singleSubmission: {
      enabled:
        'Single submission per NRIC/FIN/UEN is now enabled on your form.',
      disabled:
        'Single submission per NRIC/FIN/UEN is now disabled on your form.',
    },
    whitelist: {
      uploaded: 'Your CSV has been uploaded successfully.',
      removed: 'Your CSV has been removed successfully.',
    },
    webhookUrl: {
      updated: 'Webhook URL successfully updated.',
      removed: 'Webhook URL successfully removed.',
    },
    webhookRetries: {
      enabled: 'Webhook retries have been enabled.',
      disabled: 'Webhook retries have been disabled.',
    },
    businessInfoUpdated: 'Business information has been updated.',
    gstUpdated: 'GST setting has been updated.',
  },
  emailNotifications,
  webhooks,
  payments,
}
