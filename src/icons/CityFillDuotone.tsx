import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CityFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CityFillDuotone = memo(
  forwardRef<SVGSVGElement, CityFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 3q.5 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.02.4.02.9v5.03h.1q.4-.04.9-.03h2q.5 0 .9.02l.1.01V10q0-.5.02-.9.01-.41.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17.4-.02.9-.02h2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v9H2V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q4.5 3 5 3zM6 14.25a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m6 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m6 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-12-4a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m12 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-12-4a.75.75 0 0 0-.75.75v1a.75.75 0 1 0 1.5 0V7A.75.75 0 0 0 6 6.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM6 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M12 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 6.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CityFillDuotone.displayName = 'CityFillDuotone';

// Triple export pattern (lucide-react style)
export { CityFillDuotone, CityFillDuotone as CityFillDuotoneIcon, CityFillDuotone as SiCityFillDuotone };
export type { CityFillDuotoneProps };
