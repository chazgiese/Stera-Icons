import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldFillDuotone = memo(
  forwardRef<SVGSVGElement, SoccerFieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-field-fill-duotone" {...props}>
      <path d="M11 3v5.65a3.5 3.5 0 0 0 0 6.7V21H4a3 3 0 0 1-3-3v-2h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H1V6a3 3 0 0 1 3-3z" opacity={0.4} />
        <path d="M1 10h3v4H1zM23 14h-3v-4h3zM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path d="M20 3a3 3 0 0 1 3 3v2h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4v2a3 3 0 0 1-3 3h-7v-5.65a3.5 3.5 0 0 0 0-6.7V3z" opacity={0.4} />
        <path fillRule="evenodd" d="M13 8.65a3.5 3.5 0 0 1 0 6.7V21h-2v-5.65a3.5 3.5 0 0 1 0-6.7V3h2zm-1 1.85a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path d="M5 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1v-2h3v-4H1V8zM23 10h-3v4h3v2h-4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4z" />
    </IconBase>
  ))
);

SoccerFieldFillDuotone.displayName = 'SoccerFieldFillDuotone';

// Triple export pattern (lucide-react style)
export { SoccerFieldFillDuotone, SoccerFieldFillDuotone as SoccerFieldFillDuotoneIcon, SoccerFieldFillDuotone as SiSoccerFieldFillDuotone };
export default SoccerFieldFillDuotone;
export type { SoccerFieldFillDuotoneProps };
