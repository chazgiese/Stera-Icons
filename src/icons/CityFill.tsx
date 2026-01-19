import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CityFillProps = Omit<IconBaseProps, 'children'>;

const CityFill = memo(
  forwardRef<SVGSVGElement, CityFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.4 3q.4 0 .74.02c.23.02.5.06.77.2a2 2 0 0 1 .8.73l.07.14.09.2q.1.3.11.57.02.34.02.74v5.41l.6-.01h2.8l.6.01V9.6q0-.4.02-.74.01-.36.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2Q16.2 7 16.6 7h2.8q.4 0 .74.02.36.01.77.2a2 2 0 0 1 .8.73l.07.14.09.2q.1.3.11.57.02.34.02.74V19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V5.6q0-.4.02-.74c.02-.23.06-.5.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2Q4.2 3 4.6 3zM6 14.25a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m6 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m6 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-12-4a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m12 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-12-4a.75.75 0 0 0-.75.75v1a.75.75 0 1 0 1.5 0V7A.75.75 0 0 0 6 6.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CityFill.displayName = 'CityFill';

// Triple export pattern (lucide-react style)
export { CityFill, CityFill as CityFillIcon, CityFill as SiCityFill };
export default CityFill;
export type { CityFillProps };
