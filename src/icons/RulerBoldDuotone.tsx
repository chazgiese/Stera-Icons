import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulerBoldDuotone = memo(
  forwardRef<SVGSVGElement, RulerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ruler-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.9 2.18c.89-.88 2.31-.88 3.2 0L21.81 14.9c.88.88.88 2.3 0 3.18l-3.73 3.73c-.88.88-2.3.88-3.18 0L2.18 9.1a2.25 2.25 0 0 1 0-3.18zm1.78 1.41a.25.25 0 0 0-.36 0L3.6 7.32c-.1.1-.1.26 0 .36L16.32 20.4c.1.1.26.1.36 0l3.73-3.73c.1-.1.1-.26 0-.36z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.2 14.8a1 1 0 0 0-1.4 0l-1.5 1.5q-.03 0-.05.04l1.41 1.4.05-.03 1.5-1.5a1 1 0 0 0 0-1.42M12.2 11.8a1 1 0 0 0-1.4 0l-1.5 1.5q-.03 0-.05.04l1.41 1.4.05-.03 1.5-1.5a1 1 0 0 0 0-1.42M9.2 8.8a1 1 0 0 0-1.4 0l-1.5 1.5q-.03 0-.05.04l1.41 1.4q.03 0 .05-.03l1.5-1.5a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

RulerBoldDuotone.displayName = 'RulerBoldDuotone';

// Triple export pattern (lucide-react style)
export { RulerBoldDuotone, RulerBoldDuotone as RulerBoldDuotoneIcon, RulerBoldDuotone as SiRulerBoldDuotone };
export default RulerBoldDuotone;
export type { RulerBoldDuotoneProps };
