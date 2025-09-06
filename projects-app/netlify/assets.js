function assetHandler(event) {
  const assetPaths = {
    tibiaOptimizer_icon: process.env.VITE_CLOUDINARY_TIBIA_ICON,
    tibiaOptimizer_background:
      process.env.VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND,
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
