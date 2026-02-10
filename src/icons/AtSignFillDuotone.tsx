import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignFillDuotone = memo(
  forwardRef<SVGSVGElement, AtSignFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 1.5a10.5 10.5 0 0 1 10.45 11.55 5.4 5.4 0 0 1-2.12 4c-1.17.81-2.64.94-3.9.3a1.5 1.5 0 0 0 1.5-2.6l-.14-.07c.22.11.52.12.83-.1.31-.2.73-.74.84-1.83q.04-.37.04-.75a7.5 7.5 0 1 0-5 7.07 1.5 1.5 0 0 1 1 2.83q-1.66.6-3.5.6a10.5 10.5 0 1 1 0-21" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.6 6.9c.83 0 1.5.67 1.5 1.5v4.5c0 1.22.47 1.65.7 1.78a1.5 1.5 0 0 1-1.41 2.65q-.83-.45-1.37-1.22a5.1 5.1 0 1 1-.62-8.6c.28-.37.71-.61 1.2-.61m-3.6 3a2.1 2.1 0 1 0 2.09 2.31l.01-.21-.01-.21A2.1 2.1 0 0 0 12 9.9" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFillDuotone.displayName = 'AtSignFillDuotone';

// Triple export pattern (lucide-react style)
export { AtSignFillDuotone, AtSignFillDuotone as AtSignFillDuotoneIcon, AtSignFillDuotone as SiAtSignFillDuotone };
export default AtSignFillDuotone;
export type { AtSignFillDuotoneProps };
