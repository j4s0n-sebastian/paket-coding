import React from 'react';

interface IProps {
    nama: string;
    kelas: string;
    isMorning: boolean;
}

class Info extends React.Component <IProps>{
    render() {
        return (
            <>
                <h3>nama: {this.props.nama}</h3>
                <h5>kelas: {this.props.kelas}</h5>
                <p>Pagi/Siang: {this.props.isMorning}</p>
            </>
        )
    }
}

export default Info;