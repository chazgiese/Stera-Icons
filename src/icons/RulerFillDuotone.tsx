import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulerFillDuotone = memo(
  forwardRef<SVGSVGElement, RulerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ruler-fill-duotone" {...props}>
      <path d="M5.9 2.18c.89-.88 2.31-.88 3.2 0L21.81 14.9c.88.88.88 2.3 0 3.18l-3.73 3.73c-.88.88-2.3.88-3.18 0l-2.66-2.66 2.96-2.95a1 1 0 0 0-1.42-1.42l-2.95 2.96-1.6-1.59 2.97-2.95a1 1 0 0 0-1.42-1.42l-2.95 2.96-1.6-1.59 2.97-2.95a1 1 0 0 0-1.42-1.42l-2.95 2.96-2.66-2.66a2.25 2.25 0 0 1 0-3.18z" opacity={.4} />
        <path fillRule="evenodd" d="M15.2 14.8a1 1 0 0 0-1.4 0l-2.97 2.95 1.42 1.42 2.96-2.96a1 1 0 0 0 0-1.42M12.2 11.8a1 1 0 0 0-1.4 0l-2.97 2.95 1.42 1.41 2.96-2.95a1 1 0 0 0 0-1.42M9.2 8.8a1 1 0 0 0-1.4 0l-2.96 2.95 1.4 1.41 2.97-2.95a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

RulerFillDuotone.displayName = 'RulerFillDuotone';

// Triple export pattern (lucide-react style)
export { RulerFillDuotone, RulerFillDuotone as RulerFillDuotoneIcon, RulerFillDuotone as SiRulerFillDuotone };
export default RulerFillDuotone;
export type { RulerFillDuotoneProps };
