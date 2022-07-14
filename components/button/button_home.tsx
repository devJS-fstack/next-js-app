export default function ButtonHome(props: any) {
    const { href, title = "", target = "" } = props
    return (
        <a href={href} className="button-custom" target={target}>
            <p>{title}</p>
            <svg id="Arrow.7" xmlns="http://www.w3.org/2000/svg" width="18.256" height="18.256" viewBox="0 0 18.256 18.256" style={{ transition: "0.3s" }}>
                <g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
                    <path id="Path_10" data-name="Path 10" d="M14.581,7.05,7.05,14.581" transform="translate(-7.05 -7.012)" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    <path id="Path_11" data-name="Path 11" d="M10,7l5.287.037.038,5.287" transform="translate(-7.756 -7)" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                </g>
            </svg>
        </a>
    )
}