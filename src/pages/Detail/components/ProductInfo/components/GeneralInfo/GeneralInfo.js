// Framework
import clsx from 'clsx';
import { useContext } from 'react';
import { DetailContext } from '@/contexts';

// Component
import Option from './components/Option';
import Price from '@/components/Price/';
import Promotion from './components/Promotion/';
import ProductPolicy from './components/ProductPolicy';

// Style
import styles from './General.module.scss';

function GeneralInfo() {
    const context = useContext(DetailContext);
    const { product, currCapacity } = context;

    return (
        <div className={clsx(styles.container)}>
            <div className="row ali-baseline jus-between">
                <p className={clsx(styles.title)}>{product.name},</p>

                <Price
                    className={'jus-end'}
                    price={currCapacity.price}
                    priceClass={clsx(styles.price)}
                    disCountClass={clsx(styles.discount)}
                    disCount={currCapacity.discount}
                />
            </div>

            <p className={clsx(styles.description)}>{product.description}</p>

            <Option />

            <Promotion />

            <ProductPolicy />
        </div>
    );
}

export default GeneralInfo;
