export const MusicElement = ({name:title, artist, listeners, image}) => {
  return (
    <div className="h-100 card">
      <div className="img-container d-flex justify-content-center align-items-center m-3">
        <img src={image[1]['#text']} className="w-75 card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <h5>{artist}</h5>
        <h6>{listeners}</h6>
      </div>
    </div>
  )
}
