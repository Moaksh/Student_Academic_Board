
import styles from '@/styles/card.module.css'

const Stat = () => {
    return (
        <div>
            <div className="flex items-center justify-center w-screen text-black">

                <div className="stats stats-vertical lg:stats-horizontal shadow ">

                    <div className="stat">
                        <div className="stat-title text-center">Total Students</div>
                        <div className="stat-value text-center">5,000+</div>
                        {/*<div className="stat-desc">Jan 1st - Feb 1st</div>*/}
                    </div>

                    <div className="stat">
                        <div className="stat-title text-center">Clubs and chapters</div>
                        <div className="stat-value text-center">20+</div>
                        {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                    </div>

                    <div className="stat">
                        <div className="stat-title text-center">Publications</div>
                        <div className="stat-value text-center">900+</div>
                        {/*<div className="stat-desc">↘︎ 90 (14%)</div>*/}
                    </div>

                </div>

            </div>

            {/*---------test---------*/}
            {/*<div className={styles.container}>*/}
            {/*    <div className={styles.card}>*/}
            {/*        <h3 className={styles.title}>Total Students</h3>*/}
            {/*        <div className={styles.bar}>*/}
            {/*            <div className={styles.emptybar}></div>*/}
            {/*            <div className={styles.filledbar}></div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.circle}>*/}
            {/*            <svg version="1.1" xmlns="<http://www.w3.org/2000/svg>">*/}
            {/*                <circle className={styles.stroke} cx="60" cy="60" r="50"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.card}>*/}
            {/*        <h3 className={styles.title}>Card 2</h3>*/}
            {/*        <div className={styles.bar}>*/}
            {/*            <div className={styles.emptybar}></div>*/}
            {/*            <div className={styles.filledbar}></div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.circle}>*/}
            {/*            <svg version="1.1" xmlns="<http://www.w3.org/2000/svg>">*/}
            {/*                <circle className={styles.stroke} cx="60" cy="60" r="50"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.card}>*/}
            {/*        <h3 className={styles.title}>Card 3</h3>*/}
            {/*        <div className={styles.bar}>*/}
            {/*            <div className={styles.emptybar}></div>*/}
            {/*            <div className={styles.filledbar}></div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.circle}>*/}
            {/*            <svg version="1.1" xmlns="<http://www.w3.org/2000/svg>">*/}
            {/*                <circle className={styles.stroke} cx="60" cy="60" r="50"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.card}>*/}
            {/*        <h3 className={styles.title}>Card 4</h3>*/}
            {/*        <div className={styles.bar}>*/}
            {/*            <div className={styles.emptybar}></div>*/}
            {/*            <div className={styles.filledbar}></div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.circle}>*/}
            {/*            <svg version="1.1" xmlns="<http://www.w3.org/2000/svg>">*/}
            {/*                <circle className={styles.stroke} cx="60" cy="60" r="50"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Stat;