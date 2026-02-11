import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarBoldProps = Omit<IconBaseProps, 'children'>;

const StarBold = memo(
  forwardRef<SVGSVGElement, StarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-bold" {...props}>
      <path fillRule="evenodd" d="M10.67 2.8a1.51 1.51 0 0 1 2.72.1l2.05 4.74 5.19.47a1.5 1.5 0 0 1 .85 2.64l-3.9 3.4 1.14 5c.3 1.32-1.12 2.3-2.24 1.64L12 18.16l-4.48 2.63c-1.12.66-2.54-.32-2.24-1.63l1.14-5.02-3.9-3.4a1.5 1.5 0 0 1 .85-2.63l5.19-.47L10.6 2.9zm-.4 5.9c-.22.5-.7.85-1.24.9L4.7 10l3.25 2.83c.42.36.6.92.48 1.47l-.96 4.2 3.75-2.21.19-.1c.37-.15.8-.15 1.17 0l.18.1 3.75 2.2-.96-4.2a1.5 1.5 0 0 1 .48-1.46L19.3 10l-4.32-.4a1.5 1.5 0 0 1-1.24-.9L12 4.73z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarBold.displayName = 'StarBold';

// Triple export pattern (lucide-react style)
export { StarBold, StarBold as StarBoldIcon, StarBold as SiStarBold };
export default StarBold;
export type { StarBoldProps };
