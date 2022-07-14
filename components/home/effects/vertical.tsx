import ButtonHome from "../../button/button_home"

export default function Vertical(props: any) {
    const { pathImg, nameBtn } = props
    return (
        <div className="content-work">
            <img className="bg" src={pathImg} />
            <ButtonHome href="" title={nameBtn} target="" />
        </div>
    )
}