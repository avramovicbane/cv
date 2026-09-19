import { BASE_PATH } from "@/lib/site-config";

/**
 * A decorative, purely abstract backdrop (an AI-generated colour-mesh
 * texture — it doesn't depict anything). Fixed behind all content at low
 * opacity so it reads as texture, not as a competing visual, in either
 * theme.
 */
export default function BackgroundImage() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-40 dark:opacity-25"
      style={{
        backgroundImage: `url(${BASE_PATH}/background.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    />
  );
}
