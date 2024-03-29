// Framework
import { memo } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import clsx from 'clsx';

// Component
import Button from '@/components/Button';
import Box from '@/components/Box';
import Popup from '@/components/Popup';
import CartItem from './CartItem';

// Style
import styles from './Cart.module.scss';

// Data
import { carts } from '@/data';

function Cart() {
    const tippyRender = (
        <Box
            title="Giỏ hàng của tôi"
            titleClass={clsx(styles.title)}
            showMore="Xem tất cả"
            showMoreClass={clsx(styles.showMore)}
            showMoreLink="/cart"
            headerClass={clsx(styles.header)}
            className={clsx(styles.items)}
        >
            {carts.map((cart) => (
                <CartItem data={cart} key={cart.title} />
            ))}
        </Box>
    );
    const tippyProp = {
        trigger: 'click',
    };

    return (
        <div className={clsx(styles.container)}>
            <Popup tippyProp={tippyProp} tippyRender={tippyRender} renderClass={styles.popup}>
                <Button leftIcon={<BsFillBagFill />} className={styles.button} />
            </Popup>
        </div>
    );
}

export default memo(Cart);
