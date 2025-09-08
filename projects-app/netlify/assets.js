function assetHandler(event) {
  const assetPaths = {
    profile_icon: process.env.VITE_CLOUDINARY_PROFILE_ICON,
    tibiaOptimizer_link: process.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK,
    tibiaOptimizer_background:
      process.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
    tibiaOptimizer_icon: process.env.VITE_CLOUDINARY_TIBIA_ICON,
    chat_link: process.env.VITE_CLOUDINARY_CHAT_LINK,
    chat_icon: process.env.VITE_CLOUDINARY_CHAT_ICON,
    cv_link: process.env.VITE_CLOUDINARY_CV_LINK,
    cv_icon: process.env.VITE_CLOUDINARY_CV_ICON,
    gitHub_icon: process.env.VITE_CLOUDINARY_GITHUB_ICON,
    gitHub_link: process.env.VITE_CLOUDINARY_GITHUB_LINK,
    linkedIn_link: process.env.VITE_CLOUDINARY_LINKEDIN_LINK,
    linkedIn_icon: process.env.VITE_CLOUDINARY_LINKEDIN_ICON,
  };

  const { asset } = event.queryStringParameters;
  const url = assetPaths[asset];

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: `Asset '${asset}' not found or environment variable not set`,
      }),
    };
  }

  return {
    statusCode: 302,
    headers: {
      Location: url,
    },
    body: "",
  };
}

export { assetHandler };
