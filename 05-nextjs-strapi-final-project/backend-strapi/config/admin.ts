export default ({ env }: { env: any }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'adminJwtSecretDefaultKey123'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'apiTokenSaltDefaultKey123'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'transferTokenSaltDefaultKey123'),
    },
  },
})
