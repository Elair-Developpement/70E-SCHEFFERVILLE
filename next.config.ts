import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/accueil",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL(
        "https://uouggeatockafepbvzzy.supabase.co/storage/v1/object/public/70e/press/images/**"
      ),
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
