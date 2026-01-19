import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CityRegularProps = Omit<IconBaseProps, 'children'>;

const CityRegular = memo(
  forwardRef<SVGSVGElement, CityRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="city" {...props}>
      <path fill="currentColor" d="M6 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M6 6.25c.41 0 .75.34.75.75v1a.75.75 0 1 1-1.5 0V7c0-.41.34-.75.75-.75M12 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M18 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M7 3.25q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v5.32l.37-.05q.37-.02.88-.02h2q.51 0 .88.02.19.01.37.05V10q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.36-.02.88-.02h2q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v9.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zm-2 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v13.25h4.5V6l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L7 4.75zm6 8-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v5.25h4.5V14l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01zm6-4-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v9.25h4.5V10l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L19 8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CityRegular.displayName = 'CityRegular';

// Triple export pattern (lucide-react style)
export { CityRegular, CityRegular as CityRegularIcon, CityRegular as SiCityRegular };
export type { CityRegularProps };
