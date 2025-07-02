const Loader = ({ type }) => {
  const getImageSizeClass = () => {
    if (type === "Product") return "w-150 h-150"; // Bigger for Product
    return "w-20 h-20"; // Default size
  };

  const getImageSrc = () => {
    if (type === "Cart")
      return "https://assets-v2.lottiefiles.com/a/76623d28-4e37-11ef-87f5-03e9496a5cb5/PR2PeUMHrd.gif";
    if (type === "Product")
      return "https://cdn.dribbble.com/userupload/41859561/file/original-51ce9d70d8fd1b16b91b101ac71704ae.gif";
    return "https://i.gifer.com/ZZ5H.gif";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={getImageSrc()}
          alt="Loading..."
          className={`${getImageSizeClass()} object-contain`}
        />
        <h1 className="text-xl font-semibold text-gray-700 animate-pulse">
          {type !== "Product" && "Loading, please wait..."}
        </h1>
      </div>
    </div>
  );
};

export default Loader;
