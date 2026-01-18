import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AstriskBoldProps = Omit<IconBaseProps, 'children'>;

const AstriskBold = memo(
  forwardRef<SVGSVGElement, AstriskBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v8.26l7.16-4.13a1 1 0 0 1 1 1.73L14 12l7.17 4.14a1 1 0 1 1-1 1.73L13 13.72V22a1 1 0 0 1-2 0v-8.27l-7.16 4.13a1 1 0 0 1-1-1.73l7.17-4.14-7.16-4.13a1 1 0 1 1 1-1.73L11 10.26V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AstriskBold.displayName = 'AstriskBold';

// Triple export pattern (lucide-react style)
export { AstriskBold, AstriskBold as AstriskBoldIcon, AstriskBold as SiAstriskBold };
export type { AstriskBoldProps };
