import { socialNetworks } from '@/static_content';

const SocialIcons = () => {
    return (
        <div className={'flex gap-6'}>
            {
                socialNetworks.map((networkS) => (
                    <a
                        className={`${networkS.name} text-2xl text-silver-n500 hover:text-silver-n900`}
                        href={networkS.url} key={networkS.id}
                        target="_blank"
                    >
                        {networkS.icon}
                    </a>
                ))
            }
        </div>
    );
};

export default SocialIcons;
