import React from 'react'

const MenuCarousal = () => {
  return (
    <div className="flex overflow-x-auto space-x-4">
    {images.map((imageUrl, index) => (
      <img key={index} src={imageUrl} alt={`Image ${index}`} className="w-64 h-40 object-cover" />
    ))}
  </div>
  )
}

export default MenuCarousal