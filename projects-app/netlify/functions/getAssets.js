const assetPaths = {

  mern_image: process.env.VITE_CLOUDINARY_MERN_IMAGE,
  tibiaOptimizer_link: process.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK,
  tibiaOptimizer_background:
    process.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
  tibiaOptimizer_icon: process.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_ICON,
  chat_link: process.env.VITE_CLOUDINARY_CHAT_LINK,
  chat_icon: process.env.VITE_CLOUDINARY_CHAT_ICON,
  cv_link: process.env.VITE_CLOUDINARY_CV_LINK,
  cv_icon: process.env.VITE_CLOUDINARY_CV_ICON,
  linkedIn_link: process.env.VITE_CLOUDINARY_LINKEDIN_LINK,
  linkedIn_icon: process.env.VITE_CLOUDINARY_LINKEDIN_ICON,
  mail_link: process.env.VITE_CLOUDINARY_MAIL_LINK,
  mail_icon: process.env.VITE_CLOUDINARY_MAIL_ICON,
  gitHub_icon: process.env.VITE_CLOUDINARY_GITHUB_ICON,
  gitHub_link: process.env.VITE_CLOUDINARY_GITHUB_LINK,
  discord_link: process.env.VITE_CLOUDINARY_DISCORD_LINK,
  discord_icon: process.env.VITE_CLOUDINARY_DISCORD_ICON,
};

exports.handler = async (event) => {
  const { asset } = event.queryStringParameters;

  if (!asset) {
    console.error("No asset parameter provided");
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Asset parameter is required" }),
    };
  }

  const url = assetPaths[asset];
  if (!url) {
    console.error(
      `Asset '${asset}' not found or environment variable not set. Available assets: ${Object.keys(
        assetPaths
      ).join(", ")}`
    );
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: `Asset '${asset}' not found or environment variable not set. Available assets: ${Object.keys(
          assetPaths
        ).join(", ")}`,
      }),
    };
  }

  console.log(`Redirecting to asset: ${url} for asset: ${asset}`);
  return {
    statusCode: 302,
    headers: {
      Location: url,
    },
    body: "",
  };
};
