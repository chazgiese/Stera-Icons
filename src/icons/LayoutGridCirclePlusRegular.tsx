import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutGridCirclePlusRegularProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusRegular = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-grid-circle-plus" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path fill="currentColor" d="M17.5 13.25c.41 0 .75.34.75.75v2.75H21a.75.75 0 0 1 0 1.5h-2.75V21a.75.75 0 0 1-1.5 0v-2.75H14a.75.75 0 0 1 0-1.5h2.75V14c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCirclePlusRegular.displayName = 'LayoutGridCirclePlusRegular';

// Triple export pattern (lucide-react style)
export { LayoutGridCirclePlusRegular, LayoutGridCirclePlusRegular as LayoutGridCirclePlusRegularIcon, LayoutGridCirclePlusRegular as SiLayoutGridCirclePlusRegular };
export default LayoutGridCirclePlusRegular;
export type { LayoutGridCirclePlusRegularProps };
