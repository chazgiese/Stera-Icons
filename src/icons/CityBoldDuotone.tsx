import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CityBoldDuotone = memo(
  forwardRef<SVGSVGElement, CityBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-bold-duotone" {...props}>
      <path fill="currentColor" d="m16.67 9-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v9h-2v-5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01h-1.34l-.87.03a.3.3 0 0 0-.1.1l-.01.13c-.02.16-.02.37-.02.74v5h-2V6l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L7.33 5H6l-.87.03a.3.3 0 0 0-.1.1l-.02.13L5 6v13H3V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q5.5 3 6 3h1.33q.52 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.83.9.2.46.22.87t.02.9v5.03h.1q.4-.04.9-.03h1.34q.5 0 .9.02l.1.01V10q0-.5.02-.9.01-.41.22-.87l.09-.16q.34-.54.9-.82l.1-.06q.41-.14.76-.17.4-.02.9-.02H18q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v9h-2v-9l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L18 9z" opacity={.4} />
        <path fill="currentColor" d="M5.92 8V7a.75.75 0 1 1 1.5 0v1a.75.75 0 0 1-1.5 0M5.92 12v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M16.58 12v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M5.92 16v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M11.25 16v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M16.58 16v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M21 19a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

CityBoldDuotone.displayName = 'CityBoldDuotone';

// Triple export pattern (lucide-react style)
export { CityBoldDuotone, CityBoldDuotone as CityBoldDuotoneIcon, CityBoldDuotone as SiCityBoldDuotone };
export default CityBoldDuotone;
export type { CityBoldDuotoneProps };
