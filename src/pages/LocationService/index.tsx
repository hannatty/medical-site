import styles from './styles.module.scss';
import Image from 'next/image';
import phone_icon from '../../../public/phone.png';
import location_icon from '../../../public/location.png';

export function LocationService(){
    return(
        <div className={styles.principal_container}>
            <h1>Locais de Atendimento</h1>
            <div className={styles.general_container}>
                <div className={styles.location_item}>
                    <h3>Hospital Santa Joana</h3>
                    <div className={styles.info_line}>
                        <Image src={phone_icon} alt='ícone de telefone' className={styles.icon_style}/>
                        <span><a href="tel:+558199412-8222 " className={styles.phone_link}>(81) 99412-8222 </a></span>
                    </div>
                    <div className={styles.info_line}>
                        <Image src={location_icon} alt='ícone de localicação' className={styles.icon_style}/>
                        <span>Rua Joaquim Nabuco, 200, Graças</span>
                    </div>
                    <section className={styles.map_section}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4844626658414!2d-34.90075762552769!3d-8.05196319197539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18e6525d01d1%3A0xa91b6efdb157ec24!2sHospital%20Santa%20Joana%20Recife!5e0!3m2!1spt-BR!2sbr!4v1682962006739!5m2!1spt-BR!2sbr" 
                    width="250" height="250"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                <div className={styles.location_item}>
                    <h3> Unidade de Otorrino do Derby</h3>
                    <div className={styles.info_line}>
                        <Image src={phone_icon} alt='ícone de telefone' className={styles.icon_style}/>
                        <span><a href="tel:+558130333600" className={styles.phone_link}> (81) 3033-3600</a></span>
                    </div>
                    <div className={styles.info_line}>
                        <Image src={location_icon} alt='ícone de localicação' className={styles.icon_style}/>
                        <span>Praça do Derby, 149, Sala 901</span>
                    </div>
                    <section className={styles.map_section}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4297935413488!2d-34.90173012512726!3d-8.057566091969976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18ec71393ef9%3A0xa591d2f825d1fa67!2sUnidade%20de%20Otorrino%20-%20UNO%20DERBY!5e0!3m2!1spt-BR!2sbr!4v1682968271209!5m2!1spt-BR!2sbr" 
                    width="250" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
                <div className={styles.location_item}>
                    <h3> CPO</h3>
                    <div className={styles.info_line}>
                        <Image src={phone_icon} alt='ícone de telefone' className={styles.icon_style}/>
                        <span><a href="tel:+55813222-6565" className={styles.phone_link}>(81) 3222-6565</a></span>
                    </div>
                    <div className={styles.info_line}>
                        <Image src={location_icon} alt='ícone de localicação' className={styles.icon_style}/>
                        <span>Rua José de Alencar, 871, Boa Vista</span>
                    </div>
                    <section className={styles.map_section}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.352382965872!2d-34.8947044251271!3d-8.065493091962301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18cf71977fa7%3A0x377afe0435acfdb5!2sCPO%20Oncologia!5e0!3m2!1spt-BR!2sbr!4v1682968203171!5m2!1spt-BR!2sbr" 
                    width="250" height="250"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
            </div>
    </div>
    )
}