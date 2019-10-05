import React from 'react'
import StyledTitle from '../StyledTitle'
import styles from '../../css/contact.module.css'



const Contact = () => {
    return (
        <section className={styles.contact}>
            <StyledTitle title="Contact" subtitle="us"/>
            <div className={styles.center}>
                <form className={styles.form}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="john smith"
                        />
                    </div>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="email@email.com"
                        />
                    </div>
                    <label htmlFor="message">Message</label>
                   <textarea 
                   name="message" 
                   id="message"
                   rows="10"
                   className={styles.formControl}
                   placeholder="hello there"
                   />
                   <div>
                       <input type="submit" value="submit here" className={styles.submit} />
                   </div>
                </form>
            </div>

        </section>
    )
}

export default Contact
