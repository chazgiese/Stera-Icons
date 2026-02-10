import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarRegularProps = Omit<IconBaseProps, 'children'>;

const StarRegular = memo(
  forwardRef<SVGSVGElement, StarRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="star" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.89 2.92a1.26 1.26 0 0 1 2.22 0l.05.09 2.11 4.86 5.33.5c1.1.1 1.56 1.45.72 2.19l-4.02 3.5 1.18 5.15c.24 1.1-.94 1.91-1.87 1.36L12 17.87l-4.6 2.7c-.94.55-2.12-.26-1.88-1.36l1.18-5.16-4.02-3.5c-.84-.73-.38-2.09.72-2.19l5.33-.49 2.11-4.86zm-.85 5.68c-.18.43-.58.71-1.04.75l-4.9.45 3.7 3.22c.34.3.5.77.4 1.22L7.1 19l4.25-2.5.15-.07c.37-.16.79-.13 1.13.07L16.9 19l-1.09-4.76c-.1-.45.06-.92.4-1.22l3.7-3.22-4.9-.45a1.3 1.3 0 0 1-1.04-.75L12 4.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarRegular.displayName = 'StarRegular';

// Triple export pattern (lucide-react style)
export { StarRegular, StarRegular as StarRegularIcon, StarRegular as SiStarRegular };
export default StarRegular;
export type { StarRegularProps };
