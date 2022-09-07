import SendgridClient from '@sendgrid/client'

export class Sendgrid {
  public static get client () {
    if (!process.env.SENDGRID_API_KEY || process.env.SENDGRID_API_KEY === '') {
      throw new Error(`Environment variable 'SENDGRID_API_KEY' is not present`)
    }
    SendgridClient.setApiKey(process.env.SENDGRID_API_KEY)
    return SendgridClient
  }

  public static listIds = {}

  public static customFieldIds = {}
}
