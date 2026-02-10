import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CityRegularDuotone = memo(
  forwardRef<SVGSVGElement, CityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-duotone" {...props}>
      <path fill="currentColor" d="m16.67 8.75-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22q-.01 0-.04.22l-.01.76v9.25h-1.5V14a11 11 0 0 0-.06-.98.5.5 0 0 0-.22-.22l-.21-.04-.76-.01h-1.34l-.76.01-.21.04a.5.5 0 0 0-.22.22q-.01 0-.04.22-.02.24-.02.76v5.25h-1.5V6a11 11 0 0 0-.05-.98.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01H6l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v13.25h-1.5V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02h1.33q.51 0 .89.02t.77.2q.58.3.88.87c.13.26.17.52.2.78l.01.88v5.32l.37-.05q.38-.02.88-.02h1.34q.5 0 .88.02.18.01.37.05V10q0-.52.02-.88.01-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.36-.02.88-.02H18q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v9.25h-1.5V10a11 11 0 0 0-.05-.98.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L18 8.75z" opacity={.4} />
        <path fill="currentColor" d="M5.92 8V7a.75.75 0 1 1 1.5 0v1a.75.75 0 0 1-1.5 0M5.92 12v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M16.58 12v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M5.92 16v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M11.25 16v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M16.58 16v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0M21 19.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CityRegularDuotone.displayName = 'CityRegularDuotone';

// Triple export pattern (lucide-react style)
export { CityRegularDuotone, CityRegularDuotone as CityRegularDuotoneIcon, CityRegularDuotone as SiCityRegularDuotone };
export default CityRegularDuotone;
export type { CityRegularDuotoneProps };
