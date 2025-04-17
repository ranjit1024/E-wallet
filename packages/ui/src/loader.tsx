import { Player } from "@lottiefiles/react-lottie-player";
import loader from "../../../apps/user/public/loader.json"
export default function(){
    return <div className="absolute  h-[100vh] w-[100vw] bg-blend-soft-light flex items-center bg-gray-100/60  justify-center z-10 overlay-10">
        <Player
        autoplay
        loop
        src={loader}
        style={{height:"50vh", width:'50vw'}}
        />
    </div>
}