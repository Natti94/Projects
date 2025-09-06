function CV() {
  const isProd = import.meta.env.PROD;
  const imagesLink = {
    CV: isProd ? "/api/getAsset?asset=CV" : import.meta.env.VITE_CLOUDINARY_CV,
  };
  return (
    <div className="cv-page">
      <img src={imagesLink.CV} alt="My CV" />
    </div>
  );
}
export default CV;
