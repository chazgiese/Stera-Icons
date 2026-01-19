import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerFieldFillProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldFill = memo(
  forwardRef<SVGSVGElement, SoccerFieldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-field-fill" {...props}>
      <path fill="currentColor" d="M11 8.65a3.5 3.5 0 0 0 0 6.7V21H4a3 3 0 0 1-3-3v-2h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H1V6a3 3 0 0 1 3-3h7zM20 3a3 3 0 0 1 3 3v2h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4v2a3 3 0 0 1-3 3h-7v-5.65a3.5 3.5 0 0 0 0-6.7V3z" />
        <path fill="currentColor" d="M4 14H1v-4h3zM23 14h-3v-4h3zM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

SoccerFieldFill.displayName = 'SoccerFieldFill';

// Triple export pattern (lucide-react style)
export { SoccerFieldFill, SoccerFieldFill as SoccerFieldFillIcon, SoccerFieldFill as SiSoccerFieldFill };
export type { SoccerFieldFillProps };
