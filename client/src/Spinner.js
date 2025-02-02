import React from 'react'
export const Spinner = () => {
    return (
        <div className="columns is-centered">
            <svg svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.0" width="32px" height="32px" viewBox="0 0 128 128" space="preserve"><g><circle cx="16" cy="64" r="16" fill="#000000" fillOpacity="1"/><circle cx="16" cy="64" r="16" fill="#555555" fillOpacity="0.67" transform="rotate(45,64,64)"/><circle cx="16" cy="64" r="16" fill="#949494" fillOpacity="0.42" transform="rotate(90,64,64)"/><circle cx="16" cy="64" r="16" fill="#cccccc" fillOpacity="0.2" transform="rotate(135,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" fillOpacity="0.12" transform="rotate(180,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" fillOpacity="0.12" transform="rotate(225,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" fillOpacity="0.12" transform="rotate(270,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" fillOpacity="0.12" transform="rotate(315,64,64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="960ms" repeatCount="indefinite"></animateTransform></g></svg>
        </div>
    )
}