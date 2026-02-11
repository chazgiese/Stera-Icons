import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarRegularProps = Omit<IconBaseProps, 'children'>;

const AwardStarRegular = memo(
  forwardRef<SVGSVGElement, AwardStarRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star" {...props}>
      <path fillRule="evenodd" d="M11.12 2.73c.4-.64 1.36-.64 1.77 0l.07.15 1.17 2.7 2.93.27c.91.08 1.3 1.22.6 1.83L15.44 9.6l.65 2.86c.2.9-.77 1.6-1.56 1.13l-1.78-1.05v3.7H13A3.75 3.75 0 0 1 16.75 20v.25h.75a.75.75 0 1 1 0 1.5h-11a.75.75 0 0 1 0-1.5h.75V20A3.75 3.75 0 0 1 11 16.25h.25v-3.7L9.47 13.6a1.05 1.05 0 0 1-1.56-1.13l.65-2.86-2.21-1.93c-.7-.61-.32-1.75.59-1.83l2.93-.27 1.17-2.7zM11 17.75c-1.24 0-2.25 1-2.25 2.25v.25h6.5V20c0-1.24-1-2.25-2.25-2.25zm.14-11.33c-.15.35-.48.59-.86.63l-2.15.2 1.62 1.41c.29.25.41.64.33 1.02l-.48 2.1 1.87-1.1c.28-.17.63-.2.94-.07l.13.07 1.86 1.1-.48-2.1c-.08-.38.05-.77.33-1.02l1.62-1.42-2.15-.2a1 1 0 0 1-.86-.62L12 4.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarRegular.displayName = 'AwardStarRegular';

// Triple export pattern (lucide-react style)
export { AwardStarRegular, AwardStarRegular as AwardStarRegularIcon, AwardStarRegular as SiAwardStarRegular };
export default AwardStarRegular;
export type { AwardStarRegularProps };
