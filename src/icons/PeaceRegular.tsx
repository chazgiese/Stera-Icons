import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceRegularProps = Omit<IconBaseProps, 'children'>;

const PeaceRegular = memo(
  forwardRef<SVGSVGElement, PeaceRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5M6.72 18.34a8.2 8.2 0 0 0 4.53 1.87v-6.4zm6.03 1.87a8 8 0 0 0 4.53-1.87l-4.53-4.53zM11.25 3.8a8.25 8.25 0 0 0-5.59 13.49l5.59-5.6zm1.5 7.9 5.59 5.59a8.25 8.25 0 0 0-5.59-13.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceRegular.displayName = 'PeaceRegular';

// Triple export pattern (lucide-react style)
export { PeaceRegular, PeaceRegular as PeaceRegularIcon, PeaceRegular as SiPeaceRegular };
export default PeaceRegular;
export type { PeaceRegularProps };
