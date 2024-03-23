/* eslint-disable react/prop-types */
export function TextLimiter({text, limit}) {
    const textLimited = text.length > limit ? `${text.substring(0, limit)}...` : text
    return <p>{textLimited}</p>
}