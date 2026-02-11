import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AwardStarRegularDuotone = memo(
  forwardRef<SVGSVGElement, AwardStarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star-duotone" {...props}>
      <path d="M12.75 12.55v3.7H13A3.75 3.75 0 0 1 16.75 20h-1.5c0-1.24-1-2.25-2.25-2.25h-2c-1.24 0-2.25 1-2.25 2.25h-1.5A3.75 3.75 0 0 1 11 16.25h.25v-3.7l.75-.45z" opacity={.4} />
        <path d="M17.5 20a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z" />
        <path fillRule="evenodd" d="M11.12 2.73c.4-.64 1.36-.64 1.77 0l.07.15 1.17 2.7 2.93.27c.91.08 1.3 1.22.6 1.83L15.44 9.6l.65 2.86c.2.9-.77 1.6-1.56 1.13L12 12.1l-2.53 1.5a1.05 1.05 0 0 1-1.56-1.13l.65-2.86-2.21-1.93c-.7-.61-.32-1.75.59-1.83l2.93-.27 1.17-2.7zm.02 3.69c-.15.35-.48.59-.86.63l-2.15.2 1.62 1.41c.29.25.41.64.33 1.02l-.48 2.1 1.87-1.1c.28-.17.63-.2.94-.07l.13.07 1.86 1.1-.48-2.1c-.08-.38.05-.77.33-1.02l1.62-1.42-2.15-.2a1 1 0 0 1-.86-.62L12 4.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarRegularDuotone.displayName = 'AwardStarRegularDuotone';

// Triple export pattern (lucide-react style)
export { AwardStarRegularDuotone, AwardStarRegularDuotone as AwardStarRegularDuotoneIcon, AwardStarRegularDuotone as SiAwardStarRegularDuotone };
export default AwardStarRegularDuotone;
export type { AwardStarRegularDuotoneProps };
