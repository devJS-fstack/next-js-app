import ButtonHome from "../../button/button_home"

export default function Talk() {
    return (
        <div className="content-text">
            <div className="content-title">
                <h2>Let's create something special with me!</h2>
                <p>I accept freelance job, collaborating with companies, startups.</p>
            </div>
            <div className="content-cta">
                <ButtonHome href="" title="Let's talk" target="_blank" />
                <p className="date">
                    Current time in VietNam
                    <span id="digital-clock" className="count" style={{ fontSize: "24px", color: "rgb(13, 17, 23)", fontWeight: "700", paddingLeft: 5 }}>
                        3:30
                    </span>
                </p>
            </div>
        </div>
    )
}
