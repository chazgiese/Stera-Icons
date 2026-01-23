import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CityBoldDuotone = memo(
  forwardRef<SVGSVGElement, CityBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-bold-duotone" {...props}>
      <path fill="currentColor" d="M7 3q.5 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.02.4.02.9v5.03h.1q.4-.04.9-.03h2q.5 0 .9.02l.1.01V10q0-.5.02-.9.01-.41.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17.4-.02.9-.02h2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v9h-2v-9l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L19 9h-2l-.87.03a.3.3 0 0 0-.1.1l-.02.13L16 10v9h-2v-5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L13 13h-2l-.87.03a.3.3 0 0 0-.1.1l-.02.13L10 14v5H8V6l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L7 5H5l-.87.03a.3.3 0 0 0-.1.1l-.02.13L4 6v13H2V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q4.5 3 5 3z" opacity={.4} />
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM6 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M12 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 6.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CityBoldDuotone.displayName = 'CityBoldDuotone';

// Triple export pattern (lucide-react style)
export { CityBoldDuotone, CityBoldDuotone as CityBoldDuotoneIcon, CityBoldDuotone as SiCityBoldDuotone };
export default CityBoldDuotone;
export type { CityBoldDuotoneProps };
