import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PeaceRegularProps = Omit<IconBaseProps, 'children'>;

const PeaceRegular = memo(
  forwardRef<SVGSVGElement, PeaceRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m-5.99 17.8a9.2 9.2 0 0 0 5.24 2.17v-7.4zm6.74 2.17c2-.16 3.8-.95 5.24-2.17l-5.24-5.24zm-1.5-18.44a9.25 9.25 0 0 0-6.3 15.2l6.3-6.29zm1.5 8.91 6.3 6.3a9.25 9.25 0 0 0-6.3-15.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceRegular.displayName = 'PeaceRegular';

// Triple export pattern (lucide-react style)
export { PeaceRegular, PeaceRegular as PeaceRegularIcon, PeaceRegular as SiPeaceRegular };
export type { PeaceRegularProps };
