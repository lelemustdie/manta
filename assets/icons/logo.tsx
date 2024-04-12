import * as React from "react"
const Logo = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={68}
        height={57}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <path
                fill="#EE2B37"
                fillRule="evenodd"
                d="M34.199.05 63.6 48.754 4.63 48.651l3.45-5.67 18.675.032 27.028.047-19.603-31.658-14.198 22.754-6.526-.011L34.199.05Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={66.972}
                height={56.703}
                x={0.629}
                y={0.051}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_11" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_11"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
export default Logo
