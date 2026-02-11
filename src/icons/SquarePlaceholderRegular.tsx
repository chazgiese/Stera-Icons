import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderRegularProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderRegular = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder" {...props}>
      <path fillRule="evenodd" d="M13.6 3.25q1.64-.01 2.69.06t1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2c0 1.57 0 2.7-.18 3.56q-.1.54-.34 1a4.8 4.8 0 0 1-2.07 2.07q-.46.24-1 .34c-.86.18-1.99.18-3.56.18h-3.2q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2c0-1.57 0-2.7.18-3.56q.1-.54.34-1a4.8 4.8 0 0 1 2.07-2.07q.46-.24 1-.34c.86-.18 1.99-.18 3.56-.18zm-8.84 5.4-.01 1.75v1.77l7.08 7.08h1.77q1.04 0 1.74-.02zm0 5.65c0 .78 0 1.37.04 1.87.05.62.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3q.73.05 1.87.05zm2-9.3-.24.1A3.3 3.3 0 0 0 5 6.77L17.23 19l.25-.1A3.3 3.3 0 0 0 19 17.23zm3.64-.25-1.75.01 10.58 10.59q.02-.71.02-1.75v-1.77l-7.08-7.08zm8.85 4.95c0-.78-.01-1.37-.05-1.87-.05-.62-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3q-.73-.05-1.87-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderRegular.displayName = 'SquarePlaceholderRegular';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderRegular, SquarePlaceholderRegular as SquarePlaceholderRegularIcon, SquarePlaceholderRegular as SiSquarePlaceholderRegular };
export default SquarePlaceholderRegular;
export type { SquarePlaceholderRegularProps };
