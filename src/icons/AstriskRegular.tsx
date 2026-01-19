import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskRegularProps = Omit<IconBaseProps, 'children'>;

const AstriskRegular = memo(
  forwardRef<SVGSVGElement, AstriskRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk" {...props}>
      <path fill="currentColor" d="M12 1.25c.41 0 .75.34.75.75v8.7l7.54-4.35a.75.75 0 0 1 .75 1.3l-7.53 4.34 7.53 4.36a.75.75 0 0 1-.75 1.3l-7.54-4.36V22a.75.75 0 0 1-1.5 0v-8.7l-7.53 4.35a.75.75 0 0 1-.75-1.3l7.53-4.36-7.53-4.34a.75.75 0 0 1 .75-1.3l7.53 4.34V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AstriskRegular.displayName = 'AstriskRegular';

// Triple export pattern (lucide-react style)
export { AstriskRegular, AstriskRegular as AstriskRegularIcon, AstriskRegular as SiAstriskRegular };
export default AstriskRegular;
export type { AstriskRegularProps };
