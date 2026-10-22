export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }: { strapi: any }) {
    // Memberikan log informasi koneksi MySQL saat Strapi start
    strapi.log.info('Backend Strapi terkoneksi dengan database MySQL (XAMPP).');
  },
}
