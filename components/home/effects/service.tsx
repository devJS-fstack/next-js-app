import ButtonHome from "../../button/button_home"

export default function MyService() {
    return (
        <div className="content-work">
            <img src="images/104.jpg" alt="" className="bg img-service light" />
            <img src="images/104-removebg-preview.png" alt="" className="bg img-service dark" />
            <ButtonHome href="service" title="Services" target="_blank" />
        </div>
    )
}