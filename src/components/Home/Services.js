import React from 'react'
import StyledTitle from '../StyledTitle'
import styles from '../../css/services.module.css'
import services from '../../constants/services'


const Services = () => {
    return (
        <section className={styles.services}>
            <StyledTitle title="our" subtitle="services"/>
            <div className={styles.center}>
                {services.map((item,index)=>{
                    return(
                        <article key={index} className={styles.service}>
                                <span>{item.icon}</span>
                                <h4>{item.text}</h4>
                        </article>
                    )
                })}
            </div>
            
        </section>
    )
}

export default Services
