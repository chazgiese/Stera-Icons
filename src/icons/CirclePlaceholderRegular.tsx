import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderRegularProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegular = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.62 2.35a9.74 9.74 0 0 1 8.27 16.54 9.8 9.8 0 0 1-5.51 2.76A9.74 9.74 0 0 1 6.62 3.87a10 10 0 0 1 4-1.52M3.76 12.46a8.2 8.2 0 0 0 7.78 7.77zm.89-4.2q-.54 1.06-.76 2.21l9.64 9.64q1.15-.22 2.22-.76zm2.3-2.79a8 8 0 0 0-1.48 1.49l11.57 11.57a8 8 0 0 0 1.49-1.49zm3.52-1.58q-1.15.22-2.22.76l11.1 11.1q.54-1.07.76-2.22zm9.76 7.65a8.2 8.2 0 0 0-7.77-7.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegular.displayName = 'CirclePlaceholderRegular';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderRegular, CirclePlaceholderRegular as CirclePlaceholderRegularIcon, CirclePlaceholderRegular as SiCirclePlaceholderRegular };
export default CirclePlaceholderRegular;
export type { CirclePlaceholderRegularProps };
