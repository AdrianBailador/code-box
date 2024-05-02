import Link from 'next/link';
import {socialNetworks} from '../static_content/index';

const SocialIcons = () => {
    return (
        <div style={{display: 'flex', gap: '1rem'}}>
            {
                socialNetworks.map((networkS) => (
                    <Link
                        className={networkS.name}
                        href={networkS.url} key={networkS.name}
                        target="_blank"
                    >
                        {networkS.icon}
                    </Link>
                ))
            }
        </div>
    );
};

export default SocialIcons;
