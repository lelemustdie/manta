import * as React from "react"
const ArrowUp = (props: any) => (
    <svg
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="with-icon_icon__MHUeb"
        data-testid="geist-icon"
        shapeRendering="geometricPrecision"
        style={{
            color: "var(--geist-foreground)",
            width: 24,
            height: 24,
        }}
        {...props}
    >
        <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
)
export default ArrowUp
