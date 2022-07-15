import ButtonHome from "../../button/button_home"

export default function Vertical(props: any) {
    const { pathImgDark, pathImgLight, nameBtn } = props
    return (
        <div className="content-work">
            <img className="bg img-service light" src={pathImgLight} />
            <img className="bg img-service dark" src={pathImgDark} />
            <ButtonHome href="" title={nameBtn} target="" />
        </div>
    )
}