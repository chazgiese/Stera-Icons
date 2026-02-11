import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityRegularProps = Omit<IconBaseProps, 'children'>;

const CityRegular = memo(
  forwardRef<SVGSVGElement, CityRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="city" {...props}>
      <path d="M6.67 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.33-.75.75-.75M6.67 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.33-.75.75-.75M6.67 6.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V7c0-.41.33-.75.75-.75M12 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M17.33 14.25c.42 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M17.33 10.25c.42 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M7.33 3.25q.51 0 .89.02t.77.2q.58.3.88.87c.13.26.17.52.2.78l.01.88v5.32l.37-.05q.38-.02.88-.02h1.34q.5 0 .88.02.18.01.37.05V10q0-.52.02-.88.01-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.36-.02.88-.02H18q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v9.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.25V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM6 4.75l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v13.25h3.83V6a11 11 0 0 0-.05-.98.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01zm5.33 8-.76.01-.21.04a.5.5 0 0 0-.22.22q-.01 0-.04.22-.02.24-.02.76v5.25h3.84V14a11 11 0 0 0-.06-.98.5.5 0 0 0-.22-.22l-.21-.04-.76-.01zm5.34-4-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22q-.01 0-.04.22l-.01.76v9.25h3.83V10a11 11 0 0 0-.05-.98.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L18 8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CityRegular.displayName = 'CityRegular';

// Triple export pattern (lucide-react style)
export { CityRegular, CityRegular as CityRegularIcon, CityRegular as SiCityRegular };
export default CityRegular;
export type { CityRegularProps };
