import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AstriskRegularDuotone = memo(
  forwardRef<SVGSVGElement, AstriskRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 13.29V22a.75.75 0 0 1-1.5 0v-8.7l.76-.44zM20.29 6.35a.75.75 0 0 1 .75 1.3l-7.53 4.34-.76-.43v-.86zM2.7 6.62a.75.75 0 0 1 1.02-.27l7.53 4.34v.87l-.74.43-7.54-4.34a.75.75 0 0 1-.27-1.03" opacity={0.4} />
        <path fill="currentColor" d="M12 1.25c.41 0 .75.34.75.75v9.56l8.3 4.79a.75.75 0 0 1-.76 1.3L12 12.86l-8.28 4.79a.75.75 0 0 1-.75-1.3l8.28-4.79V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AstriskRegularDuotone.displayName = 'AstriskRegularDuotone';

// Triple export pattern (lucide-react style)
export { AstriskRegularDuotone, AstriskRegularDuotone as AstriskRegularDuotoneIcon, AstriskRegularDuotone as SiAstriskRegularDuotone };
export type { AstriskRegularDuotoneProps };
