import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityFillProps = Omit<IconBaseProps, 'children'>;

const CityFill = memo(
  forwardRef<SVGSVGElement, CityFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.33 3.25q.51 0 .89.02t.77.2q.58.3.88.87c.13.26.17.52.2.78l.01.88v5.32l.37-.05q.38-.02.88-.02h1.34q.5 0 .88.02.18.01.37.05V10q0-.52.02-.88.01-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.36-.02.88-.02H18q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v9H21a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h.25V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zm-.66 11a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m5.33 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m5.33 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-10.66-4a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m10.66 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-10.66-4a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CityFill.displayName = 'CityFill';

// Triple export pattern (lucide-react style)
export { CityFill, CityFill as CityFillIcon, CityFill as SiCityFill };
export default CityFill;
export type { CityFillProps };
