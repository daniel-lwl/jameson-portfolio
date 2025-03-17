const GalleryPhoto = ({ photo }) => {
    return (
      <Card className="border-2 border-gray-700 overflow-hidden">
        <div className={`relative ${photo.aspectRatio} w-full h-full group`}>
          <img 
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Hover overlay with photo info */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white text-sm">{photo.alt}</p>
          </div>
        </div>
      </Card>
    );
  };
  
export default PhotoGrid;