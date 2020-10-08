import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import GoogleMapReact from 'google-map-react'
import styles from './Map.module.scss'


import { Location } from '../../interfaces/Location'

const LocationPin = ({ text }) => (
    <div className={styles.pin}>
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

export default function Map({ location, zoomLevel }) {
    return (
        <div className={styles.map}>
            <div className={styles.googleMap}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        // lat={location.lat}
                        // lng={location.lng}
                        text="Location"
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}