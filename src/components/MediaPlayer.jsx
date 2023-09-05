export default function MediaPlayer({video}){
    return(
        <video autoPlay loop muted className="videoHolder">
            <source src = {video} type = "video/mp4" />
        </video>
    )
}