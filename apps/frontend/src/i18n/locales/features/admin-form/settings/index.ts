import { EmailNotifications } from './email-notifications'
import { General } from './general'
import { Payments } from './payments'
import { Webhooks } from './webhooks'

export * from './en-sg'

export type HasTitle = {
  title: string
}

export interface SecretKeyFormStrings {
  errors: {
    invalidFile: string
    invalidKey: string
  }
}

export interface SettingsMutationsStrings {
  missingFormId: string
  formStatus: {
    openStorageMode: string
    open: string
    closed: string
  }
  submissionLimit: {
    withOrdinal: string
    removed: string
  }
  multiLang: {
    enabled: string
    disabled: string
  }
  supportedLanguages: {
    selectable: string
    hidden: string
  }
  saveDraft: {
    enabled: string
    disabled: string
  }
  captcha: {
    enabled: string
    disabled: string
  }
  issueNotification: {
    enabled: string
    disabled: string
  }
  formTitleUpdated: string
  inactiveMessageUpdated: string
  emailsUpdated: string
  esrvcIdUpdated: string
  authType: {
    enabled: string
    disabled: string
    updated: string
  }
  submitterId: {
    enabled: string
    disabled: string
  }
  singleSubmission: {
    enabled: string
    disabled: string
  }
  whitelist: {
    uploaded: string
    removed: string
  }
  webhookUrl: {
    updated: string
    removed: string
  }
  webhookRetries: {
    enabled: string
    disabled: string
  }
  businessInfoUpdated: string
  gstUpdated: string
}

export interface Settings {
  general: General
  singpass: HasTitle
  secretKey: SecretKeyFormStrings
  mutations: SettingsMutationsStrings
  emailNotifications: EmailNotifications
  webhooks: Webhooks
  payments: Payments
}
