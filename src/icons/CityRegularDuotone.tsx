import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CityRegularDuotone = memo(
  forwardRef<SVGSVGElement, CityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-duotone" {...props}>
      <path fill="currentColor" d="M7 3.25q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v5.32l.37-.05q.37-.02.88-.02h2q.51 0 .88.02.19.01.37.05V10q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.36-.02.88-.02h2q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v9.25h-1.5V10l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L19 8.75h-2l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v9.25h-1.5V14l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01h-2l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v5.25h-1.5V6l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L7 4.75H5l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v13.25h-1.5V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02z" opacity={.4} />
        <path fill="currentColor" d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM6 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M12 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 6.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CityRegularDuotone.displayName = 'CityRegularDuotone';

// Triple export pattern (lucide-react style)
export { CityRegularDuotone, CityRegularDuotone as CityRegularDuotoneIcon, CityRegularDuotone as SiCityRegularDuotone };
export default CityRegularDuotone;
export type { CityRegularDuotoneProps };
