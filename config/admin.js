module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8e97d4e32d3e441015005550c1cd7c5'),
  },
});
