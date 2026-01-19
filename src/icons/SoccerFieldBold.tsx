import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerFieldBoldProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldBold = memo(
  forwardRef<SVGSVGElement, SoccerFieldBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-field-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-7 5.65a3.5 3.5 0 0 1 0 6.7V19h7a1 1 0 0 0 1-1v-2h-2.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1H21V6a1 1 0 0 0-1-1h-7zM4 5a1 1 0 0 0-1 1v2h2.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3v2a1 1 0 0 0 1 1h7v-3.65a3.5 3.5 0 0 1 0-6.7V5zm-1 9h1.5v-4H3zm16.5 0H21v-4h-1.5zM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerFieldBold.displayName = 'SoccerFieldBold';

// Triple export pattern (lucide-react style)
export { SoccerFieldBold, SoccerFieldBold as SoccerFieldBoldIcon, SoccerFieldBold as SiSoccerFieldBold };
export default SoccerFieldBold;
export type { SoccerFieldBoldProps };
